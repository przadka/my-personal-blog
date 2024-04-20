---
author: Michał Prządka
pubDatetime: 2024-03-18T10:37:52.737Z
title: Thinking with language models
postSlug: thinking-with-llms
featured: false
ogImage: /assets/map-table-og.png
description: Language models are not search engines and the implications of that.
---

**Imagine somebody gave you a very special city map. You can get to many places with this map. You can find unpopular corners, discover shortcuts familiar only to a few,  or even uncover entire areas that have remained hidden. It works in any city. It's exceptionally detailed and very useful. It's a great tool to go around, especially if you are curious and open to new experiences. It has only one special peculiarity, only one catch. Every time you unfold it, intending to navigate, it presents itself as a blank canvas. In order to see anything on this map, you actually need to start drawing on it first. But if you do draw on it, it responds by completing your sketches with complex and amazing patterns that you could only dream of creating yourself. And once you are done, you can follow it to many places that a normal map would never take you. It's a tool like no other!**

This is exactly how I feel about ChatGPT! I also claim it is one of the most useful mental models to have when working with Large Language Models, at least in their current state. It helps you understand their errors, steer them to better results, understand limitations and strengths. Every day I use this technique in my interactions with generative AI. By the end of this article, you will know exactly where I am coming from, see real-life applications of this approach, and learn how to leverage it in your own work.

### Drawing the map

We are the generation that grew up with Google and other search engines. They are part of how we think and solve problems. When we need information, we "google it". When we have questions, we "google it". Whether we're doing research, looking for inspiration, or just checking facts, we "google it".

Google is like a huge library waiting to be explored. When you input a query in the search box, Google becomes a patient and diligent librarian who goes through billions of bookshelves, drawers, and hidden cabinets to find exactly what you need. All these potential answers or solutions already exist within the library; they simply require someone to retrieve them swiftly, filtering out only what's relevant and beneficial. Google does exactly that, with astonishing speed and accuracy. I still remember the pre-Google era when accessing information wasn't as straightforward. Nowadays, "googling stuff" has become synonymous with seeking knowledge.

Here's the thing: ChatGPT is not a search engine, even though it sometimes feels like one. There are no bookshelves or drawers being scanned to find items that match your needs. ChatGPT doesn't act like a librarian who provides answers based on your prompts. It's more like a storyteller that picks up where you left off. If you start wondering about the meaning of life, it might share some profound philosophical insights. If you're thinking of meal ideas, it will come up with a few more. And if you say you're bored, it might start a chat that could cheer you up a bit (or maybe not!). The point is, when you type something into ChatGPT, it's not just taking orders. You and the LLM are collaborating to create something potentially useful and interesting, or maybe not, depending on your input.

At its core, any modern LLM, including GPT, is essentially a conversation continuation tool, not a database or information repository. It doesn't inherently "want" to answer your queries—its only purpose is to continue the conversation by "making stuff up". Yet the "made-up" stuff is often accurate and useful. This is not how Google works, and understanding this distinction is crucial. When used correctly, LLMs can offer tremendous leverage, particularly in augmenting your thought process. This might sound abstract, so let's unpack it with a simple example.


![Emerging map](/assets/map-puzzles.webp)

### Writing cold emails

Imagine you need to write a cold email. To be specific, let's say your task is to target potential clients with a corporate wellness program. You're unfamiliar with cold emails, uncertain about where to begin or what constitutes an effective one. You might believe a perfect template exists, one that suits your needs and guarantees a favorable response rate from prospective clients. So, you turn to ChatGPT for guidance and enter the following prompt:

> Write a cold email about a corporate wellness program.

(I haven't included the full response here, but if you're curious, you can [read it here]( https://chat.openai.com/share/1fc6b601-f09e-4f3a-b4a8-05ed6d81acb9).)

While ChatGPT strives to fill in the gaps based on the limited details provided, the resulting email is rather generic. The opening is uninspiring, the benefits get lost in irrelevant details, and "call or meeting at your convenience" is a weak call to action. Clearly, this isn't an effective cold email.

Many people might stop using ChatGPT at this point, criticizing the quality of the outputs as poor, irrelevant, or too simplistic to be of any real use. They might shift to other tools, left with the impression that LLMs are just overhyped search engines that fail on relatively straightforward tasks.

But LLMs are not search engines, and the quality of their outputs greatly depends on our inputs and how we navigate the conversation. Let's try drawing on the metaphorical map and see where it takes us.

We'll add more detail to our prompt and frame it as a dialogue with an expert, which is one way to get better responses from GPT on specific topics:

> You are a world-class marketing expert, specializing in B2B relationships. My name is Sarah Chen, and I am the Head of Business Development at Zenwork. We provide comprehensive wellness programs designed to support corporate teams' mental and physical health. You are my coach. 
>
> I am currently trying to design a new cold email campaign. What should I consider when crafting a cold email strategy? What are some important aspects of a cold email strategy in a corporate context?

We did not yet ask GPT to write the actual cold email. We are going top-down, aiming to first understand the attributes of an effective email. According to the answer, here are the key aspects that we should consider: target audience research, personalization, a clear value proposition, an engaging subject line, concise content, a strong call to action, a follow-up strategy, compliance, ethics, testing and optimization, and integration with other marketing efforts.

It's a solid list and a good starting point. We proceed with a follow-up question to more precisely define our desired constraints:

> Thank you, this is very helpful. What about the length of the email? How many paragraphs are considered appropriate?

As expected, GPT emphasizes the importance of a cold email's length and offers specific advice on structuring it, breaking it down paragraph by paragraph. With this advice, we're ready to draft the final piece:

> Thank you for this advice. Please leverage the advice above to help me write and email for my  outbound campaign to reach our potential corporate clients.

And here's GPT's proposal, based on the mutually established expectations from our previous conversation:

> **Subject: Elevate Your Team's Well-Being and Productivity with Zenwork**
>
> Dear [Recipient's Name],
>
> I hope this message finds you well. My name is Sarah Chen, and I'm the Head of Business Development at Zenwork. We specialize in comprehensive wellness programs designed to enhance both the mental and physical health of corporate teams like yours.
>
> In today's fast-paced business environment, we understand the challenges companies face in maintaining a healthy, productive workforce. Zenwork's programs are uniquely positioned to address these challenges by:
>
> - **Boosting Employee Productivity:** Our tailored wellness initiatives have been shown to increase focus and efficiency among team members.
> - **Reducing Absenteeism:** A healthier team means fewer sick days and a more consistent workforce.
> - **Enhancing Company Culture:** Investing in employee wellness significantly improves workplace morale and fosters a positive company culture.
>
> We would love the opportunity to discuss how Zenwork can specifically benefit [Company Name] and support your team's well-being and performance goals.
>
> Could we schedule a brief call next week to explore this further? I'm available at your convenience and can provide a concise overview of our programs and their impact.
>
> Thank you for considering Zenwork as your partner in enhancing workplace wellness. I look forward to the possibility of working together to create a healthier, more vibrant work environment for your team.
>
> Best regards,
>
> Sarah Chen
>
> Head of Business Development, Zenwork
>
> [Your Contact Information]
>
> [LinkedIn Profile] (Optional)
>
> [Website] (Optional)

It is not bad at all! This version is noticeably more concise than the initial attempt, with smoother transitions, clearly delineated benefits, and a straightforward call to action suggesting a "call next week".

Can we do better than that? We can just ask GPT to figure it out. Let's submit this last version for evaluation based on the previously discussed advice:

> Help me understand this email better. Please explain its strengths and weaknesses given the advice above:
>
> ===
>
> /full email proposal copied here verbatim/
>
> ===
>
>

Note that I've included the email proposal in my last prompt to keep it "top of mind" for GPT. This isn't always necessary, but I chose to employ this technique here as a demonstrative example of co-drawing the map.

GPT responds with a succinct evaluation of strengths and weaknesses. Now, we request the ultimate version of our email, aiming to rectify any identified shortcomings:

> Great, thank you! Based on this last feedback, please write the final version trying to address any weaknesses you found.
And here is the result:
>
> Subject: Transform [Company Name]'s Workplace Wellness & Productivity
>
> Dear [Recipient's Name],
>
> I hope this message finds you well. I'm Sarah Chen, Head of Business Development at Zenwork, where we champion comprehensive wellness programs tailored to enhance the well-being of dynamic teams like yours at [Company Name].
>
> Navigating the demands of today's business landscape, companies often grapple with maintaining a vibrant, productive workforce. At Zenwork, we've crafted our programs to directly address these challenges, offering solutions that:
>
> - **Elevate Employee Productivity:** Clients in your sector have seen a notable 20% uplift in team efficiency through our targeted wellness initiatives.
> - **Minimize Absenteeism:** A focus on holistic health has led to a 30% reduction in sick days for our partners, ensuring a more consistent and engaged workforce.
> - **Cultivate a Positive Culture:** By embedding wellness into their DNA, our clients report a stronger sense of community and morale within their teams.
>
> I'd be keen to explore how we can tailor these outcomes to [Company Name]'s unique environment and aspirations. Could we set aside a brief conversation next week to dive deeper? Please feel free to pick a suitable time via my [scheduling link](#), or let me know your preference, and I'll make the arrangements.
>
> Thank you for considering how Zenwork can enrich your corporate landscape. I'm looking forward to the opportunity to support [Company Name] in fostering a healthier, more vibrant workplace.
>
> Warm regards,
>
> Sarah Chen
>
> Head of Business Development, Zenwork
>
> [Your Contact Information]
>
> [LinkedIn Profile]
>
> [Website]

The final email remains short but now includes a scheduling link, facilitating the booking of a call at the recipient's convenience. It still opens with *I hope this message finds you well*, which I am not a big fan of, but we can refine it further before sending, with or without GPT support.

This full dialogue is [available here](https://chat.openai.com/share/94492b28-b2f6-48c5-8f29-d14a992694fa). We went from nothing to a relatively good cold email in a matter of minutes. It is certainly not perfect, but with some more effort, we can make it even more engaging and relevant.

I have used this framework countless times and it hardly ever fails me. It's a great example of co-creation, using GPT to augment your thinking and use your thinking to guide GPT through its generative process. This is what I mean by "drawing the map". We started by defining high-level constraints, not ourselves but by setting the stage, then refined them and applied them to get the results that would be impossible with a short, simple instruction. Large Language Models do not work with simple commands, at least when you want to use them for [complex and creative work](https://www.linkedin.com/feed/update/urn:li:activity:7166695774636961792/). But they do work, in my experience, if you are willing to engage in the process.

You can also check [another session with GPT](https://chat.openai.com/share/70ad5e11-5063-43a1-a1b4-dfa86072cad3) that follows the same pattern. I also [used it with Claude Opus](https://gist.github.com/przadka/b3c83d2fb9d896be88bdd957366bf1c9) and the results are similar. My point is that this is a reliable method, and you can use similar co-creation techniques for various other challenges or tasks.

![Thinker](/assets/thinker-low-res.png)

### Thinking together

To use large language models effectively, as thinking tools, we need to unlearn many patterns that we've learned for search. Have you ever disagreed with Google and responded with "this is nonsense!" to the search bar? Or perhaps you've asked Google to ponder on "what it missed," hoping for a new, improved set of results? Have you ever felt the need to be polite in your queries, or explicitly requested Google to "carefully review" its answers before presenting them to you? Of course not! That's not how Google operates. Yet, all these minor adjustments can improve what you get from LLMs. Once you see your interaction with them as co-creation, it becomes much easier to get good results. It's natural - you're as much the creator here as the model is. It's better to be curious but suspicious. After all, your own mind may be hallucinating just like sometimes GPT does.

---

_All images created with DALL·E and Midjourney._

