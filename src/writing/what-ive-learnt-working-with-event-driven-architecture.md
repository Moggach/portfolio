---
title: "What I've learnt working with event-driven architecture"
date: "2026-10-20"
author: "Anna Cunnane"
image: "https://images.unsplash.com/photo-1783723657213-3ee6ef2dd6e8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
excerpt: "Over the last few months I've been getting to work with an event-driven architecture system built with AWS EventBridge. It has led me to think more about the design choices that go into a system like this..."
tags: ["aws", "system design", "learning to code"]
type: "article"
---

<article>

<p>Over the last few months I've been getting to work with an event-driven architecture system built with AWS EventBridge. It has led me to think more about the design choices that go into a system like this compared to a more traditional approach. In this post I've written about what event-driven architecture is and some of the benefits and trade-offs I've come across.</p>

<img src="https://images.unsplash.com/photo-1783723657213-3ee6ef2dd6e8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Rows of white, blue, and red passenger buses">
<p>Photo by <a href="https://unsplash.com/@sschusterphotoart?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sebastian Schuster</a> on <a href="https://unsplash.com/photos/rows-of-white-blue-and-red-passenger-buses-NxX5FP84YUM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>

<h2>What is it?</h2>
<p>Event-driven architecture (EDA) is a software design pattern where components communicate by producing and reacting to events. Events are records that something has happened, for example, an order has been placed or a user has signed up.</p>
<p>The key idea behind EDA is decoupling. In a traditional request/response design, services call each other directly and depend on one another's responses. This means that a failure in one service can break the whole chain. In EDA, a producer publishes an event without knowing or caring who consumes it. Each consumer reacts to that event independently.</p>

<h2>Producers, consumers, and the event broker</h2>
<p>These form the basis of every event-driven system: something happens, it gets announced, and other parts of the system react.</p>
<ol>
<li>Producers detect that something has happened and publish an event about it. An event describes what happened but not what should be done about it.</li>
<li>Consumers subscribe to the events they care about and react to them. Several consumers can react to the same event in different ways.</li>
<li>The event broker sits in the middle, receiving events from producers and delivering them to consumers. Producers and consumers only need to know about the broker and not each other.</li>
</ol>

<h2>Using EventBridge</h2>
<p>The system I've been working on uses AWS EventBridge, which is an event bus. Producers put events onto the bus which routes them to one or more targets such as a Lambda function or an SQS queue. Failed deliveries are retried, and you can set up a dead-letter queue (DLQ) for events that keep failing.</p>
<p>A dead-letter queue keeps any event that couldn't be delivered to its target after all the retries. You can then look at what failed, fix the underlying problem, and reprocess the events.</p>

<img src="/images/eventbridge-diagram.svg" alt="Diagram of an EventBridge event bus: an order service and a user service publish events onto the bus and routes it to targets such as Lambda functions and an SQS queue, and events that still fail after retries go to a dead-letter queue">

<h2>Benefits</h2>
<p>There are many benefits to using event-driven architecture. The main one is loose coupling, as services can be built, deployed, and scaled independently. This makes systems more extensible, meaning that you can add a new consumer without changing the producer or any existing code. It also helps with resilience, as a slow or crashed consumer doesn't block the producer or other consumers.</p>

<h2>What can go wrong</h2>
<p>With any system design, there are trade-offs. For a simple CRUD application, event-driven architecture is probably overkill. There can also be issues with eventual consistency, as different parts of the system aren't updated at the same moment. Consumers also need to be idempotent (meaning that processing the same event twice has the same result as processing it once), as events can be delivered more than once.</p>

<p>Event-driven architecture is a useful design pattern to know when you expect to keep adding new behaviour over time, or you don't want a slow or unreliable consumer affecting everything else. It isn't the right choice for every system though and the extra complexity needs to be worth what you get in return.
</p>

</article>
