---
author: Michał Prządka
pubDatetime: 2023-07-23T15:57:52.737Z
title: "FAF: Automating my GTD Workflow with Langchain and GPT-4"
postSlug: faf
featured: false
ogImage: /assets/knowledge-worker-illustration.png
description: Using Langchain to automate my GTD workflow.
---

[GTD](https://en.wikipedia.org/wiki/Getting_Things_Done) is great. I have been using it for over ten years now, and I can't imagine juggling all my responsibilities without it. It helps me stay focused on my priorities while maintaining progress on multiple projects that I need to keep track of. One of the key elements of GTD is the capture process. It allows you to offload any mental burden, thoughts, or tasks from your mind to somewhere else - a notebook, a file, a to-do list, anything - and resume your main activity without interruption.

I have a simple GTD workflow that allows me to easily capture any thought and send it to my main email inbox so that I can decide what to do with it later. It works like this:

- Open a simple [Autokey](https://github.com/autokey/autokey) dialog asking for a text input. I use Autokey because I work on Linux. I used [AutoHotkey](https://www.autohotkey.com/) in the past, which is a similar tool for Windows. The dialog will open whenever I hit a special system-wide keyboard shortcut. By now this is part of my basic muscle memory - it happens very naturally, no matter what I am working on.
- Store the new task in a special Dropbox folder, as a new file. Because I am processing it with [IFTTT](https://ifttt.com/) in the next step, I actually put the whole task description as a new file name. IFTTT-Dropbox does not actually allow you to inspect the contents of the new file - I use the file name instead.
- Send the input to myself as a new email, with another [IFTTT integration](https://ifttt.com/connect/dropbox/email).

This process has worked for me for years. I can send myself simple TODOs, notes, URLs or even more sophisticated follow-ups like "Send myself a reminder about the library book, in a month from now". I then need to process these new emails and decide what to do with them. Some will stay in my inbox as short-term reminders, some will be added to [Logseq](https://logseq.com/) which I use as my [second brain](https://www.buildingasecondbrain.com/), and some may be converted to long-term follow-ups using [Follow Up Then](https://www.followupthen.com/). This final step was, regrettably, a manual process. But not anymore.

![Man with priorities](/assets/man-with-gtd-threads.png)

Recently, I decided to take myself out of this loop and automate the manual processing. I created a simple CLI tool named **Fire and Forget** or [FAF](https://github.com/przadka/faf) that captures any text input and repackages it into structured JSON files for subsequent processing. The conversion is conducted by a custom GPT4 agent built with Langchain. The agent discerns the types of input (currently: self note, follow up, URL) based purely on the natural language input from the user. Here are a few examples:

- For a simple task, the input "Buy milk" becomes {"command": "note_to_self", "payload": {"message": "Buy milk"}}.
- For a future reminder, "Send myself a reminder about the library book, in a month from now" turns into {"command": "follow_up_then", "payload": {"date": "inamonth", "message": "Reminder about the library book"}}.
- For saving a URL, "https://<area>arxiv.org/abs/1706.03762" becomes {"command": "save_url", "payload": {"url": "https://<area>arxiv.org/abs/1706.03762"}}.

All these transformed outputs are saved in a designated folder as separate JSON files for further processing. Currently, I store them in a Dropbox, and Autokey takes care of that:

```python
import os
import time
import subprocess

winTitle = window.get_active_title()
ret, user_input = dialog.input_dialog(title="Task", message="Capture task:")

if not ret:
    window.activate(winTitle)
    time.sleep(0.1)

    os.environ['OPENAI_API_KEY'] = "<API_KEY>"
    os.environ['FAF_JSON_OUTPUT_PATH'] = "/home/michal/Dropbox/faf"

    faf_path = "<PATH_TO_FAF>"
    subprocess.run([faf_path, user_input], check=True)
```

Each time a new file is added to this folder, a [Zap](https://zapier.com/) is triggered, which inserts a new row in a Google Sheets file storing all the events. These events are then processed using a [custom Apps Script](https://github.com/przadka/faf/blob/master/gsheets.gs).

I have been using FAF for a few days and it works great. It took some tweaking to get the prompt right and it is probably not yet production-ready. But it does its job, and I am happy about it. I have effectively replaced my manual processing with GPT-4.
