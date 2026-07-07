---
author: Michał Prządka
pubDatetime: 2026-07-07T09:00:00.000Z
title: All Agents Are Useless at Estimating Their Own Work
postSlug: agents-useless-at-estimating-their-own-work
featured: false
draft: false
description: I asked four coding agents how long their own work would take, then timed them doing it. Every one was wrong, by 12x to 177x.
ogImage: /assets/agents-estimating-og.png
---

AI agents have no idea how to estimate their own work and it's the most interesting failure mode I see. It's somewhat amusing but this itself wouldn't justify a full blog post rant. I claim that this has second order effects that you need to be careful about.

Let's start with an example. I handed OpenCode — one of the coding agents I use — a real task: port [`@sindresorhus/slugify`](https://github.com/sindresorhus/slugify) from JavaScript to Go. It's a small library with a solid test suite so the task is contained and verifiable. There are of course nuances and edge cases, but nothing extraordinary — probably a few days of work for somebody working without AI assistance.

So I asked OpenCode (running GPT-5.5) how long it would take _us_ to deliver it, assuming the two of us were working on it together. Here's what it came back with:

> Best estimate: **1.5 to 2.5 working days**.
>
> - Straight Go API and slug pipeline: **3–5 hours**
> - Porting escape-string-regexp: trivial, **<1 hour**
> - Transliteration data conversion and validation across locales: **5–8 hours**
> - Emoji/symbol replacement and JS behavior parity edge cases: **3–5 hours**
> - Porting upstream test.js into named Go subtests: **4–6 hours**
> - Debugging parity differences from JS regex/string semantics: **4–8 hours**
> - Cleanup: gofmt, go vet, license attribution, package docs: **1–2 hours**

Then I told it to go ahead and build the thing, while I sat back (aka "supervised"). It finished within six minutes, with over 150 subtests passing, no failures, and all edge cases seemingly correct.

It's not just OpenCode. I ran the same task through five different agents, three times each, and four of them built it cleanly. Here's what each one predicted up front, next to what the job took:

| agent                 | estimated | actually took | off by |
| --------------------- | --------- | ------------- | ------ |
| OpenCode (GPT-5.5)    | 18 hours  | 6.1 min       | 177×   |
| Codex (GPT-5.5)       | 13 hours  | 8.5 min       | 92×    |
| pi (GPT-5.5)          | 12 hours  | 24.3 min      | 30×    |
| Claude Code (Fable 5) | 4 hours   | 20.3 min      | 12×    |

_Build time is the median of three runs; the estimate is each agent's single up-front number._

The estimates vary a lot but they're sensible numbers for a human developer, maybe apart from Claude Code which is surprisingly low. None of the agents underestimated — a rare feat among humans, who tend to be optimistic.

A wrong number on its own would be harmless. But agents are not passive — they want to help, offer advice, get you to act, and all of it is built on that number. On a real client scoping job, I gave a fresh agent the brief and asked it to size the work. It came back with 32 to 46 person-days and a "Pricing Recommendation":

> If fixed-bid: quote 46 days and absorb the buffer… the kind of constraint stack where one ugly surprise eats a week.

I built it in about seven hours, which makes the 46-day quote more than fifty times too high. And nothing about the output reads as lazy or padded. It reads like a competent consultant — phases, assumptions, risks, fixed-bid versus time-and-materials. Nothing in it reveals the number is wrong. I only caught it because I'd already built the thing. On a real job, you don't build first to check — you send the quote.

![Retro screen-print of a dark machine eye with a single glowing red core, staring at the viewer](/assets/hal-eye-three-days.png)

_"It will take 3 days, Dave."_

It doesn't stop at quotes. I see it every day, in the advice an agent volunteers without being asked. When it decides the work is "substantial," it recommends phasing. "Ambitious," and it recommends cutting scope. "Too complex," and it reaches for a workaround instead of the right answer. So you get phasing, and scope cuts, and "let's defer this," and the agent calling it a day on something we'd have finished in ten minutes — all of it routed through an effort number anchored to a developer's 2023 week. Build-versus-buy gets the same treatment: I regularly watch agents recommend a plugin, a library, even a paid SaaS, to dodge work they'd finish in minutes.

A two-day quote on a six-minute job, you'd catch. But most of the time there's no number at all — just the recommendation, and nothing to check it against.

I haven't found a real fix for this, other than being cautious and proactive. When it's important and relevant, I sometimes feed my past velocity figures into the context (audit work runs 1.5–3× faster, scaffolding 5–10×, etc.) but you're working against deeply ingrained patterns and they're hard to shift.

And my guess is that new generations of models, the [state of the art](https://www.anthropic.com/news/claude-fable-5-mythos-5) and beyond, will be equally confused. The training data is always a step behind. Today's models learned how long work takes from humans working without AI. The next ones will learn from humans working with AI — but by the time that data reaches them, the agents will be faster again. Their sense of what work costs is chasing a moving horizon.
