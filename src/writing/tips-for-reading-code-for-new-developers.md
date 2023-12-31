---
title: "Tips for reading code (for new developers)"
date: "2022-09-16"
image: "https://images.unsplash.com/photo-1474377207190-a7d8b3334068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
excerpt: "
One of the most important transitions new developers need to make is from working on their own projects to existing codebases within larger teams. Most often working as a developer involves extending and maintaining code that’s already been written."
tags: ["learning to code"]
---

<article>

<h1> Tips for reading code (for new developers) </h1>

<p>One of the most important transitions new developers need to make is from working on their own projects to existing codebases within larger teams. Most often working as a developer involves extending and maintaining code that’s already been written. This means that being able to read other people’s code is an important skill. Looking at code and trying to understand it can often be difficult and intimidating but there are ways to make the process easier.</p>

<img src="https://images.unsplash.com/photo-1474377207190-a7d8b3334068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt="Photo by Oli Dale on Unsplash" />

<h2> Read the documentation 📖 </h2>

<p>If there is documentation available for a project it’s important to read it. Established frameworks, libraries and APIs will usually have well maintained and extensive documentation to help the millions of developers who use them. Even on smaller projects READMEs often contain set up instructions and list the technologies and dependencies used.</p>

<h2> Download the code and run it locally 🚂 </h2>

<p>To understand how code works there’s nothing better than downloading and running it locally. It’s helpful to start with a small piece of the code that you understand and trace it carefully back through the application. Examine each unknown part in the context of what you already know and gradually the whole picture will start to appear.</p>

<h2> Use debugging tools 🔍 </h2>

<p>When you run into an error or something you don’t understand in the code you can use debugging tools like VS Code Debugger or Browser Dev Tools. Set breakpoints in the debugger to inspect variables as you run the programme. Viewing computed styles using the CSS panel in Dev Tools is a really helpful way of seeing which CSS properties are being applied and how by the browser.</p>

<h2> Take a higher level approach ☁️ </h2>

<p>Stepping through the code is important but you also need to get a sense of how the whole project fits together. Is there a database and if so what type? Does the project have a front end and back end? How is it deployed and hosted? Where is the business logic contained? Try talking through this out loud or drawing it out on a piece of paper.</p>

<h2> Read comments, commit messages, GitHub discussions and code reviews 📜 </h2>

<p>Comments can clarify what code is intended to do and why the developer(s) may have made certain choices over others. Commit messages record the evolution of the project and the scope and purpose of changes. Developers working on a project will often discuss their approaches in issues and when reviewing each other's PRs.</p>

<h2> Look at the tests 🧪 </h2>

<p>Tests are another indication of the purpose of a programme. Test suites often have statements that assert what a feature does for example the below in the popular testing library Cypress:</p>

<pre>
<code>
describe("Testing the application", function() {
    it("should login with username and password", function() {

        // visit the test page
        cy.visit('https://demo.com/')

        cy.get('#username').type('test123')

        cy.get('#password').type('123')

        cy.get('#log-in').click();

        cy.url().should('include', '/app')

    });
});
</code>
</pre>

<p>Edge cases used in tests show the boundaries of what the code is expected to be able to deal with. Rarely is everything in a codebase tested so they can point you towards the most critical parts.</p>

<p>The best way to get better at reading code is practice. Expose yourself to high quality code samples regularly whether at work or in open source projects. Reading code will help you write better and more maintainable code yourself.</p>

</article>
