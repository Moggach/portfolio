---
title: "What I've learnt from working on a large software project"
date: "2024-04-14"
author: "Anna Cunnane"
image: "https://unsplash.com/photos/turned-on-macbook-pro-near-brown-ceramic-mug-ZMraoOybTLQ"
excerpt: "For the last couple of months at Common Knowledge we have been building an application called Mapped. This post is about some of things I’ve learnt about from working on this project."
tags: [""]
type: "article"
---
<article>
For the last couple of months at Common Knowledge we have been building an application called Mapped. Generously funded by the JRRT, it aims to empower activists and organizers with mapping and data enhancement tools. We’ve been writing and speaking about the process of building Mapped on our website and at our launch event at Pelican House. <a href="https://prototype.mapped.commonknowledge.coop/">Mapped</a> is live in alpha and feedback is welcome. This post is about some of things I’ve learnt about from working on this project.


<img src="https://unsplash.com/photos/turned-on-macbook-pro-near-brown-ceramic-mug-ZMraoOybTLQ" alt="turned on MacBook Pro near brown ceramic mug">

Photo by <a href="https://unsplash.com/@sapegin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Artem Sapegin</a> on <a href="https://unsplash.com/photos/turned-on-macbook-pro-near-brown-ceramic-mug-ZMraoOybTLQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
One of the first things I had to understand was how we were going to build Mapped on top of an existing project (My Society’s Local Intelligence Hub). This was new for me as I had only previously created new projects from scratch. Forking Local Intelligence Hub gave us a ready made database schema; user authentication and relevant data that meant we could get up and running very quickly. Adding a NextJs app into a Python Django project and writing a GraphQl API to communicate between them helped me to better understand what people mean when they talk about distinct frontends and backends in an application. 

Mapped has also given me the chance to dive into Next.js 13.4 and its app directory with nested routes and server components by default. This forced me to think about what makes using a client component necessary (like user interactions) and the sound architectural principles behind rendering as much as possible on the server. Nested routes helped me to grasp the page structure of Mapped at a glance even as it became bigger and more complex. 
One of the nice things about this project was that we could start the frontend from scratch which made it easier to use this version because we didn’t have to upgrade an existing codebase. 

Another major design choice was to use a GraphQL instead of a Rest API in Mapped. This seemed somewhat counter intuitive to me at first. We would need to install a package like Strawberry GraphQL and write custom resolvers to handle Django’s ORM models and that seemed like a lot of extra steps. But I liked the flexibility and efficiency of GraphQL and how well it works with Typescript in NextJs. Our aim, which was to represent organizations’ member lists on maps with enhanced political data, which is the kind of complex and interconnected data that GraphQL was designed for. GraphQL can also better support real time data which is an exciting future feature idea.

It’s been really satisfying to work as part of the engineering team on a large software project. The complexity of the project and its scale has helped me to understand better the principles behind good software design. It’s also brought home to me the importance of having a good continuous integration/deployment pipeline and test coverage. I hope I get the chance to work further on Mapped or tools like it in the future.


</aricle>