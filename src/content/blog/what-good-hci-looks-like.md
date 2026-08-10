---
title: "What \"good\" HCI actually looks like in a product you use every day"
date: "2026-08-11"
excerpt: "HCI sounds academic until you notice how many times a day a well-designed interaction quietly saves you from frustration — and how few people notice when it works."
tags: [HCI, design, ux]
---

Human-computer interaction sounds like an academic field until you realize you experience it — well or badly — dozens of times before lunch. The strange thing about *good* HCI is that it's usually invisible. You only really notice interaction design when it's bad: the button that doesn't respond, the form that loses your data, the app that makes you feel stupid for not knowing its hidden gesture.

So instead of writing another abstract definition, I want to point at specific, ordinary interactions I run into constantly, and explain what's actually going on underneath them.

## Undo Send (Gmail)

You hit send, panic for half a second, then click "Undo." This is a small feature solving a real HCI principle: **error tolerance**. Good interfaces assume the user will make mistakes and build in a forgiving recovery path, rather than treating every action as final and irreversible. The alternative — a confirmation dialog before every send — technically prevents the same mistake, but at the cost of adding friction to *every single email*, for the sake of preventing a mistake that happens rarely. Undo Send solves the same problem without punishing the 99% of sends that were correct.

## Pull-to-refresh

There's no technical reason a refresh needs a downward swipe gesture with rubber-band resistance — a button would work fine. But pull-to-refresh maps onto a physical intuition: pulling something down and letting it snap back, like a spring. That's **direct manipulation** — a core HCI concept where the interface behaves like it's obeying physical rules you already understand, so you don't need to learn an abstract command. It also gives immediate visual feedback the moment you touch it, before the action even completes, which matters more than it sounds like it should.

## Google Maps rerouting

When you miss a turn, Maps doesn't just silently recalculate — it says "Rerouting" out loud and shows it on screen. This is **system status visibility**, one of the oldest usability heuristics there is (it goes back to Nielsen's heuristics from 1994, and it still gets ignored constantly). The app could recalculate silently and just show a new route; instead it explicitly tells you it noticed something changed. That one sentence prevents a moment of "wait, is this broken?"

## The "someone is typing…" indicator

Small, but doing real work. Real-time chat without it feels dead — you send a message and just wait, with no idea if the other person is even there. Adding a typing indicator doesn't change any actual functionality, but it changes the *felt* responsiveness of the whole system. I ran into this directly building [Zulibo](https://github.com/sam666-deb/Zulibo): the WebSocket layer for message delivery was almost trivial compared to getting presence indicators (typing, online status, read receipts) to feel instant and reliable. That's usually the pattern in real-time systems — the "core" feature is often easier than the feedback layer that makes it *feel* real-time.

## Where it goes wrong: autocorrect

Autocorrect is the best counter-example, because it's the same underlying idea (reduce the user's cognitive and physical effort) implemented badly often enough that it's a running joke. It fails HCI's own principles: it acts on your behalf without clear confirmation, it's hard to predict, and when it's wrong, undoing it is more annoying than the typo would have been. It's a reminder that "reducing effort" isn't automatically good design — it's only good when the system's behavior stays *predictable* and *correctable*. Quietly powerful automation without a clear undo path is where a lot of well-intentioned HCI goes wrong, and it's part of why I've been thinking about this alongside the [profiling and personalisation systems I wrote about recently](#/blog/melbourne-hci-quantum-personalisation) — more predictive power only helps if the person on the other end can still see and correct what the system is doing.

## What this actually means for building software

None of these examples require exotic technology. They require someone asking, at each interaction point: *what does the user need to know or feel right now, and what happens if they get this wrong?* That's most of HCI in practice — not a separate design phase bolted onto engineering, but a running question asked throughout it.

It's also, I think, the most transferable skill between the immersive/AR-VR side of what I do and the full-stack side. A confusing VR menu and a chat app with no typing indicator are failing for the exact same underlying reason: the system knows something the user doesn't, and isn't telling them.

If you've got a favourite example of an interaction that's quietly, invisibly good — I'd like to hear it.
