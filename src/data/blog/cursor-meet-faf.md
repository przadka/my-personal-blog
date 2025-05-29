---
author: Michał Prządka
pubDatetime: 2025-05-28T08:00:00.000Z
title: Cursor, Meet FAF!
postSlug: cursor-meet-faf
featured: false
ogImage: /assets/cursor-meet-faf-og.png
description: I added MCP server to my productivity tool.
---

I’ve used [Fire and Forget (FAF)](https://blog.toasterthoughts.eu/posts/faf) daily for nearly two years. One hotkey, one sentence — and my thought becomes a structured reminder, task, or note. It’s invisible, fast, and reliable. Exactly what a productivity tool should be.

But more and more, my thoughts start elsewhere — in AI chat windows. I brainstorm with Claude, code with Cursor or, since recently, scribble with [Qspeak](http://qspeak.app). And a question kept bubbling up: _Why can't my AI tools talk to FAF directly?_

Now they can.

Picture this: I’m in Cursor, [vibe-coding](https://blog.michalprzadka.com/posts/vibe-manifesto/) through a new side project, fully immersed. A thought hits: I should refactor this next week. Normally, I’d hit a hotkey and capture it with FAF. But what if I could just say: _Remind me to refactor this on Monday._ Right there in the chat.

Ok, I admit — hitting a hotkey would be as effortless as writing it in a chat, but wouldn't it be cool to ask Cursor to schedule a reminder for me? It sure would be!

![Capturing a simple todo with FAF, while reading.](/assets/faf-capture.png)

_Capturing a simple todo with FAF, while reading._

## The Protocol That Changes Everything

The Model Context Protocol (MCP) makes this possible. It's the first real standard for connecting AI assistants with external tools. When qSpeak added MCP support, I had my excuse to finally build something with it. My productivity system could become a native capability of any AI I was talking to.

One afternoon later, I had a working MCP server using Anthropic's [FastMCP SDK](https://gofastmcp.com/getting-started/welcome):

```python
@mcp.tool()
async def note_to_self(prompt: str, message: str) -> dict:
    return await run_sync(faf_note_to_self, prompt, message)
```

![MCP server for FAF](/assets/faf-in-cursor.png)

_Asking Cursor to send me a reminder about missing tests_

## The Magic Moment

First test with qSpeak: _"Add a todo to send tax forms."_

It worked. Instantly. I actually laughed out loud—it felt like magic, but the kind that makes perfect sense. qSpeak understood, called my server, and the structured reminder appeared in my FAF pipeline. No syntax to remember, no context switching. Just natural conversation that happened to trigger my productivity system.

I immediately recorded a screencast and sent it to Michał—after all, his tool made this possible. His reaction was exactly what I'd hoped for. But more importantly, the integration felt seamless—exactly what MCP promises.

<video controls="">
  <source src="/assets/faf-in-qspeak.mp4"  type="video/mp4">
</video>

*Michał Warda asking his AI assistant to talk to my AI assistant*🤯

## Try It

The MCP server is live in the [FAF repo](https://github.com/przadka/faf). After cloning the source, you can install with `pip install -e .`. Getting started is straightforward—just add this to your tool's config:

```json
{
  "mcpServers": {
    "faf": {
      "command": "faf-mcp",
      "env": {
        "OPENAI_API_KEY": "Your OpenAI API key",
        "FAF_JSON_OUTPUT_PATH": "/your/path",
        "FAF_USER_NAME": "Your name"
      }
    }
  }
}
```

Works with qSpeak, Claude Desktop, Cursor, or any MCP-compatible tool. My productivity system just learned to speak AI. Turns out, they're a perfect match. Enjoy!

---

_Try [qSpeak](http://qspeak.app), the AI assistant that started this whole experime, or explore the [MCP docs](https://modelcontextprotocol.io/introduction) to build your own integrations._

_Also, if you are interested in implementation details, check out my [PR on GitHub](https://github.com/przadka/faf/pull/4)._

---

Discuss this post on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7333729570694520833/) or [X](https://x.com/przadka/status/1927972755548307780).
