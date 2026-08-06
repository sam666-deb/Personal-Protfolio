---
title: "From Unity and AR/VR to full-stack: what actually transferred"
date: "2026-06-10"
excerpt: "I spent years in Unity and AR/VR before moving toward full-stack web and mobile development. Here's what carried over, and what I had to learn from scratch."
tags: [career, unity, full-stack]
---

Before my Master's at the University of Tasmania, most of my hands-on development time was in **Unity** — building 2D and AR/VR projects, and eventually training other students in game development at Daffodil International University's AR/VR lab. These days, a good chunk of my project time is React, React Native, Node/Express, and databases like MongoDB and Convex. People sometimes ask if that was a hard pivot. It wasn't — a surprising amount carried over.

## What transferred directly

- **Component thinking.** Unity trains you to think in terms of self-contained objects with their own state and behaviour (`GameObjects`, `MonoBehaviours`). That maps almost one-to-one onto React components.
- **Event-driven programming.** Input handlers, collision callbacks, coroutines — Unity is fundamentally event- and callback-driven, which made async JavaScript and WebSocket-based real-time features (like the messaging in [Zulibo](https://github.com/sam666-deb/Zulibo)) feel familiar rather than foreign.
- **Performance intuition.** Years of profiling frame rates and draw calls in Unity made me instinctively suspicious of unnecessary re-renders and unbounded loops — habits that transfer directly to React performance work.
- **Teaching complex systems simply.** Training beginner students in Unity forced me to explain state, references, and lifecycles in plain language. That's directly useful when writing documentation or onboarding someone onto a new codebase.

## What I had to learn from scratch

- **The request/response mental model.** Unity has no concept of "the network is unreliable and might be slow" baked into your daily workflow the way web development does. Handling loading states, retries, and race conditions properly took deliberate practice.
- **Schema design.** 3D scenes don't need normalized data models. Learning when to reach for MongoDB's flexibility versus a more structured backend like Convex was a genuinely new skill.
- **The deployment story.** Unity builds are a `.exe`, an `.apk`, or a WebGL bundle you hand off. Web and mobile apps live in a continuous pipeline — CI, environments, app store review — which is its own discipline.

## Where it's heading

I don't see these as separate tracks anymore. My current interests sit right at the intersection: immersive, real-time interfaces built with the rigor of full-stack engineering. That's also the direction of the research areas I'm exploring in my Master's — more on that in the Research section of my portfolio homepage.

If you've made a similar jump (or the reverse — from web into game/AR/VR dev), I'd genuinely like to compare notes.
