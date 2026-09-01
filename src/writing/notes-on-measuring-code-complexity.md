---
title: "Notes on measuring code complexity"
date: "2026-08-31"
author: "Anna Cunnane"
image: "https://images.unsplash.com/photo-1761618926679-43916e53b279?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
excerpt: "I think most developers have had the experience of reviewing a PR that passes all of the tests but still somehow feels off. It's hard to read and reason about, and you can't articulate why..."
tags: ["code quality", "learning to code"]
type: "article"
---

<article>

<p>I think most developers have had the experience of reviewing a PR that passes all of the tests but still somehow feels off. It’s hard to read and reason about, and you can’t articulate why. Or working on a legacy codebase where you’re nervous to make changes that may have unintended consequences elsewhere. This feeling is usually a sign that the code has crossed a threshold of complexity that your brain can’t grasp all at once.</p>

<p>I’ve recently been introduced to the idea that code complexity is something that can be measured with metrics and reduced by automated tools. This post is some notes from what I’ve been learning: the main metrics that are used to quantify complexity, what each one captures (and misses), and the tools that can catch it before the code is shipped.</p>

<img src="https://images.unsplash.com/photo-1761618926679-43916e53b279?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tangled electrical wires and cables interwoven on a utility pole against a white background, depicting urban infrastructure complexity and disorder">
<p>Photo by <a href="https://unsplash.com/@felixngo">Felix Ngo</a> on <a href="https://unsplash.com/photos/tangled-electrical-wires-on-a-utility-pole-zneHCpeB77k">Unsplash</a></p>

<h2>What does code complexity actually mean?</h2>
<p>There are two different types of complexity in code. Structural complexity refers to how intricate a codebase’s internal structure is. For example, how many moving parts there are, and how tangled the relationships between them are. Cognitive or human effort is the mental effort it takes somebody to read the code and hold its logic in their head.</p>
<p>In either case complex code is hard to write good tests for; hard to review and hard to onboard new developers onto without the risk of them making breaking changes. It’s also associated with higher numbers of bugs.</p>

<h2>Cyclomatic complexity</h2>
<p>This is the oldest and most common metric. Developed by Thomas McCabe in 1976 it is a way to count every branch through a function. It uses graph theory but simply put: start at 1, and add 1 for every branch (an if, a case, a &&, a ||, or a ternary). NIST (National Institute of Standards and Technology) recommends keeping functions under 10 but everything over 20 would be considered a good candidate for refactoring.</p>
<p>One major weakness of this metric is that it doesn’t take into account how the branches are arranged. A function with 10 independent ifs and a function with the same ifs nested five deep inside each other can score identically even though one is much harder to read.</p>

<h2>Cognitive complexity</h2>
<p>This is something SonarSource tried to address in 2017. Instead of just counting branches they penalize things that make code harder to follow: nesting adds more than a flat branch does, and each level of nesting compounds the next one. A switch statement and an equivalent pile of nested ifs can have the exact same cyclomatic complexity but the nested version will score much higher cognitively.</p>

<h2>Other metrics</h2>
<p>There are two other commonly used metrics if you dig deeper into this topic. Halstead complexity (1977) estimates effort based on the number of distinct operators and operands in the code. The Maintainability Index combines Halstead volume, cyclomatic complexity, and lines of code into a 0–100 number.</p>

<h2>Tools</h2>
<p>Many of the tools you might be already using can perform code complexity analysis. ESLint has a complexity rule for JS/TS. SonarQube can gate PRs on complexity thresholds in your CI pipeline. CodeScene pairs complexity with churn data to flag complex code that is also being changed constantly which can be a particularly bad combination.</p>

<p>None of these metrics are perfect, and none replace human judgment — a high cyclomatic score might just mean more test coverage is needed, not that a function is badly written, and a low one doesn’t guarantee the code is readable. But they're a useful starting point to ask questions about the code and a helpful screening tool for the issues we might overlook. </p>

</article>
