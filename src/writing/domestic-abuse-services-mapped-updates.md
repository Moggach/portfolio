---
title: "Domestic abuse services mapped - recent updates"
date: "2025-10-18"
author: "Anna Cunnane"
image: "https://annacunnane.co.uk/images/swagger-docs.png"
excerpt: "October is Domestic Violence Awareness month so it seems like a good time to revisit Domestic Abuse Services Mapped"
tags: ["tech for good", "api", "product design", "ui/ux"]
type: "article"
---


<article>
<p>October is Domestic Violence Awareness month so it seems like a good time to revisit <a href="https://domesticabuseservices.uk/">Domestic Abuse Services Mapped</a> and see how I can improve it. This is a project mapping domestic abuse support services and other support relevant to survivors across the UK. It is based on my experience as an advisor on the National Domestic Abuse Helpline and my training as a software developer. This blog post is a changelog of the latest updates to the website covering new features and design improvements.</p>

<h2>Added support for postcode and radius search in public API</h2>
<p>I recently wrote a <a href="https://annacunnane.co.uk/building-a-public-api-for-domestic-abuse-services-mapped/"> post</a> about adding a public API to the website and I’ve now added two more parameters to the GET request. Postcode is a string that can be added to the end of the request (for example ?postcode=SW1A2AA) to fetch services close to that location. Radius is a numeric parameter (in miles) that when used alongside the postcode filters results to services within that distance of the given postcode (for example ?postcode=SW1A2AA&radius=10).</p>
<br>
<img src="https://annacunnane.co.uk/images/swagger-docs.png" alt="Screenshot of the API documentation showing a GET request endpoint /api/airtable for retrieving UK domestic abuse services in GeoJSON format. The parameters include postcode for UK postcode search and radius for the search radius in miles, with a default value of 10.">
<caption>Interactive API documentation for postcode and radius search with Swagger</caption>
<br>
<h2>Removed dark mode</h2>
<p>I wasn’t happy with the code that I had written to implement a dark mode on the site and I took the decision to remove this for now instead of refactoring. This felt like a better option as I wasn’t sure how much value themes were adding to the user experience. I would rather focus my time on improving the design and usability as a whole and come back to light/dark modes at some point in the future.</p>

<h2>Added linting</h2>
<p>Although I am working alone on the site and the codebase isn’t large it’s still best practice to use linting to keep my code well formatted and catch bugs early. I’m using a Husky pre-commit hook to run es-lint and prettier across the staged files each time I make a commit. This also means that if others contribute to the project in future they’ll automatically follow the same conventions.</p>

<h2>Smaller UX improvements</h2>
<p>These are a few smaller changes intended to improve the user experience on the site.</p>
<h4>Improved map interactions</h4>
<p>I’ve updated the map to prevent zooming out or dragging the map beyond the UK. This is to help keep the focus on the area there are listings for and avoid user confusion.</p>
<h4>Scrolling to top of search results</h4>
<p>On mobile the user was previously being directed to the top of the page when clicking on the next and previous buttons in the search results. The site now scrolls to the top of the results meaning that the user doesn't lose their place.</p>
<h4>Only show clear filters button when filters are applied</h4>
<p>I felt that it was potentially confusing to have this button displayed all the time. Now its visibility is another indicator to users that they have filters applied.</p>
<br>
<img src="https://annacunnane.co.uk/images/scroll-to-results.gif" alt="Animated screen recording showing a list of pink cards with contact details for UK domestic abuse support services on the website domesticabuseservices.uk. The user scrolls through results and uses pagination buttons at the bottom of the page.">
<br>
<p>I’m hoping that these changes will help me to continue to grow the site and reach more people who need support. If you need help or advice about domestic abuse you can find your local service at https://domesticabuseservices.uk/. You can also contact the National Domestic Abuse Helpline at https://www.nationaldahelpline.org.uk/</p>

</article>