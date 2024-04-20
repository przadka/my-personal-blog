---
author: Michał Prządka
pubDatetime: 2023-08-15T15:57:52.737Z
title: Shazam for Singing
postSlug: song-solver
featured: false
ogImage: /assets/audio-console.png
description: A small project about recognizing songs.
---

Last weekend, I introduced my daughters to [Shazam](https://www.shazam.com/home). We tested it with a random track I played on my phone, and it identified the song flawlessly. Excited, they wanted to see if Shazam could recognize their rendition of "Baby Shark". And, of course, it did not work. They impatiently waited for it to complete all possible searches, only to be informed that it didn't recognize their version of perhaps the most iconic children's song. They were not impressed :)

This got me thinking: Could we bridge this gap with a robust speech-to-text tool combined with a large language model? If the system could identify the lyrics as text, it could then tap into an LLM to determine the song. Inspired, I promised my girls a program where they could sing to the computer, and it would identify their song. Their eyes lit up with excitement, and I got to work.

![Cat singin](/assets/cat-singing.png)

I know that [Whisper](https://openai.com/research/whisper) is very good at recognizing speech. It can handle accents (including foreigners speaking English) or speed talking, at least that's what the demo page claims. I hoped that it wouldn't have issues with people singing. And indeed, it doesn't.

Here's a short clip of Maira singing "Baby Shark":

<audio controls controlsList="nodownload">
    <source src="/assets/baby-shark.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

And here what Whisper hears: _Baby Shark do do do do do, Baby Shark do do do do do do... Baby Shark, do do-do-do-do-do, Baby Shark!_

For the more adventurous, here's me singing "Livin' on a Prayer" by Bon Jovi:

<audio controls controlsList="nodownload">
    <source src="/assets/bon-jovi.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

Whisper transcription: _Whoa, we're halfway there, whoa, living on the prayer, take my hand we'll make it._

And here is the actual output from the application:

```
$ python main.py
Starting...
Capturing audio...
Audio captured to: recorded_audio.mp3
Transcript: Whoa, we're halfway there, whoa, living on the prayer, take my hand we'll make it
Recognized song: Livin' on a Prayer - Bon Jovi
```

Nice!

For song recognition, I'm using a single call to GPT-4 via the chat completion API. Here's a glimpse at the code:

```
response = ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are an expert in songs with perfect knowledge of titles, artists, release dates, and lyrics."},
                {"role": "user", "content": f"What song is this text from: \"{processed_audio}\". Output only the song title and artist name (when applicable) and nothing else."},
            ]
        )
```

With these prompts, GPT-4 delivers reliable, though not perfect, results. Understandably, it can't identify songs released after the model's training cut-off. The performance is also not great for non-English songs. I experimented with GPT-3.5, but the results were less consistent, even in English. Perhaps they could be improved with some prompt engineering or more context. I just went with the simplest solution and upgraded to the bigger model. The knowledge cut-off can potentially be managed using Langchain, which would enable the model to browse the internet and search for specific lyrics. This might be a future addition.

If you're curious about how this all fits together, check out my [repo](https://github.com/przadka/song-solver). Happy singing!

---

_All images created with Midjourney._
