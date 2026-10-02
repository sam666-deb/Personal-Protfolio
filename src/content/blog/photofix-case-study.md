---
title: "PhotoFix: an AI photo editor that knows when to leave a photo alone"
date: "2026-10-02"
excerpt: "Most auto-enhance buttons brighten, boost contrast, and saturate everything the same way. I built one that detects what's actually wrong with a photo first — and found some genuinely strange bugs along the way."
tags: [AI, computer-vision, python, project]
---

Most one-tap "enhance" buttons treat every photo the same way: brighter, more contrast, more saturation. That helps a dark snapshot and ruins a moody dusk shot, a deliberate silhouette, or a portrait that already looked right. I wanted to build something narrower and harder to fake: detect *specific* defects — exposure, contrast, harsh shadows, color casts, noise, blur — fix only those, and leave good photos alone.

"Leave good photos alone" needs a number to actually mean anything, so every stage of this project got scored on **change to already-good photos** — the average color difference (CIE ΔE) between a clean photo and whatever the editor returned for it. Below about 2.3 ΔE, a human can't see the difference.

![A before/after of a dim, hazy lake photo: PhotoFix detects it as 100% too dark, 16% color cast, applies exposure/clarity/contrast/vibrance/sharpen edits, and produces a bright, clear result in 1 second.](blog-images/photofix-result.jpg)

## The architecture, briefly

Every edit is a deterministic operation on the full-resolution original — a tone curve, a color lookup table, or a restoration network run in overlapping tiles — even though the models deciding *what* to do only ever look at a small preview. Output quality never depends on a model's input size, which matters once you're editing a 24-megapixel photo on a laptop.

| Stage | What it does | Model | Runs |
|---|---|---|---|
| Analyzer | Probability of 7 defects, from a global view + a native-resolution crop | EfficientNet-B0 ×2 | always |
| Restorer | Removes noise, blur, JPEG artifacts | NAFNet | only if flagged |
| Style | Natural: rule-based. Pro: tone learned from a retoucher | 3D LUT | Pro only |
| Guardrail | Checks the result itself and tones it down if it overshot | 5 checks | every edit |

Every stage started as a classical method and was only replaced by a learned model once it measurably beat the baseline on a fixed benchmark — not because neural was assumed to be better, but because it was checked.

## What each stage actually taught me

This is the part that made the project worth writing about. The numbers moved the way you'd hope, but the interesting bit was what broke along the way.

**A classical baseline, and its obvious blind spot.** Hand-tuned image statistics and a synthetic damage generator got me a working v0 — and it changed *already-good* photos by 7.35 ΔE on average, plainly visible. The reason was almost funny in hindsight: color-cast rules can't tell an orange cat from an orange color cast. The baseline "corrected" both.

**A neural analyzer fixed the broad problem and uncovered a sharper one.** Giving the model both a full-frame view (for exposure/color) and a native-resolution crop (for noise/blur, which disappear when you shrink a photo) cut the damage-to-good-photos number from 7.35 to 2.67 ΔE after just 35 minutes of training. But reviewing the worst cases by eye — not by metric — found a bug nothing was flagging automatically: lifting shadows was multiplying faint color noise in near-black regions, turning clean silhouettes bright blue.

**The "Pro" style, trained on a professional retoucher's edits, got worse before it got better.** Scored against MIT-Adobe FiveK (real edits from a professional retoucher), the rule-based pipeline actually moved photos *further* from the expert's result than doing nothing at all. An Image-Adaptive 3D LUT — a small network that predicts a per-photo color table from a thumbnail — fixed the gap, until version 1 started turning skin grey on ordinary phone photos. It had only ever been trained on unprocessed camera files, so it had never learned what an *already-finished* photo looks like. Version 3 mixes in finished-photo-to-itself training samples and only keeps checkpoints that leave a finished photo visually unchanged — at a small, deliberate cost of 0.3 dB of raw accuracy, in exchange for not wrecking skin tones.

**An "untrained" model that was supposed to do nothing instead did a lot of damage.** The denoising/deblurring network (a compact 3.9M-parameter NAFNet) was supposed to be a safe no-op before training — and instead degraded images by 8 dB. The output layer started with random weights, so an "untrained" model wasn't neutral, it was actively scrambling pixels. Zero-initializing that layer made the starting point actually be "change nothing," which is what I'd assumed by default and shouldn't have.

**The safety net needed its own safety net.** The guardrail stage compares the edited result against the original for blown highlights, crushed shadows, skin-tone shifts, oversaturated color, and amplified noise — and dials the edit back if it's gone too far. Its first version checked for skin tone using color alone, and flagged orange sunset clouds as skin. It now only looks inside faces found by a small, dedicated face detector.

![The same editor in dark mode, correcting a warm yellow color cast in a café interior — 92% confidence, white balance and contrast edits applied.](blog-images/photofix-result-dark.jpg)

**Metrics and human eyes didn't always agree, so I stopped trusting metrics alone.** At one point the finishing pass lowered PSNR (a standard image-quality metric) while looking clearly better to the eye, and the LUT variant that scored best numerically made faces look pale. I ended up building a blind A/B rating page with a Bradley–Terry leaderboard — including the unedited original as a competitor — so "was editing even worth it?" gets measured honestly instead of assumed.

## Where it landed

All numbers below are on held-out data the models never trained on, reproducible from a script in the repo:

- **2.65 ΔE** change to already-good photos, down from 7.35 for the classical baseline
- **+1.8 dB** closer to a professional retoucher than the rule-based style
- **+2.9 dB** neural denoising over a classical filter
- **78%** of damaged test photos measurably improved, up from 70% for the baseline

Three models, trained on one M1 Pro laptop (35–70 minutes each), 1–2 seconds per photo on CPU, 51 tests.

## What it still gets wrong

I'd rather list this than not. A deliberately dark or bright photo — a silhouette, a night sky, a white studio backdrop — can still get over-corrected, because telling an intentional choice from a mistake needs scene understanding these models don't have. Edits are currently global or tone-based rather than region-aware, which is the most promising next step (segmenting sky, people, and background so each gets its own treatment). Deblurring gains are modest, partly because restoration was validated on synthetic damage — modern phones already denoise aggressively in-camera, so good real-world blurry test photos are hard to come by.

It runs locally right now (FastAPI, a dependency-free HTML front end, Docker-ready for Cloud Run or Hugging Face Spaces later) rather than being hosted anywhere public yet.

Code, full benchmark tables, and the trained weights are all linked from the [GitHub repo](https://github.com/sam666-deb/PhotoFix) if you want to run it yourself or pick apart how any of it works.
