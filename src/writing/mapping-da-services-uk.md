---
title: "Building a tool to map domestic abuse services across the UK"
date: "2024-06-24"
image: "https://annacunnane.co.uk/images/daservices.png"
excerpt: "Over the last few months I’ve been working on a tool that will map the hundreds of domestic abuse support services across the UK."
tags: ["mapping", "nextjs", "mapbox"]
---

<article>

<p>Over the last few months I’ve been working on a tool that will map the hundreds of domestic abuse support services across the UK. I know from my experience working as an advisor on the National Domestic Abuse Helpline that it can be challenging for survivors, or those supporting them, to find the right service local to them. By creating a comprehensive and up to date database of these services and displaying them on a map I’m hoping to make this process easier. I’m excited to combine what I know about the domestic abuse sector and my skills as a developer to make something that meets this need.</p>

<img src="https://annacunnane.co.uk/images/daservices.png" alt="An image of the home page of a website showing a map of the UK with clustered service numbers on it." />
<caption>The site is live at <a href="https://domesticabuseservices.uk/">https://domesticabuseservices.uk/</a></caption>

<h2>Background to the project</h2>
<p>I have been working as an advisor on the National Domestic Abuse Helpline since 2019. In that time I have answered hundreds of calls from women experiencing abuse; their friends and family members and professionals. Almost every call involves making a referral to a local domestic abuse support service but the names and contact details for these services can be hard to find. This is especially the case for survivors who may be in a point of crisis or for those who have additional support needs. Having done some mapping projects already with Common Knowledge I decided that I would build the map that I wish I had access to when I’ve been speaking with women on the helpline.</p>

<h2>How it works</h2>
<p>The database of services is an Airtable base that is connected to a Next.js application using the Airtable API. I’m using Mapbox GL JS which is a client-side JavaScript library for building maps in web applications to display the map of the UK and the points that represent the locations of the services. Using Mapbox also has a clustering feature that I’ve used to indicate multiple services within a set geographical area (in this case 10 miles) when the user is zoomed out. 
The site started off as a single page application built in React but as it’s grown larger I’ve migrated it to Next.js to take advantage of server side rendering. For CSS I’m using Styled Components which has helped me to keep my CSS modular and allows dynamic styling based on user inputs. </p>

<h2>Challenges</h2>
<p>One of the main challenges I’ve faced with this project is how to efficiently use the Mapbox geocoding API to fetch geographical coordinates for the postcodes for each service. I found that this process was taking a lot of time and slowing down the performance of the site as well as burning through a lot of Mapbox’s free tier - meaning that this would start costing me money pretty quickly. As a solution to this I have decided to store the coordinates in the Airtable base which eliminates the need to call this API and simplifies the code. I also noticed that I was doing some processing of the Airtable data on the client that would be better handled on the server. As a result I made an API and server side routes in Next.js that mean the client is free to do what only it can - for example user interactions.</p> 

<h2>Project roadmap</h2>
<p>There are many things that I’d like to add to the site over the next few months. I’d like to convert the codebase to TypeScript to make it easier to debug and, as it’s open source, for others to maintain. I’m considering using a component library like shadcn to help me to iterate on the UI quickly as I’m not a designer. As most local domestic abuse services work within a specific local authority I’d like to add a visual layer to the map that shows local authority boundaries.  Ideally the site would have translations in multiple languages and I’m looking at using the next-i18next package for this. Finally I’m conscious that the site should meet the highest accessibility standards and I’m using the Web content accessibility guidelines (WCAG) 2.1 to achieve this.</p>

<p>Thank you for reading and if there’s something you’d like to see on the site get in touch with me at <a href="mailto:anna_cunnane@proton.me">anna_cunnane@proton.me</a></p>
<p>You can submit a service to be listed <a href="https://airtable.com/appksbQlVr07Kxadu/pagEkSrTVCs0yk2OS/form"> here</a></p>


</article>