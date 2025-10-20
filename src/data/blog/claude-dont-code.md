---
author: Michał Prządka
pubDatetime: 2025-10-17T10:00:00.000Z
title: Claude Don't Code
postSlug: claude-dont-code
featured: false
draft: false
ogImage: /assets/claude-dont-code-og.png
description: Non-coding use cases for Claude Code and what to make of it.
---

I don't open Google anymore—I open a terminal.

Claude Code has become my command line for work. Last week it debugged thermal spikes on my laptop, rewrote my Neovim configs, and deployed a container to fly.io while I answered email. It’s supposed to be a coding assistant—but it’s turning into an execution engine that understands English.

![Claude Code welcome screen in the terminal](/assets/claude-dont-code-terminal.png)
_Claude Code welcome screen is quite cute_

I've developed enough muscle memory to reach for it without thinking. Some recent examples:

- Analyzing and visualizing data
- Building AWS resources on the fly
- Generating synthetic datasets for [LLM evals](https://blog.michalprzadka.com/posts/evals-framework/)
- Comprehensive PRs via gh CLI
- Making sense of repos I didn't write
- Speeding up the boot process
- Checking health of a remote server
- Quick automations that don't deserve a long-lived script
- Researching topics I am not familiar with or even creating presentations

The list keeps growing and [people](https://every.to/source-code/how-to-use-claude-code-for-everyday-tasks-no-programming-required) are [taking notice](https://www.lennysnewsletter.com/p/everyone-should-be-using-claude-code-8db).

This versatility still surprises me—as if new nails keep popping up for my hammer. It's exciting.

A few weeks ago I [presented](https://warsaw.aitinkerers.org/p/ai-tinkerers-poland-5-meetup-in-warsaw-september) some of these use cases at AI Tinkerers Warsaw, and today I want to walk through two of them that might change how you think about coding assistants.

![Presenting at AI Tinkerers Warsaw with title slide visible](/assets/claude-dont-code-ait-presentation.jpeg)
_Presenting at AI Tinkerers Warsaw_

## Why the Terminal?

There are a few reasons I keep Claude Code open in tmux instead of ChatGPT in a browser. First, I'm in the terminal already, most of the time. A single keyboard shortcut and I'm in the conversation—no context switching, no browser tabs. Second, each directory becomes a workspace. I now have various related resources organized in different folders: markdown files with guides, API references, troubleshooting notes from previous sessions. Claude pulls them in as needed. Different workbenches for different work. And third: Claude runs commands, not just suggests them. AWS CLI, gh CLI, file operations, web search. When I ask it to deploy something, it deploys.

That last point is more important than it sounds. All LLMs, and coding agents in particular, are _feedback loop monsters_. They can grind through anything if they can experiment and adjust based on the results. When something goes wrong, Claude obsessively debugs and fixes it. The text-based stdout of the command line is the perfect environment for this.

Let me show you what this looks like in practice.

## Infrastructure in Minutes

I needed a US-based VPN. I live in Poland, and quite often brand new AI products from US companies aren't available here. I could use an off-the-shelf VPN service, but I wanted to see how quickly I could spin something up "myself".

I opened Claude Code, mentioned my AWS CLI was configured, and asked it to create a US VPN with everything needed on my laptop. Then I watched:

EC2 instance spinning up in Virginia. Security Group rules configured. WireGuard installing. Config files generated locally, uploaded via scp.

Eventually something broke—port forwarding or security group rules, I didn't track the specifics. Claude caught it, reflected, retried, verified. I wasn't even looking while it debugged itself. No frustration, no waiting on me, just methodically working through the problem.

![Terminal output showing successful VPN connection with US IP 52.3.8.15 - demonstrating the feedback loop monster in action](/assets/claude-dont-code-vpn-confirmed.png)
_VPN successfully deployed and connected - the feedback loop monster in action_

Two minutes after my original request, Claude checks: `curl ifconfig.me` returns 52.3.8.15. The VPN works.

After testing, I asked (asked!): "Clean up everything, please." Claude terminated the instance, removed security groups, and deleted config files. It checked each step to confirm nothing was left running. No traces remained.

What used to be an hour of documentation reading and trial-and-error now takes minutes. But more than speed, the role changed. I wasn't executing commands or debugging errors. I described a goal and watched an agent figure out the steps. You go from "I need to know how to do this" to "I need this done."

That VPN experiment was just tinkering—low stakes, easily reversible. But what about something that matters? Could this same approach work for client deliverables?

## Client Demo in 20 Hours

My client wanted a research copilot that gathers insights from various sources. I'll keep specifics vague, but the approach applies broadly.

I've built enough agent systems to know the drill: pick a framework—Pydantic AI, LangGraph, Smolagents—then manage complexity yourself. Intent routing, state management, error handling, tool coordination, security, result synthesis. Each layer adds potential failure points.

![ReAct agent diagram showing orchestration complexity from the Arize presentation](/assets/claude-dont-code-workflow-aie.png)
_Traditional ReAct agent orchestration complexity (from [Arize](https://www.youtube.com/watch?v=nbZzSC5A6hs))_

Complexity buys control. But if you're willing to delegate some of it, you can build something powerful quickly.

This time, we skipped orchestration entirely. We built on top of Claude Code itself. The [Claude Code SDK](https://docs.claude.com/en/api/agent-sdk/overview) gives you that same agent—the one that spun up the VPN, that debugs itself, that handles the feedback loop—but packaged as a foundation you can build on.

You can focus on two things: goals (via system prompt) and tools (via Model Context Protocol or simple bash scripts). Wrap it with Streamlit for a web interface and you are good to go.

![Python code showing Claude SDK Client setup](/assets/claude-dont-code-sdk-snippet.png)
_The heart of our Claude SDK Client setup—just a few lines of Python_

We had working validation in hours. Before writing any production code, we tested Claude Code CLI on actual research tasks. Watched it work, caught edge cases, refined our prompts. Once we developed enough confidence, we migrated to the SDK—same underlying agent, with behavior adjusted to the domain.

Production deployment took days, not weeks. When the client saw it live, they immediately asked to deploy. And we did—that same week.

There's still work ahead—refinements, stress tests, monitoring. But we had confidence because we'd validated the core capability before investing in infrastructure. We knew what we were getting before committing significant time.

Here is the playbook:

1.  Start with a minimal bash script and one domain-specific tool.
2.  Test it in Claude Code CLI on the real task.
3.  Observe results, refine prompts, confirm reliability.
4.  Deploy through the SDK—same agent, same behavior.
5.  Wrap it with a web UI when ready.

I strongly believe this pattern is replicable.

You delegate complexity to the foundation layer—routing, recovery, memory, coordination—and focus on what matters for your domain. Instead of orchestrating multiple components, you have one intelligent agent that thinks, plans and executes.

## Operating Systems for Agents

Anthropic recently [renamed](https://docs.claude.com/en/docs/claude-code/sdk/migration-guide) Claude Code SDK to Claude [Agent SDK](https://docs.claude.com/en/api/agent-sdk/overview). Their docs now explicitly encourage you to "build production agents on top of the harness that powers Claude Code".

They see what practitioners are [discovering](https://x.com/simonw/status/1978948070441099733): CC is misnamed. It's not only a coding assistant—it's a general automation agent. If you are not convinced, just read through the 50 use cases Lenny Rachitsky [shared](https://www.lennysnewsletter.com/p/everyone-should-be-using-claude-code-8db) in his newsletter. It is not a specialized tool, it's a platform you can build on.

The SDK makes this portable. You can deploy in production, embed it in workflows, build domain-specific tools on top of it. Cursor could do the same if they shipped an SDK. So could others. But right now, we have CC.

Claude Code has become something nobody expected but everybody needs: an operating system for agentic workflows. I hope other providers will soon follow. We need operating systems, not just frameworks.

---

Thanks to Łukasz Wróbel and Tomek Truszkowski for helping me improve this post.

Discuss this post on [X](https://x.com/przadka/status/1979142895241236900) or [LinkedIn](https://www.linkedin.com/feed/update/urn:li:ugcPost:7385640103240437760/).
