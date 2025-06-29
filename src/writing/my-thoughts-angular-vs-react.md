---
title: "My thoughts on Angular vs React"
date: "2025-06-29"
image: "https://annacunnane.co.uk/images/angular_react.png"
excerpt: "Angular is a JavaScript based front end framework developed by Google for building dynamic single page web applications..."
tags: ["angular", "react", "typescript", "learning to code"]
---
<article>

<p>Angular is a JavaScript based front end framework developed by Google for building dynamic single page web applications. I’ve been learning to use Angular as part of my role at <a href="https://policyinpractice.co.uk/">Policy in Practice</a> working on the <a href="https://betteroffcalculator.co.uk/">Better Off Calculator</a>. Up until this point all of my Javascript framework experience was in React so it’s really interesting to compare the differences between the two. These are my thoughts on the pros and cons of using Angular vs React...</p>

<br><br>

<img src="https://annacunnane.co.uk/images/angular_react.png" alt="An image showing the Angular and React logos side by side">
<br>

<h2>Angular is much fuller featured</h2>
<p>One of the main advantages of Angular is that it comes with many more features out of the box. Things like routing, state management and HTTP are handled within the core framework with no need to install extra dependencies. This can make it more robust and scalable and thus more suited to enterprise applications. Of course it also means there is a steeper learning curve as there is just more to learn.</p>

<h2>Angular uses TypeScript by default</h2>
<p>Of course you can (and most people do) use TypeScript with React but Angular is designed to be used with TypeScript. In fact it relies on features like decorators and metadata, which are only available in TypeScript. This means you get all the usual benefits of using TypeScript like better tooling; type safety and fewer bugs at runtime. For smaller projects however having the flexibility to use JavaScript with React is a benefit.</p>

<h2>Angular uses HTML with Angular specific syntax</h2>
<p>One of the major differences between Angular and React is that Angular uses HTML templates with  Angular-specific syntax (e.g., <code>*ngIf, [(ngModel)]</code>) and React uses JSX which mixes HTML and Javascript in the same file. Angular’s approach is good for structured apps where separating logic from markup helps maintain clarity. On the other hand if you need highly dynamic rendering logic React’s JSX might feel more intuitive.</p>

<h2>Dependency injections</h2>
<p>One of the core architectural features of Angular is its built-in dependency injection system. This allows you to define services that can be injected into components or other services, making it easy to manage shared logic like API calls and state. In React, there’s no built-in dependency injection mechanism and shared logic is typically managed through context, hooks, or external libraries. While this offers more flexibility, it can also lead to inconsistent patterns across a codebase.</p>

<p>Overall I’ve enjoyed learning Angular and can definitely see the benefits when building larger, more structured applications where having a clear architecture, built-in tooling, and strong typing from the start really helps.</p>

<h3>Resources for learning Angular</h3>
<br>
<p><a href="https://angular.dev/overview">Angular Official Docs</a></p>
<p><a href="https://www.youtube.com/angular">Angular YouTube Channel</a></p>
<p><a href="https://www.freecodecamp.org/news/angular-for-beginners-course/">FreeCodeCamp: Angular For Beginners Course</a></p>


</article>
