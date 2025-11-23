---
author: Michał Prządka
pubDatetime: 2025-06-27T10:00:00.000Z
title: "Vibe Coding Works (podcast highlights)"
postSlug: vibe-coding-podcast
featured: false
draft: false
description: Vibe coding has a branding problem, but if you know what you're doing, AI-assisted development can help you 10x your output.
---

Vibe coding has a branding problem.

First coined by a [serious engineer](https://x.com/karpathy/status/1886192184808149383), it quickly turned into 2025's favorite buzzword for amateurs who "built an app in 3 hours".

But you shouldn't let that noise discourage you from AI (unless you're okay with giving up [rocket fuel](https://fly.io/blog/youre-all-nuts/)). If you know what you're doing, AI-assisted development _can_ help you 10x your output.

I recently invited two engineers I highly respect, [Michał Warda](https://www.linkedin.com/in/michal-warda/) and [Tomasz Gancarczyk](https://www.linkedin.com/in/tomasz-gancarczyk/), to discuss just that on my new podcast (links at the bottom). Here are my main takeaways.

## "I tried Copilot a year ago"

Some resistance to AI tools is understandable, especially from companies that handle sensitive data. But your concerns from last quarter don't apply anymore. Tools for AI-assisted coding are [evolving](https://blog.singleton.io/posts/2025-06-14-coding-agents-cross-a-chasm/) at increasingly shorter intervals, and they're not going to stop any time soon.

Whatever assumptions you hold, revisit them regularly. There's no point in getting attached to one specific tool, either. All I care about is what the best-performing option is _right now_.

## Context management > prompt engineering

The right dose of relevant context improves AI output more than any prompt. Some ideas that came up in our conversation:

- Keeping files small enough for AI to read completely in one go
- Defining project-specific rules in different directories
- Restarting from checkpoint when the conversation goes off track
- Using web search to load recent docs and library versions
- Loading related services together so the AI understands cross-service interactions

Of course, we're still experimenting to see what strategies work best. Our toolkit keeps growing.

## A senior and 10 interns walk into a bar

I like to think about my agent as an "eager intern" (or more like "10 eager interns"). Someone who's hardworking and tireless but can make simple mistakes if you're not paying attention. This helps me remember to always monitor their output and be proactive with guidance.

It's also a good way to decide how much autonomy to allow: "Would I let an intern push something to prod here?" If you want your AI interns to iterate without constant babysitting, build proper feedback loops. This way, you can let them solve complex problems while you're away making your coffee.

In practice, this means:

- Tests. If a codebase doesn't have a test suite, the first thing I do is ask the AI to build one. Then, I can let the agents iterate autonomously, using git as a safety net.
- Linters and type checkers. If something makes a programmer's life better, it usually makes an AI's life better, too.
- Terminal access. This is where people get nervous, but I believe it's crucial. If your agent can run commands, check outputs, and iterate, it can solve problems autonomously.

---

Here are some more resources I found interesting when preparing for this conversation:

- For a nuanced distinction between vibe coding and professional AI-assisted development: [Simon Willison's blog post](https://simonwillison.net/2025/Mar/19/vibe-coding/)
- For insights on agentic modes and asynchronous AI development: [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/vibe-coding-as-a-software-engineer)
- For practical advice from the creators of Claude Code: [Anthropic's engineering blog](https://www.anthropic.com/engineering/claude-code-best-practices)

And if you want to hear everything we had to say, listen to the first episode of my new podcast, Hidden Layers:

- [Spotify](https://open.spotify.com/episode/7qytESZCtxoj9po318Xyhy?si=AtMrtMgGTe2YJZvPwPraRg)
- [YouTube](https://www.youtube.com/watch?v=P-SK5l-6Kt4&t=77s)
- [Apple Podcasts](https://podcasts.apple.com/il/podcast/vibe-coding-for-senior-engineers/id1822953759?i=1000714633161)

---

Interested in bringing these practices to your team? I [run](https://www.linkedin.com/posts/przadka_this-was-great-you-nailed-our-goals-are-activity-7346877659005575186-nX4E) hands-on [workshops](https://www.linkedin.com/posts/przadka_hello-from-lublin-im-on-a-mission-to-show-activity-7355558021483134976-_naD) on AI-assisted development. [Book a call here](https://calendly.com/przadka/30min).
