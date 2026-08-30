---
title: "AR/VR development in 2026: what's actually changed since I was teaching it two years ago"
date: "2026-08-30"
excerpt: "I spent 2023-2024 training students in Unity and AR/VR. Two years later, working mostly in full-stack, here's what's genuinely different about the field — and what's just repackaged."
tags: [AR-VR, unity, trends, career]
---

In 2023 and 2024 I was a Unity Developer Trainer at a university AR/VR lab — teaching beginners the basics, leading student teams building AR/VR applications, the whole thing. Since then I've spent most of my time in full-stack land: React, Node, real-time systems. Coming back to look at AR/VR now, from a bit of distance, made the shifts easier to see than if I'd stayed in it the whole time. Some of what's changed is real. Some of it is the same ideas with better marketing.

This isn't a market report — I don't have investor decks or shipment numbers to cite. It's what I've actually noticed, as someone who taught the "old" version of this and is now looking at the current one.

![What actually changed between 2024 and 2026: primary paradigm shifted from immersive VR to passthrough mixed reality, interaction moved from controllers to hands/eyes/voice, consumer AR moved from headsets to smart glasses, trust in Unity was shaken by 2023's pricing fallout with WebXR now a real alternative, 3D content pipelines gained AI-assisted generation, and the real growth moved from consumer gaming hype to enterprise training and education.](blog-images/arvr-2026-then-vs-now.jpg)

## The headset stopped pretending to be just VR

Two years ago, "VR headset" meant something that sealed you off from the room — full immersion was the whole pitch, and passthrough cameras (if a headset had them at all) were a safety feature for not walking into furniture, not a real mode you designed for.

That framing is largely gone. Apple's Vision Pro made "spatial computing" the term of choice — apps that blend virtual content into your actual room by default, with full immersion as the exception rather than the rule. Meta's Quest 3 pushed the same direction with color passthrough as a headline feature, not an afterthought. If you're building for headsets now, you're usually designing for a mixed environment from the start, not a fully synthetic one.

## Hands and eyes replaced the controller

Controller-based interaction was still the default when I was teaching — grab the trigger, point, click, and most tutorials assumed that as the baseline input model. Hand-tracking existed but felt like a secondary mode you bolted on.

That's flipped. Gaze-and-pinch (look at something, tap your fingers) became a mainstream interaction pattern rather than a demo gimmick, and eye-tracking-driven foveated rendering went from research paper to shipping feature. Designing "what does the user hold" is no longer the first interaction question — it's often "what do they look at, and what do their hands do without a controller in them."

## AR moved off your face and onto everyday glasses

This is the shift I find most interesting, because it's not really a headset story at all. Ray-Ban Meta glasses — camera, microphone, speakers, an AI assistant, no display for most of their adoption curve — reached far more everyday people than any AR headset has. No passthrough, no 3D overlays, technically a much simpler device. But for an enormous number of people, *that's* what "AI plus a camera on your face" means now, not a $3,000+ headset.

If I were teaching an intro AR/VR unit today, I'd spend real time on this, because it complicates the old assumption that "AR" and "headset" are basically the same conversation. Increasingly, they aren't.

![Timeline of five inflection points from late 2023 to 2026: Unity's Runtime Fee proposal shook developer trust in late 2023; Apple Vision Pro shipped in February 2024, mainstreaming spatial computing and passthrough mixed reality; Ray-Ban Meta glasses took off in 2024 with AI and a camera but no display or headset required; generative AI became a normal step in the 3D content pipeline through 2024-25; and hand and eye tracking became the expected default interaction by 2025-26.](blog-images/arvr-2026-timeline.jpg)

## Unity had a wake-up call, and so did I as a teacher

This one's personal, because I was actively teaching Unity when it happened. Unity's proposed "Runtime Fee" in late 2023 — charging developers per install after certain thresholds — was reversed within weeks under backlash, but the trust damage didn't reverse with it. Students and hobbyists who'd treated Unity as the obvious, permanent default started asking "what if I built this in Unreal instead, or just used WebXR?" That question basically didn't come up in my classes before that.

Unity's since consolidated around "Unity 6" and worked to rebuild confidence, and it's still the practical default for most teams. But "obvious, no-alternatives default" and "trusted default people chose deliberately" are different postures, and if I were teaching now I'd actually cover WebXR as a real, install-free alternative worth knowing — not just a footnote.

## AI quietly became part of the pipeline

In 2023-2024, building 3D assets for a student project meant modeling almost everything by hand, or scavenging asset stores. Generative AI for 3D content — text-to-model tools, AI-assisted texturing and rigging — has gone from novelty demo to a genuinely normal step in a lot of pipelines since then. It hasn't replaced the skill of 3D modeling, but it's changed what a solo developer or a small student team can reasonably attempt in a semester.

## What actually held up: training and education

Consumer AR/VR gaming had a choppier couple of years than the hype cycles suggested it would. What's grown more consistently, from what I've seen, is the boring-sounding stuff: enterprise training, simulation, and education — exactly the area I was working in at the AR/VR lab, and exactly what's listed as a research interest on this site for a reason. Training people to do a physical task safely, or teaching a concept that's easier to grasp in 3D than on a slide, doesn't depend on a hardware hype cycle the way consumer entertainment does.

## Where that leaves someone straddling both worlds

I didn't expect, when I moved toward full-stack work, that the most durable parts of the AR/VR field would turn out to be the ones closest to what I was already doing: teaching, training, and building things that have to actually work for the person using them, not just look impressive in a demo video. The headsets changed. The interaction model changed. That part hasn't.

If you're teaching or learning AR/VR right now, I'd be curious how much of this matches what you're seeing — especially the WebXR-as-real-alternative point, since that's the one I'm least certain about from the outside.
