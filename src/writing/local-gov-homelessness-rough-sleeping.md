---
title: "Attending the Local Government Homelessness/Rough Sleeping Hackathon in Birmingham"
date: "2025-12-09"
author: "Anna Cunnane"
image: "https://annacunnane.co.uk/images/1764152275823.jpeg"
excerpt: "Last month I was fortunate to attend the Local Government Homelessness/Rough Sleeping Hackathon in Birmingham."
tags: ["tech for good", "hack days", "product design", "hackathon"]
type: "article"
---
<article>
<p>Last month I was fortunate to attend the Local Government Homelessness/Rough Sleeping Hackathon in Birmingham. This is my report from the day including my team’s project and my reflections on what I learned.</p>

<img src="https://annacunnane.co.uk/images/1764152275823.jpeg" alt="A man and a woman standing at a lectern. The screen behind them reads Welcome to Local Government Innovation Hackathon on homelessness, rough sleeping and temp accommodation" />
<caption>Introducing the hackathon</caption>

<h2>Who was there?</h2>
<p>The hackathon has speakers and attendees from local and central government, housing professionals and people from the third sector. It was run by the <a href="https://www.gov.uk/government/organisations/government-digital-service">Government Digital Service</a> in partnership with Birmingham City Council.
</p>
<h2>What was the hackathon about?</h2>
<p>The hackathon was a two day event where people collaborated to build and prototype tech solutions to the problems of homelessness and rough sleeping. We started with understanding the challenges facing councils around homelessness and rough sleeping. What particularly struck me was the amount that councils were having to spend on temporary accommodation and the impact this was having on individuals and families. For more on this check out this brilliant book <a href="https://www.agendapub.com/page/detail/debt-trap-nation/?k=9781788218641">Debt Trap Nation: Family Homelessness in a Failing State by Katherine Brickell and Mel Nowicki</a>
This helped us to ground our projects in the experiences and needs of real people.</p>
<h2>The problem statements</h2>
<p>Every hackathon has problem statements and these were ours:</p>
<p>1. Using data and AI to predict and prevent homelessness</p>
How might we ethically harness data and AI to identify individuals or households at risk of homelessness earlier, and enable effective, trusted early interventions?</p>
<p>2. AI driven outreach and system efficiency for homelessness and rough sleeping services</p>
<p>How might we ethically leverage AI and digital tools to streamline case management, enhance outreach, and improve the usability of homelessness support systems?</p>
<p>3. Optimising temporary accommodation allocation through data driven Insights</p>
<p>How might we leverage data and analytics to optimise the allocation and management of temporary accommodation, ensuring resources are used efficiently, individual needs are met, and families spend the shortest possible time in temporary accommodation?</p>


<h2>Solutions</h2>
Some of the proposed solutions were using AI to:
<br><br>
<ul>
<li>improve finding and matching for temporary accommodation</li>
<li>predict future homelessness</li>
<li>identify patterns in rough sleeping to assist outreach workers</li>
<li>add chatbots to council service pages to either collect information or direct inquiries</li>
</ul>
<br>
In my opinion, the best applications of AI were practical e.g.:
<br><br>
<ul>
<li>plan the best route around a city centre for an outreach worker based on known rough sleeping locations</li>
<li>pre-populate an application form for temporary accommodation from user uploaded documents</li>
<li>flag high risk applications for temporary accommodation for example has children, domestic abuse, care leaver etc</li>
</ul>

<h2>My project</h2>
<p>My team’s project was for housing officers who are attempting to reach people at risk of homelessness before they present to the council needing accommodation. We fed a variety of risk indicators (rent and council tax arrears, benefits data) into an AI predictive model. Each data source was connected to the AI via an MCP server. We built a frontend dashboard in React that would give a user an instant view of their most high risk cases. In the future we would want to validate and train the model with anonymised pilot data.
</p>
<p><a href="https://github.com/Moggach/local-gov-innovation-hackathon">Source code</a></p>
<p><a href="https://local-gov-innovation-hackathon.vercel.app/">Live version</a></p>

<img src="https://annacunnane.co.uk/images/1764287760028.jpeg" alt="A large group of people assembled in front of a Christmas tree" />
<caption>The whole hackathon assembled</caption>

<h2>What did I learn?</h2>
<p>I learned a lot from being around such committed and knowledgeable people for the two days of the hackathon. Technically I enjoyed getting to know more about  developments such as <a href="https://www.anthropic.com/news/model-context-protocol">MCP servers</a> and tools like <a href="https://notebooklm.google/">Notebook LM</a> that I’ll use in my own learning.</p>
<p>My main takeaway is that the inclusion of AI in software that interacts with vulnerable people should be approached very cautiously. Listening to housing professionals it seemed that some issues  could be addressed by joined up data and systems. This is to say nothing of proper funding for councils and local services. We should be careful we don’t add AI onto a system without getting these more fundamental things right.</p>


</article>
