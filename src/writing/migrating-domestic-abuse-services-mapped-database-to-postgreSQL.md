---
title: "Migrating the Domestic Abuse Services Mapped database to PostgreSQL"
date: "2026-01-31"
image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
excerpt: "Recently, I migrated the database for Domestic Abuse Services Mapped from Airtable to a PostgreSQL database hosted on Render."
tags: ["postgres", "tech for good", "product design"]

---

<article>
<h1>Migrating the Domestic Abuse Services Mapped database to PostgreSQL</h1>

<p>Recently, I migrated the database for Domestic Abuse Services Mapped from Airtable to a PostgreSQL database hosted on Render. The primary motivation for this was that I was consistently exceeding the API call limits of Airtable’s free plan. Switching to PostgreSQL also offered additional benefits, such as reducing reliance on external services—since I already use Render to host the application. As the site continues to grow and needs to handle higher traffic, PostgreSQL provides greater power, flexibility, and scalability for future development.</p>

<h2>Setting Up a PostgreSQL Database</h2>
<p>My first step was to set up a local PostgreSQL database. I installed PostgreSQL using Homebrew:</p>

<code>brew install postgresql</code>

<p>Next, I started the PostgreSQL service:</p>

<code>brew services start postgresql</code><br>
<p>To access the service, I used:</p>
<code>psql postgres</code><br><br>
<p>Inside the PostgreSQL shell, I created a new database called services with:</p>
<code>CREATE DATABASE services;</code><br><br>
<p>I then defined the table, columns, and data types to mirror the structure of my original Airtable database.</p>

<h2>Hosting on Render</h2>
<p>The next step was to <a href="https://render.com/docs/postgresql-creating-connecting"> create a new PostgreSQL instance on Render</a> and connect to it remotely in my Mac terminal using the provided connection string. I created the table, columns and data types to make a copy of my local database.</p>
<p>After this I:</p>
<ul>
<li>Exported the data from Airtable as a CSV file using their export feature</li>
<li>Converted the CSV file into SQL INSERT statements</li>
<li>Checked the data for duplicates and verified that all data types matched my new database schema</li>
<li>Used PostgreSQL’s \copy command to bulk import the data into both my local and remote databases.
</li>
</ul>
<br><br>
<img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="a series of brown wooden drawers in a cabinet">
Photo by <a href="https://unsplash.com/@jankolar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jan Antonin Kolar</a> on <a href="https://unsplash.com/photos/brown-wooden-drawer-lRoX0shwjUQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
<br><br>
<p>With the data now in PostgreSQL, I updated my API logic to use the <a href="https://www.npmjs.com/package/pg">node-postgres</a> package and fetch data directly from the new database. For example, I created this utility function:</p>

```
import { Client } from 'pg';

export async function getServicesFromDb() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  try {
    const result = await client.query(
      'SELECT * FROM services where approved = true'
    );

    return result.rows.map((row) => ({
      type: 'Feature' as const,
      properties: {
        name: row.name || '',
        description: row.description || '',
        address: row.address || '',
        postcode: row.postcode || '',
        email: row.email || '',
        website: row.website || '',
        phone: row.phone || '',
        donate: row.donate || '',
        serviceType: row.service_type || [],
        serviceSpecialism: row.service_specialism || [],
        approved: row.approved,
        localAuthority: row.local_authority || '',
      },
      geometry: {
        type: 'Point' as const,
        coordinates: [parseFloat(row.lng || '0'), parseFloat(row.lat || '0')],
      },
    }));
  } finally {
    await client.end();
  }
}
```

<p>This allowed me to fetch and serve data from PostgreSQL, replacing the old Airtable logic. I connected my application code to the database using environment variables e.g.</p>
<code>const client = new Client({ connectionString: process.env.DATABASE_URL });</code>

<h2>Finishing Steps</h2>
<p>As the API is public, I updated my <a href="https://domesticabuseservices.uk/api-docs">Swagger documentation</a> to reflect the new PostgreSQL data source. This will help me keep track of the API structure and endpoints, and make it easier for future collaborators to understand and use the API. One of the major advantages of using Airtable was the user interface. To replicate this I set up connections in the GUI application DataGrip to both my local and remote databases.This makes it easier to inspect records and run queries. Since this was a significant refactor, I spun up a staging environment on Render to test the changes. Once I was confident that everything was working as expected I pushed the updates to the production environment.</p>
<p>I’m satisfied that the site now benefits from a more robust, scalable, and maintainable backend powered by PostgreSQL.</p>

