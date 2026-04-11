---
title: "Shifting mindset as a mid-level engineer"
date: "2026-04-03"
author: "Anna Cunnane"
image: "https://unsplash.com/photos/yellow-red-blue-and-green-lego-blocks-kn-UmDZQDjM"
excerpt: "In September of this year I will have been working as a full time software developer for 5 years. In this time I’ve progressed from apprentice to junior and now mid level software engineer. I’ve been considering what I’ve learnt..."
tags: ["learning to code"]
type: "article"
---
<article>

<p>In September of this year I will have been working as a full time software developer for 5 years. In this time I’ve progressed from apprentice to junior and now mid level software engineer. I’ve been considering what I’ve learnt and apart from the obvious things like syntax there have also been important lessons in code design and quality. I feel like I am making the shift from <em>Does this work?</em> to <em>How could this fail and how will somebody work with it in 6 months time?</em></p>
<p>These are some of the lessons I’ve learnt when trying to shift my mindset to that of a mid-level developer:</p>
<img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A top-down, overhead view of a dense, chaotic pile of assorted plastic building bricks in various colors, shapes, and sizes">
<p>Photo by <a href="https://unsplash.com/@xavi_cabrera">Xavi Cabrera</a> on <a href="">Unsplash</a></p>
<h2>Readability over cleverness</h2>
<p>When you start out learning to code you often hear a lot about conciseness. I used to try to make my code as short as possible using ternary operators and nested map/filter functions. While these things have their place I’ve learnt it’s often better to use a for loop or an explicit named function. I try to imagine the next developer reading my code and understanding the intention at a glance rather than have to dig through it.</p>
<h2>Defensive programming and edge case handling</h2>
<p>Initially like many junior developers I only wrote code for the ‘happy path’ i.e. when everything goes to plan. Over time I’ve learnt to add error handling, think about edge cases and graceful degradation where if a specific part of an application fails or is unsupported the rest can still function. I now assume the worst will happen and think about what the user will see when it does.
</p>
<h2>Understanding time and space complexity</h2>
<p>My understanding of big o notation is only basic (I don’t have a computer science degree) and I’d like to learn more. However just knowing why I might use a Set over an Array or why a searching algorithm might not scale is really useful. I’m moving away from using brute force methods when working with large data sets or expensive operations. 
</p>
<h2>Balancing composition and inheritance</h2>
<p>
I used to try to avoid writing duplicate code by creating one base class and having everything else inherit from it. Now I lean more towards composition - building complex functionality by combining smaller discrete pieces. My aim isn't to abandon inheritance entirely, but to recognize when it is becoming a liability.  
</p>
<h2>Testability</h2>
<p>
I was guilty of seeing testing as an afterthought and now I am learning to use it as a design tool. If a function is difficult to test then that is a red flag that it is trying to do too many things or it has too many hidden dependencies. Writing tests encourages me to use dependency injection rather than reaching out into the global scope making my code modular and more predictable.</p>
<p>These lessons have helped me to shift my focus from the immediate satisfaction of getting something working to building something that will last.</p>
</article>
