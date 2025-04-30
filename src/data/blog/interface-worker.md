---
author: Michał Prządka
pubDatetime: 2023-12-11T06:57:52.737Z
title: The Last Decade of The Interface Worker
postSlug: interface-worker
featured: true
ogImage: /assets/headphones-og.png
description: Reflecting on the evolving role of knowledge workers in the age of generative AI and large language models.
---

If you are reading this, you're likely a knowledge worker. You work from an office, from home, or perhaps a blend of both. You spend most of your time at a computer, often online. Maybe you write content or software, review materials, make decisions, conduct research, or spend much of your time meeting people, trying to understand their problems and helping them find solutions. There are many ways to be a knowledge worker and just as many ways to generate value in this role. This is going to change.

In this essay, I argue that a fundamental wave of disruption is approaching knowledge work. This wave, which is currently unfolding before our eyes, is driven by breakthroughs in AI and generative AI. I can't predict the future, but I am convinced that we are witnessing one of the most significant transitions in the history of human civilization. The world of our children will be very different from ours. Even if we don't achieve [artificial general intelligence](https://en.wikipedia.org/wiki/Artificial_general_intelligence) anytime soon, I believe that in 5, 10, or maybe 20 years, we will witness major societal shifts, comparable to those following the introduction of the alphabet, electricity, or general education. I am excited but also slightly scared.

Predicting the future is impossible, but we can and should think about the present. My goal here is to present a simple mental model to dissect these complexities and help you think about both the smaller and bigger picture. I myself use this model to make decisions and navigate these turbulent times. Perhaps it will be useful for you as well.

![Modern Office](/assets/modern-office.png)

### The Coming Wave

At the beginning of 2023, one of my New Year resolutions was to get the [AWS certification for Solutions Architect](https://aws.amazon.com/certification/certified-solutions-architect-associate/). It seemed like a challenging but relevant way to refresh some fundamental knowledge that I hadn't practiced hands-on for years. I spent many hours preparing for the exam, doing online courses, reviewing documentation, and attempting sample tests. Around this same time, [I began using GPT extensively](https://blog.toasterthoughts.eu/posts/prompt-intern), so it was natural for me to seek guidance, even coaching, from ChatGPT. And what coaching it was! GPT helped me to understand concepts more deeply, connect the dots more quickly, and effortlessly map complicated business problems into technical concepts. I started using it to answer questions from sample exams and even prompted it to create new questions that tested my knowledge and readiness. GPT almost never failed me. Every time I asked, it answered.

And that's when I began to question the point of getting this certification. What did it really prove? That I could answer some questions and solve problems when asked? But GPT could do that too – faster, better, and available 24/7. What I was certifying for now seemed like an [obsolete job](https://en.wikipedia.org/wiki/Category:Obsolete_occupations), and suddenly, paying $150 for the exam felt utterly pointless.

When I finally decided not to take the exam, it struck me as something profound, a deep insight into the future we are heading towards. I didn’t fully grasp it then, but this realization greatly influenced many of my decisions thereafter.

I'm writing this in December 2023. It's been only a year since ChatGPT was introduced, yet its impact has been monumental. What seemed impossible – creating beautiful images, automating publishing or just talking to a computer – has now become routine. It is possible that foundation models like GPT or Claude will become as commoditized and invisible as transistors or operating systems, embedded into our society. The impact of this is hard to underestimate.

It's evident that a lot of cognitive work is going to be automated. This won't be a walk in the park, and [few people seem to realize this](https://www.pwc.com/gx/en/issues/workforce/hopes-and-fears.html). Even the term "automation" doesn't quite do justice here; it implies something mechanical, laborious, and repetitive – tasks we'd [happily outsource to robots](https://en.wikipedia.org/wiki/Robotic_process_automation). But the automation enabled by AI and large language models goes far beyond this.

For certain tasks, AI can now outperform humans, whether they are writers, illustrators, developers, or content moderators. And it's only getting better. The range of tasks where AI outperforms humans will continue to expand. These aren't mundane or boring jobs; many people find meaning and identity in them. Are we the last generation of knowledge workers who will actually get paid for their labor? Should we start working on a global UBI program to hedge our bets? Perhaps. Or perhaps there's a more nuanced way to think about it.

### Talking Machines

The Turing Test is one of the simplest yet most fundamental concepts in computer science. It goes like this: imagine you're having a text-based chat with someone. You can't see or hear them, only read their responses. You're free to ask anything and continue the conversation as long as you want. How would you know if you're talking to a human? What questions would you ask? Are there specific questions or a series of queries that, while easy for humans, would stump a computer? If, after a lengthy chat, you can't decide whether you're conversing with a person or a machine, then the program is considered to have passed the Turing Test, or the [imitation game](https://en.wikipedia.org/wiki/Turing_test) as described by Alan Turing in the early 1950s.

We've seen seven decades of failures. Even famous programs like [ELIZA](https://en.wikipedia.org/wiki/ELIZA), cute as attempts, revealed more about human gullibility than the capabilities of computers. Seven decades, and then, quite suddenly, in the early 2020s, [computers](https://www.scientificamerican.com/article/google-engineer-claims-ai-chatbot-is-sentient-why-that-matters/) [started](https://www.youtube.com/watch?v=qbIk7-JPB2c) [talking](https://www.nature.com/articles/d41586-023-02361-7). We had to introduce guardrails to prevent humans from mistaking them for other humans. Without these safety measures, LLMs would pass a Turing test against an average person fairly easily. With the safeguards, it's somewhat amusing to [watch them struggle](https://www.youtube.com/watch?v=fwbkNYQQLco).

![Mainframe Computer](/assets/mainframe-computer.png)

Large Language Models have essentially solved language as a problem. They understand humans and can imitate human conversation at an almost superhuman level. They process what we say, engage with us thoughtfully and empathetically, and even help us to [solve important problems](https://www.reddit.com/r/OpenAI/comments/182zkdl/whats_the_hardest_real_life_problem_you_have/). They translate concepts, styles, or ideas, assisting us in connecting the dots. This is both remarkable and [quite unbelievable](https://twitter.com/chrisjbakke/status/1725649214401884459).

Modern LLMs have learned about our world and culture by reading virtually everything we've ever written. They can be thought of as [enormous zip files](https://www.youtube.com/watch?v=zjkBMFhNj_g&t=267s) that have compressed all our written knowledge into a neural network. The text they've absorbed and understand is a projection of our world, and some, like Ilya Sutskever, [claim](https://www.youtube.com/watch?v=Ckz8XA2hW84&t=1261s) that these models can reconstruct our world from that projection.

These two capabilities – the ability to understand and speak, combined with effortless access to our knowledge and culture – have profound implications for knowledge work. I argue that many knowledge workers actually serve as translators, human interfaces for our vast, interconnected brain of facts, skills, and insights. If machines can now understand our questions and access the same knowledge within seconds, these human translators are no longer needed.

### Translators and Interfaces

Think of the last time you visited a doctor. Perhaps you were feeling unwell and needed advice, a prescription, or simply reassurance. Your consultation might have lasted 15 minutes or less, during which you answered questions and received a diagnosis. Maybe you even underwent some tests, but the technician refused to interpret them for you, deferring to the doctor's verdict.

You can't know everything, so you consult a specialist. Someone who has the knowledge and skills to translate your problem into a solution that humanity has discovered. This has given rise to a whole class of knowledge workers. They work as translators, bridging the gap between what you present to them – be it physiological symptoms, a hardware issue, or a complex legal case – and a potential solution grounded in our cultural knowledge and expertise. Often, they perform this task mechanically or routinely. They act as an interface between your problem, expressed in natural language or other simple means, and a solution articulated in domain-specific expertise and jargon. I refer to them as interface workers.

Becoming a proficient interface worker in some fields requires significant time and effort. That's why we compensate them well. Think of a doctor, lawyer, or highly qualified accountant. In fact, much of our education system is predicated on producing experts certified to translate specific knowledge domains. Others, like content moderators, call center operators, or customer service representatives, are less costly. Learning to follow guidelines and apply them diligently doesn't require extensive training. But when machines take over the role of translator, these jobs, despite their differences, start to resemble each other. To a large language model, they are just an unimaginable number of simple mathematical operations performed on [massive computing clusters](https://inflection.ai/inflection-ai-announces-1-3-billion-of-funding).

![VR at a picnic](/assets/vr-picnic.png)

In a certain way, a doctor, lawyer, or accountant is like a modern [elevator operator](https://en.wikipedia.org/wiki/Elevator_operator). Being an effective operator required a range of skills. Manual elevators were often controlled by a large lever, necessitating a keen sense of timing to consistently align the elevator with each floor. But elevator operators are no longer needed because we figured out better, cheaper and safer ways to handle this.

There are many interface workers because translating problems into solutions is a crucial task in our complex world. Doctors, lawyers, accountants, architects, consultants, content creators, software engineers, graphic designers, ghostwriters, customer service representatives – to name a few. Of course, reality is more nuanced. Many jobs also involve creativity, relationships, storytelling or empathy. But translation is often a significant part, and if it is the majority of what you do, you are probably an interface worker.

I'm oversimplifying to make a point. Machines aren't perfect yet. They are often unreliable, [hallucinate](https://www.reuters.com/legal/new-york-lawyers-sanctioned-using-fake-chatgpt-cases-legal-brief-2023-06-22/), or struggle with seemingly simple tasks. But they are improving, and our reliance on them as translators will only grow.

About a century ago, and earlier, the term 'computer' actually [referred to people](<https://en.wikipedia.org/wiki/Computer_(occupation)>). Now, it feels archaic and strange to think of a computer as anything other than a device that assists us in various tasks. My bet is that this will be the fate of many modern interface jobs, even those now held in high esteem. In the future, maybe quite a close future, we might not need interface workers because we won't need human translators. We will have assistants – instant, accessible, and affordable – who will perform these translations for us. We might still call them "doctors," "lawyers," or "AWS architects," but they won't be human like us. How long will it take? And how will we get there?

### The Path to The Future

I have no idea what the future will look like but I am certain that large language models are a very important part of it, and interface workers – human interface workers – are not. The mental model described above guides me in making decisions today and navigating the complex situation we find ourselves in.

To conclude this piece, I want to share two observations that I find particularly relevant.

First, there is the [lump of labor fallacy](https://en.wikipedia.org/wiki/Lump_of_labour_fallacy). This is the (mistaken) belief that there is a fixed amount of work available in the economy, and that increasing the number of workers (or introducing automation) reduces the amount of work available for everyone else, and vice versa. The world doesn't operate this way, but delving into the reasons for this is beyond the scope of this already lengthy article. If you're curious, I recommend a great [essay by Ben Evans](https://www.ben-evans.com/benedictevans/2023/7/2/working-with-ai). Generally, the Lump of Labor Fallacy is good news for us – history has shown that gains in productivity typically lead to increased wealth and a better world for everyone, including more jobs. Would you rather live in 1823 or 2023? Yeah, me too.

![Traffic jam](/assets/traffic-jam.png)

My second observation is more intuitive, and a hopeful one. I believe that the automation of interface work might actually make us more connected and create space for things we should value more. After all, intelligence is just one aspect of being human, and maybe [not the most important one](https://twitter.com/ilyasut/status/1710462485411561808). We are all unique, each with our own story, and we're here together for a brief moment, living our lives [unprepared](https://poets.org/poem/nothing-twice). I hope (hope!) we are entering a new renaissance of empathy and compassion, where we value stories, connections, and relationships as much, if not more, than hard skills like problem-solving or intelligence. I don't know if it's possible to build the whole world economy around these values, but it certainly sounds like a project worth trying. Superintelligent assistants seem like a part of this project, just as much as ordinary humans are.

---

_All images created with DALL·E and Midjourney._
