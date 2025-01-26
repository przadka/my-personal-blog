---
author: Michał Prządka
pubDatetime: 2025-01-26T08:00:00.000Z
title: Ambient agents and endpoints
postSlug: ambient-agents-and-endpoints
featured: false
ogImage: /assets/og-ambient-agents-and-endpoints.png
description: Reflections on seamless AI integration.
---

Chat interfaces are becoming increasingly common when interacting with AI. We open yet another window, type our requests, wait for responses. But is this really the best way to interact with intellingence? Each chat session demands full attention, forcing us to switch contexts, articulate requests, and monitor responses. While it's great for flexing your prompt engineering muscles, maybe your time could be better spent elsewhere.

LangChain recently introduced a concept of [ambient agents](https://blog.langchain.dev/introducing-ambient-agents/), offering a different perspective on AI interaction. Instead of relying on dedicated chat UIs, ambient agents blend into our existing workflows, quietly assisting in the background.

This idea resonates with how I think about AI interfaces. I often imagine AI as lightweight, non-intrusive [endpoints](https://www.linkedin.com/posts/przadka_my-prediction-is-that-companies-will-start-activity-7255456993170092032-5D7H?utm_source=share&utm_medium=member_desktop) rather than fully-fledged chat systems. Instead of introducing new layers - like chatbots or copilots - why not inject AI into the touchpoints we already use? This could mean having AI quietly assist within our existing tools and workflows, enhancing them without demanding our attention.

![Every day objects](/assets/every-day-objects.png)

I’ve been experimenting with this approach in my own work, especially with [FAF](https://getfaf.com/), an open-source assistant I built to capture tasks effortlessly. With FAF, I can use a simple keyboard shortcut or voice command to offload tasks - no need to open an app or engage in a conversation. Just capture and move on.

I also try to apply these ideas in my consulting work, embedding AI into existing systems rather than introducing new interfaces. For example, rather than adding a chatbot for customer support teams, AI can sit quietly within their existing ticketing system, suggesting responses right where they need them.

The future of AI might not be about creating new interfaces but making the existing ones smarter. Imagine AI that integrates so seamlessly that you barely notice it's there - always available, but never intrusive. As we build the next generation of AI tools, perhaps that's the standard we should aim for.
