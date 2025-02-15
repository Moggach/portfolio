---
title: "Challenges I've faced while building Domestic Abuse Services Mapped"
date: "2025-02-15"
author: "Anna Cunnane"
image: "https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
excerpt: "It’s been a hugely rewarding experience building Domestic Abuse Services Mapped. There have been challenges along the way however..."
tags: ["mapping", "product design"]
type: "article"
---
<article>

<p>It’s been a hugely rewarding experience building <a href="https://domesticabuseservices.uk/?page=1">Domestic Abuse Services Mapped</a>. I’ve learnt so much about full stack development and product design. The response from users has also been overwhelmingly positive with some really helpful feedback on how to make the tool better. There have been challenges along the way however and I’m sure I will continue to face new ones as I maintain and develop the site.</p>

<img src="https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
Photo by <a href="https://unsplash.com/@patrickperkins?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Patrick Perkins</a> on <a href="https://unsplash.com/photos/assorted-notepads-ETRPjvb0KM0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      
<h2> API calls and the costs associated with them </h2>
<p>The project used to use two different APIs to deliver data to its front end - Mapbox and Airtable. Initially I was using the Mapbox API to calculate coordinates for each service every time the user loaded the page. Not only was this very slow but I rapidly ran up a bill with Mapbox that was over £100. Realising that this was not sustainable I started to calculate the coordinates once when I added a service to the database instead. This means a bit more up front work but results in a faster site that’s cheaper to run!
More recently, I have used up all of the API calls Airtable gives as part of its free tier. I’m pleased to have gotten to this milestone but I’ll have to think about whether I want to move my database off Airtable to save money.</p>

<h2>Designing the website with safety in mind</h2>
<p>One of my major concerns throughout building this site has been the safety of its users and of the services it lists. My intention was always to display the services on a map to help users visualise where their nearest source of help might be. However many services do not list their address publicly for safety reasons. As a result I had to come up with a different way of indicating their location whether that was the location of the local authority or the geographic center of the area they serve. This is also why I don’t have refuges listed on the site but only community outreach services. I signpost all users looking for a refuge space to the National Domestic Abuse Helpline.
Similarly, I’m aware that many people accessing the site may have their devices checked or monitored. I have a safe exit button that users can click to leave the site if they are disturbed whilst browsing. I have instructions on how to clear the site from your browser history on multiple browsers and devices.
</p>
<h2>Modelling the relationships between my data</h2>
<p>There are many different types of service that I want to list on the site and I needed to find a way to represent these. For example, a service may specialise in supporting South Asian women or LGBTQ survivors. The majority are domestic abuse services but there are also legal support services; pet fostering services and others. I have used filters to help users find the service that is right for them but it is difficult to balance this with making a user interface that is simple to use and understand. 
Another consideration has been displaying the relationship between a service and the local authority it is responsible for. One service can cover multiple local authorities so I’ve started to add that functionality to my local authority filter. 
</p>

<h2>How to design an intuitive and accessible UI</h2>
<p>As I’m a developer and not a UI/UX expert or a designer this was one of the biggest challenges for me. I used a component library called Daisy UI and its in-built themes to quickly build what I hope is an accessible and friendly user interface. I wanted the design of the site to be friendly and reassuring with a clean and modern look. I’m not sure if I have achieved this and I may consider hiring a designer to create a new visual language for the site.</p>

<p>This whole process has been a learning experience for me so each challenge is an opportunity to build my knowledge and skills. I’m looking forward to reading this post again in 6 months or a year’s time to see how much I’ve grown and what new questions I’m pondering.
</p>

</article>
