---
author: Michał Prządka
pubDatetime: 2026-03-09T10:00:00.000Z
title: Agents as Bounty Hunters
postSlug: cheddar-bench
featured: false
draft: false
description: I built a benchmark that pits coding agents against each other in a bug-finding treasure hunt.
---

I use coding agents every day. Claude Code, Codex, OpenCode, Gemini, Cursor — I tried them all. I embedded them in my workflow as code reviewers, and they can disagree a lot. Don't get me wrong — they agree most of the time. But the pattern of disagreement, and the different level of effort they put into reviews, made me curious.

There's anecdotal evidence on X claiming Codex is the best code reviewer. The problem with vibes is that models update monthly, everyone has different workflows, and your sample size is always tiny. I wanted an actual signal.

I've been thinking about how to evaluate coding agents for a while — evals and agents are two topics that [fascinate me](/posts/evals-framework). I discussed the idea with [Tomasz](https://x.com/Thomas_AI_geek), and he did some research into existing code review benchmarks and concluded it wasn't worth attempting — no open datasets, too much manual effort. Even [Macroscope](https://macroscope.com/blog/code-review-benchmark) only managed 45 repos with human verification. My bet was that synthetic data could sidestep all of that: let the agents inject the bugs themselves, skip human labeling entirely. $400 in tokens and four weeks of evenings later, I had CheddarBench — right around the time [SWE-bench was declared no longer viable](https://www.latent.space/p/swe-bench-dead).

## How it works

Think of it as a treasure hunt — one agent hides bugs, another tries to find them.

One agent (the "challenger") takes a real open-source repo and injects bugs — subtle ones, spread across the codebase. It records exactly what it changed and where. A different agent (the "reviewer") audits the repo blind, without knowing what was changed. An LLM judge compares the reviewer's findings against the ground truth and scores the matches.

No human labeling needed — ground truth by construction. The challenger creates the answer key; the reviewer tries to reconstruct it. I called it CheddarBench — the challenge is to find the holes. Cheddar doesn't actually have holes, just like the open-source repos I pulled, which I assumed didn't have bugs.

I ran it across 50 repos in 9 languages — 3 challengers × 3 reviewers, 450 reviews, 2,603 injected bugs. With over 2,500 data points, this felt like something replicable rather than anecdotal. I'm still worried I've made a systematic mistake somewhere, so I captured everything: configs, prompts, bugs, traces, the full thought process. It's all in the logs.

## The results

![CheddarBench results — Claude 58%, Codex 38%, Gemini 28%](/assets/cheddar-bench-chart.png)

Claude Code found 58% of the injected bugs, Codex 38%, Gemini 28%. I expected Codex to win given the anecdotal evidence. Gemini's low score [didn't surprise me at all](https://x.com/rakyll/status/2007239758158975130) :)

Since then, I default to Claude for reviews. I used to pick Codex, thinking that if I write code with Claude, it's better to have a different agent review it. The data says otherwise.

At some point I just couldn't keep up with the model announcements. I also accidentally deleted my accumulated data. Twice. Eventually I published and called it done. The code and dataset are on [GitHub](https://github.com/przadka/cheddar-bench). I hope you find it useful.

---

_Discuss this post on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7431580496658104320/) or [X](https://x.com/przadka/status/2025487577948508343)._
