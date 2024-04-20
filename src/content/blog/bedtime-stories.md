---
author: Michał Prządka
pubDatetime: 2023-07-10T17:37:52.737Z
title: Prompt Engineering with Bedtime Stories
postSlug: bedtime-stories
featured: false
ogImage: /assets/dream-machine.png
description: I explain how to leverage GPT's capabilities to create personalized and authentic content, using strategies like refining prompts, establishing context, and incorporating personal style.
---

Prompting GPT and LLMs can be difficult. I have heard a variety of complaints about these models - irrelevance, hallucinations, memory issues, bias etc. My own experiences have been largely positive, and I explored some useful examples in my [previous post](https://blog.toasterthoughts.eu/posts/prompt-intern). Of course, I don't deny that challenges exist. LLMs are not perfect, and specific techniques are necessary to extract valuable answers. I feel that I was lucky to learn them early and I am now able to avoid common traps and steer my GPT sessions to sensible outcomes. I believe that effective prompting is a skill that can be learned, and the aim of this post is to share some of my strategies and tricks to help enhance your interactions with ChatGPT. I'll delve into one of the examples I mentioned in my previous post - creating bedtime stories for children. It is one of my favourite use cases - fun, creative, and innocent - and I love to experiment with various approaches to surprise Maira and [Anika](https://anika.toasterthoughts.eu/) with new ideas. Let's explore some simple tools and patterns I typically use in such situations.

## Starting small

GPT and other LLMs are, in essence, stochastic machines. Each prompt propels you on a somewhat random walk across a vast neural network, and the path you take depends on the input you give. Different prompts initiate different journeys, each with its own revelations and surprises.

Let's begin with something very simple. At this stage, we do not have any particular preference or prompting finesse. Our prompt is simply: _Write a bedtime story._ And we hope that GPT responds with something children will enjoy.

Here is the actual output of my session:

```
  Prompt:
  Write a bedtime story.
  Completion:
  Title: The Wandering Star and the Lonely Moon
  Once upon a time, in the deepest folds of the cosmos, there was a lonely moon named Luna. Luna orbited a deserted planet in a forgotten corner of the galaxy. She was beautiful, with shimmering craters and valleys that sparkled under the cosmic lights. Despite her beauty, she was desolate. With no one to share her stories with, no stars nearby to dance with, she was truly alone.
```

Since the completion was quite lengthy, I decided to only include the first paragraph. If you're interested, you can check out the [full session](https://chat.openai.com/share/6a421890-3359-40b0-a843-9d2776cef66a).

![Two moons in a vast cosmos](/assets/bedtime-story-moons.png)

The results are pleasing. The story is detailed but not too long, it has the typical structure one would expect from a bedtime story, and definitely some captivating ideas that my two daughters would find amusing. As a nice bonus, GPT even took the liberty of crafting a story title. It's a good start!

But we can be more specific, and indeed, enlist GPT to assist us with that. Let's request some bedtime story ideas before we set about writing one. Here are my results:

```
Prompt:
Generate 5 bedtime story ideas.
Completion:
1. **"Whispers in the Night Sky"**: Little Luca lives in a small town where the stars shine brightly every night. One evening, he begins to hear soft whispers in his room, telling tales of the cosmos. It turns out that it's the stars themselves! Each night, a different star tells its own unique story, sharing lessons of hope, bravery, and kindness. It's up to Luca to share these stories with the town, bringing joy and wisdom from the night sky to his friends and family.
```

Again, I've included just a small part of the actual GPT output, but you can read the [full session](https://chat.openai.com/share/2d725cad-c6da-4618-8e5d-4c09a3b08a4d) if you wish.

Let's pick an idea from the list and use it as our prompt:

```
Prompt:
Here is a bedtime story idea. Please write a bedtime story based on it:
===
"The Last Dream Weaver": In a world where beautiful dreams are woven by skilled weavers and sent down to sleeping children, a young apprentice named Mabel finds out she's the last Dream Weaver. Despite her initial fear, she sets out on a magical journey to weave the grandest dream ever. Along the way, she encounters various creatures and situations that teach her about courage, resilience, and the power of imagination.
===
Completion:
Title: "The Last Dream Weaver"

Once upon a time, in a realm high above our own, floated the vibrant city of Somnus. Here, the skilled artisans known as Dream Weavers spun threads of wonder, joy, and imagination, weaving them into dreams that would descend to the sleeping children of Earth. Their looms hummed with the magic of creativity and endless possibility.
```

As usual, the [full session is available](https://chat.openai.com/share/d07a7a4c-cebc-4f4b-b619-d9b39db230ba).

Notice how I use special characters (in this case: "===") to segregate certain elements of my prompt. I frequently do that because it improves the results.

So, in a few simple steps, we've transitioned from a random, generic story to something more specific that's potentially better suited to our needs. Nice! But let's aim to do even better!

One of the great things about LLMs is that you can guide their "thinking" with just a bit of additional input in your prompt. I often use templates, that I find particularly useful for a given topic that I want to explore. We can leverage them for our story exploration as well. Here is how:

```
Prompt:
Generate 5 bedtime story ideas. Please use the following template for each story idea:
===
Title: <story title>
Characters: <story characters>
Setting: <location or place of the story>
Moral: <moral of the story to discuss with children after reading>
===
Completion:
===
Title: "The Bear with a Golden Heart"
Characters: Benjamin the Bear, Lily the Rabbit, Freddy the Fox, and Sarah the Sparrow
Setting: Enchanted Forest
Moral: Kindness is a treasure that enriches everyone around you.

In the enchanted forest, Benjamin, a gruff yet kind-hearted bear, shows unexpected acts of kindness to other forest inhabitants, resulting in a heartwarming adventure and life-changing lessons for all.
```

The full session [here](https://chat.openai.com/share/d93e7790-286a-4dfd-9cbc-bb64330d1838).

Observe once again how I use special characters to structure my prompt and the given template. While this is not mandatory - I'm sure that GPT would understand the template even without the explicit \<instructions\> - it assists me in organizing my prompt. Additionally, note how the model added a short story description at the end of my template. This was actually something I wanted but forgot to include. I often have this experience - GPT can work with the template I provide and expand it with content I find beneficial. It doesn't always hit the mark, but it did this time. Well done!

![Illustrion of the pirate Silvereye standing in front his ship](/assets/bedtime-story-pirate.png)

We've managed to get from a single prompt, with an unspecific answer, to something more organized, more creative, and more relevant to our needs. As you can see, I frequently use multiple GPT sessions for a given task, some of them helping me to craft my input for another. We will delve deeper into this approach in the upcoming sections.

## Context is King

As a regular GPT user, the only way to improve the LLM output is by refining and expanding your input. There's no hidden secret - the more precise, comprehensive, and specific your prompts, the more information you supply to the model that can be utilized in generating what you desire. Let's explore how to establish the context of your conversation to make the most of it.

Context can be anything. I often write quite elaborate prompts, even if certain details appear tangentially related. Writing these prompts sometimes feels like composing a journal entry - my mind wanders, adding information for the sheer purpose of constructing a more engaging narrative. Surprisingly (or perhaps not), GPT can extract a lot from an input that's not particularly organized or structured, and still provide a satisfying response.

Let's examine an actual prompt and its completion:

```
Prompt:
Create an imaginative and engaging bedtime story for my adventurous daughters who love exploring the world. The main characters should be two girls, Panika and Entropia. Panika, who is 6 years old, adores cats, and Entropia is a cheeky 10-year-old. The girls embark on an exciting space adventure, visiting four distinct planets. Remarkably, each planet lacks one of the four fundamental forces of nature - gravity, electromagnetic force, strong nuclear force, and weak nuclear force. This should serve as an educational component, subtly teaching them about these forces while maintaining the story's intrigue and excitement.

As a signature tradition in our storytelling, please begin the narrative with "Just imagine that one day...". This is how I always start my stories.
Completion:
Just imagine that one day, Panika and Entropia, two spirited and curious sisters, discovered a peculiar-looking spaceship in their backyard. This was no ordinary spaceship, but a magical one, capable of whisking them away to worlds unimagined.

Their fascination piqued, the girls hurriedly climbed aboard, accompanied by their favorite feline companions - Panika's adored cat, Whiskers, and Entropia's rambunctious kitten, Stardust.
```

The full session [here](https://chat.openai.com/share/0b68fe79-93fa-4a21-a39b-dc8d3620e299).

Wow, what an adventure! This is undoubtedly high-quality content that my kids would enjoy. It has everything I wanted, and more. Notice how GPT added four distinct planet names - Zeron, Lumino, Kern, Fissura - each subtly relating to the main theme of the story.

![Panika and Entropia in a spaceship](/assets/bedtime-story-spaceship.png)

Here's another exciting idea: assign a role to GPT, like "you're a librarian who was once a pirate and loves to share adventurous stories with children to impart important lessons." This tactic can yield fun and unexpected results. Consider this example:

```
Prompt:
You are a former pirate turned librarian. Over the years, you've amassed a collection of thrilling sea adventures and legendary pirate tales. Now, you spend your days sharing these stories with the inquisitive children who visit your library. Today, a group of young, adventure-loving children have gathered around, eager for a story. Your goal is to not only entertain them with a gripping pirate tale, but also impart a valuable life lesson subtly woven into the narrative. Please share the story you choose to tell.
Completion:
Ahoy there, me young mates! Gather round, gather round. Ye've come for a tale of high seas adventure, have ye? Well, ye're in luck. I've a tale that'll set yer hearts a-sailing, filled with dangerous winds, hidden treasures, and dastardly foes. But remember, every adventure carries a lesson worth more than a chest full of doubloons. So listen well.
```

As usual, the [full pirate-turned-librarian session](https://chat.openai.com/share/d9d70d35-f52d-4bbb-afc1-5b99fb5154ee) is also online.

Once again, the story is delightful, entertaining, and educational. The fact that it's told from the perspective of a pirate will be an enormous plus for my kids :)

One thing that these stories don't capture quite accurately is my unique, personal style. Anika and Maira don't mind this much, but having heard so many non-GPT stories over the years, they instantly recognize anything that wasn't created by me. It could be the words I use, the ideas I pick, or my tendency to introduce recurring characters in all of my tales. They immediately see that a story isn't _my_ story. In the following section, I'll explore how you can render the GPT output more personal and relatable, not just for your children, but for anyone reading it.

## Being authentic

Large Language Models are great and tremendously useful, but can often be generic, repetitive, and remarkably 'stock-like.' Using GPT and maintaining authenticity can pose quite a challenge. There is a flood of generic, polished content shared on LinkedIn these days - sometimes, the sheer length of a post is a giveaway that an LLM crafted it. In the past, nobody would have time to write anything longer than handful sentences or proofread 5 paragraphs to ensure flawless vocabulary and grammar.

Good content is personal content. Regardless of the format - be it a blog post, LinkedIn article, or a professional email - infusing authenticity helps you stand out and forge a stronger connection with your reader. Some edges need not be smoothed - a good friend of mine, [Emilka Bojańczyk](https://www.linkedin.com/in/emilka-boja%C5%84czyk) told me recently: _It's the rough edges that create beauty that resonates._

The good news is that when dealing with LLMs, style is an aspect of content that can be isolated, tweaked, and transferred. By adding just a few extra lines to your prompt, you can explicitly instruct GPT to generate content that has a particular style.

Let's take the basic prompt we began with and expand on it, infusing it with additional details that align more closely with what you - or better yet, your children - find engaging:

```
Prompt:
Write a bedtime story. Use simple sentences and talk in a matter-of-fact way. Avoid complicated words but make sure that the narrative is dynamic. The story is about Panika and Entropia, two adventurous girls, and it should also feature another character - Aunt Honorata, who has a motorcycle. Assume that the reader is already familiary with all the characters. Please start the story with "Just imagine that one day...". The story should end with a scene when Panika, Entropia and Aunt Honorata are drinking hot chocolate together and discussing what happened to them.
Completion:
Just imagine that one day, Panika and Entropia found an old map in Aunt Honorata's attic. The map showed a path to a hidden treasure. The girls' eyes lit up with excitement. They loved an adventure. And this looked like the best one yet.

Early next morning, Panika, Entropia, and Aunt Honorata set off. Aunt Honorata rode her bright red motorcycle. Panika and Entropia sat behind, holding onto the map. Their hearts pounded as the wind whooshed past. They were on a real treasure hunt!
```

The full session [here](https://chat.openai.com/share/375594e9-55b2-4894-929d-e49a79fdabcb).

![Panika and Entropia with a motorcycle on an attic](/assets/bedtime-story-motorcycle.png)

As usual, context is essential - the more you include in your prompt, the more refined the results will be. I sometimes quote some of my original writing (emails, journals, etc.) as part of my session. Remember that you don't need to fit everything into a single prompt - I frequently kick-start with a few preliminary prompts to provide enough guidance and a base for subsequent references.

As an example, let's say we would like to turn the pirate-turned-librarian story into something more grounded to Earth, for whatever reason. My approach would be to first provide the complete original story and then change the style with additional directions in a subsequent prompt. You can check out the [full session](https://chat.openai.com/share/1f173bcd-8ac6-42f7-9f97-28105dd7cc76) where I altered style of the story we generated earlier in this post. Our pirate turned into a lawyer :)

This approach works in many situations - I use it for PowerPoint presentations, cover letters or emails. Capturing my personal style correctly is perhaps the most challenging aspect of my interactions with GPT, yet it is also quite fun. I frequently correct the model with remarks like, "This tone is overly enthusiastic; I don't communicate this way," or "Using the word 'X' isn't my style." Invariably, GPT heeds the feedback, apologizes, and carries on with a better version.

Good, distinctive personal style is hard work, and even with GPT, the hard work is still there, just maybe it a different form. I often find myself iterating over various versions, cherry-picking phrases or eliminating certain words until I arrive at something that genuinely resonates with me. To be honest, it is quite similar to my regular, pre-LLMs creative process, but faster and more pleasant.

## Closing thoughts

Creating a bedtime story may sound like an unusual example, far removed from the practical applications of the contemporary knowledge worker. But it's not. I use these strategies every day, and nearly all the use cases I outlined in [my last article](https://blog.toasterthoughts.eu/posts/prompt-intern) leverage them in some way. Indeed, I used many of them when writing this blog post - I confess: GPT assisted me to write this. But making sure the end result is the way I wanted it to be was actually quite laborious. I enjoyed writing it. I hope you enjoyed reading it!

## Shoutouts

All images created with Midjourney.
