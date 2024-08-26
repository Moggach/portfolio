---
title: "Notes from learning Typescript"
date: "2024-08-25"
image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
excerpt: "Over the last few weeks I’ve been diving into learning TypeScript properly. These are my notes from that learning process."
tags: ["typescript", "learning to code"]
---

<article>

<p>Over the last few weeks I’ve been diving into learning TypeScript properly after coming across it in codebases since I started work as a developer in 2022. It’s been a steep learning curve and sometimes it feels as hard as learning JavaScript all over again but it's very satisfying to start feeling confident when working with types. These are my notes from learning TypeScript.
</p>

<img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="An image of a Macbook Pro">
Photo by <a href="https://unsplash.com/@wasdrew?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andras Vas</a> on <a href="https://unsplash.com/photos/macbook-pro-turned-on-Bd7gNnWJBkU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
<h2>What is TypeScript?</h2>
<p>TypeScript is a strongly typed language that builds on JavaScript. TypeScript allows developers to define types for variables, function parameters, and return values and it reports errors when these types don’t match, TypeScript code is compiled into JavaScript before it runs in the browser or Node.js.</p>

<h2>Why use it?</h2>
<p>The main benefit of using TypeScript is its capacity for error reduction. TypeScript’s static type-checking helps catch errors during development rather than at runtime. This reduces the likelihood of bugs, especially in larger codebases. In fact, it eliminates a class of bug (such and such a variable is undefined) entirely. Enforcing types mean that you as the developer will not be allowed to do something that you previously told the compiler you didn’t want to be able to do. </p>

<h2>How I’m learning it</h2>
<p>I’m learning TypeScript through an online platform called <a href="https://www.executeprogram.com/">Execute Programme</a>. This gives me short interactive lessons where I can test what I’m learning by writing and running real code. The thing I love most about Execute Programme though is that it prompts me to review previous lessons at increasing intervals. This really helps me to remember what I learn and is definitely helping me to solidify some of the concepts behind TypeScript.</p> 

<h2>Challenges</h2>
<p>I have struggled with TypeScript frequently since starting to study it. The topics listed below have been the most puzzling for me so far but I’m sure there’s more to come!</p>

<ol>
<li>Type unions and intersections<br>
I am only just starting to grasp how these work and the difference between them. I couldn’t understand why when a variable could be either a number or a string you couldn’t then assign it to a number. I found this video that explains unions and intersections using set theory to be reality helpful for this</li><br>
<li>Distinction between types and run time values<br>
Part of why I struggled with unions and intersections was that it took me a while to understand that TypeScript doesn’t have access to run time values. This makes sense because types don’t exist at run time when TypeScript is compiled to regular JavaScript.</li><br>
<li>Index signatures<br>
I’ve come across these recently and I’ve been caught out by type mismatches between an explicit property and an index signature. I’m learning that Index signatures can be thought of as an overall type for an object and individual fields need to conform to that.</li>


<p>I’m looking forward to looking back on this post in a few months when hopefully these things will be easy for me.</p>

<h2>Future plans with TypeScript</h2>
<p>Now that I feel I’m comfortable with the TypeScript basics course I’m hoping to finish the Everyday TypeScript and Advanced TypeScript courses on <a href="https://www.executeprogram.com/">Execute Programme</a>. I would like to convert my <a href="https://domesticabuseservices.uk/">domestic abuse services mapping tool</a> from JavaScript to TypeScript as well. Finally, I’m going to put my skills into practice by writing and reading more TypeScript code in my work at <a href="https://commonknowledge.coop/">Common Knowledge</a>.</p>
</article>