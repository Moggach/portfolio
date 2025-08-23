---
title: "Building a public api for Domestic Abuse Services Mapped"
date: "2025-08-23"
author: "Anna Cunnane"
image: "https://annacunnane.co.uk/images/da-services-api.png"
excerpt: "I've been building a public API for Domestic Abuse Services Mapped..."
tags: ["tech for good", "api", "product design"]
type: "article"
---
<article>

<p>Over the past 18 months I’ve been building a <a href="https://domesticabuseservices.uk/?page=1">website</a> to help victim/survivors of domestic abuse find their local support service. My main focus has been developing the frontend of the site with a user friendly interface that helps people quickly find support.</p>

<p>But alongside that, I’ve been thinking about how to make the backend API public so that other developers and organisations can benefit from the same data.</p>

<p>Some examples of this could be:</p>
<ul>
<li>A local authority could embed support services into their own site</li>
<li>A researcher could analyse geographical coverage of services</li>
<li>Other community projects could build apps on top of the data.</li>
</ul>

<p>The data for the services is stored in an Airtable database and my Next.js backend acts as a middle layer between Airtable and the frontend. My backend ensures only approved services are shown and converts location data into GeoJson which is a common format used for mapping.</p>
<br><br>
<img src="https://annacunnane.co.uk/images/da-services-api.png" alt="Swagger UI page for the UK domestic abuse services API showing GET and POST endpoints for /api/airtable and a GeoJSON schema.">
<caption>Interactive API documentation with Swagger</caption>

<h2>Making a public route</h2>
<p>The first step was to expose a public GET route at <a href="https://domesticabuseservices.uk/api/airtable">https://domesticabuseservices.uk/api/airtable</a></p>
<p>This endpoint returns all approved services in GeoJSON format. This is an example of the response:</p>
<pre><code>
{
  "type": "Feature",
  "properties": {
    "name": "Example Service",
    "description": "Support for women experiencing domestic abuse",
    "address": "123 Main St",
    "postcode": "AB12 3CD",
    "email": "info@example.com",
    "website": "https://example.com",
    "phone": "0123456789",
    "donate": "https://donate.example.com",
    "serviceType": ["Support"],
    "serviceSpecialism": ["Women"],
    "approved": true,
    "localAuthority": "London Borough"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [-0.1276, 51.5072]
  }
}
</code></pre>
<h2>Protecting the API with rate limiting</h2>
<p>When you make a service public you need to think about the possibility of somebody abusing it. I added rate limiting with Upstash Redis to prevent people from overwhelming the API with too many requests.</p>
<pre><code>
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '10 s'),
  analytics: true,
});
</code></pre>
<p>This means that a client can only make 5 requests every 10 seconds. If they exceed that they’ll get a 429 Too Many Requests response.</p>
<h2>POST Requests with Authentication</h2>
<p>The API also supports POST requests so that new services can be added. At the moment this is restricted so that only requests with a Bearer token will be authenticated. This is available on request from hello@domesticabuseservices.uk.</p>
<p>New services that are created in Airtable are unapproved by default, so I can review them before publishing them on the site.</p>

Here’s an example of a request:
<pre><code>
curl -X POST https://domesticabuseservices.uk/api/airtable \
  -H "Authorization: Bearer <your_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "Service name": "New Support Line",
    "Service address": "456 High St",
    "Service postcode": "XY99 1ZZ",
    "Service description": "Helpline for survivors",
    "Service email address": "support@helpline.org",
    "Service website": "https://helpline.org",
    "Service phone number": "0800123456",
    "Service type": ["Helpline"],
    "Specialist services for": ["Young people"],
    "Local authority": "Wandsworth"
  }'
</code></pre>

<h2>Documentation</h2>
<p>I’ve documented the API with <a href='https://swagger.io/specification/'>Swagger/Open API</a> to make it easier to use. Anyone can visit  That means anyone can visit <a href="https://domesticabuseservices.uk/api-docs">https://domesticabuseservices.uk/api-docs</a> and see an interactive interface where they can try out making requests and read the schema.</p>

<p>I hope that the API will allow more people and services to use and interact with my database of domestic abuse services across the UK. It’s also been a great learning opportunity for me to learn how to design and build a REST API.</p>


</article>