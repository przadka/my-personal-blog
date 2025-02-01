---
author: Michał Prządka
pubDatetime: 2025-02-01T08:00:00.000Z
title: How AI Models Stack Up Against My 11-Year-Old?
postSlug: gmil-cm-benchmark
featured: false
ogImage: /assets/og-gmil-benchmark.png
description: I created my own AI math reasoning benchmark..
---
**I created an AI math reasoning benchmark using puzzles from this year's GMIL competition - a long-running international mathematical challenge that I participated in myself back in 1998. The results are quite interesting: some of the most advanced AI models performed comparably to my 11-year-old daughter, while others struggled significantly. This experiment gives some amusing insights into current AI capabilities in mathematical reasoning, especially when compared to human performance at the middle school level.**

GMIL is an international math puzzle competition organized by Wrocław University of Science and Technology. My daughter Anika, who is quite fond of these puzzles, submitted her solutions earlier this week, just before the deadline on January 31. After reviewing her solutions, I am pretty sure she got 7 out of 8 correct. This made me wonder: how would current advanced reasoning models perform on these tasks? It turned out to be a nice idea for a new weekend project, and after a few hours, I had my own curated AI reasoning benchmark that I call *GMIL CM Benchmark - Math Reasoning as a 11-Year-Old*. Let's see the results!


![Anika at GMIL Finals 2024](/assets/gmil-finals-2024.png)
*Anika at GMIL Finals 2024*

## The Competition

The GMIL ([*Gry Matematyczne i Logiczne*](https://gmil.pwr.edu.pl/), or Mathematical and Logical Games) is the Polish branch of the international [FFJM competition](https://www.ffjm.org/fr/reglement-du-championnat-international), and both share the same format. The puzzles are divided into categories with increasing difficulty. The youngest participants (category CE - up to 9 years old) solve the initial few puzzles, while the most advanced (professional mathematicians or STEM university-level students) are expected to solve all the puzzles on the list. The competition has a long history, dating back to 1987, and I remember participating in it as a teenager with some success - I was one of the finalists of the Polish edition back in 1998. It's both inspiring and scary to see both my daughter and the new AI models now capable of solving puzzles that I found quite challenging back then.

## The Puzzles

For my benchmark, I was only interested in the puzzles from the CM category, which Anika participated this year. She is 11 years old. Here are all the puzzles, translated from Polish to English:

---

### 1. Two Dates

Mateusz has 12 cards with digits:

`0 0 1 1 2 2 3 3 4 4 5 5`

and he arranges them to form dates. The first date of 2025 that he can create using two cards to form the day number, two other cards to form the month number, and four other cards to form the year number will be January 13:

`1 3 0 1 2 0 2 5`

**What will be the last date in 2025 that Mateusz can create using eight of these twelve cards?**

---

### 2. Aquarium

In the aquarium, there are octopuses with eight arms and starfish with five arms.

**How many starfish are there in the aquarium if the total number of arms of all the animals living in it is 41?**

---

### 3. In the Maze

In the maze, the rooms are numbered from 0 to 15. Moving between rooms triggers an alarm, except when:

- Moving to a room with a number exactly 3 greater than the current room, or  
- Moving to a room with a number exactly 13 less than the current room.

We enter the maze through room number 0 and exit through room number 1.

**How many rooms will we pass through (including rooms 0 and 1) if we never trigger the alarm along the way?**

##### Maze Layout:

```
9   12  15   2
6    7   4   5
3   10  11   8
0   13  14   1
```

---

### 4. Race to 2025!

```
   G N A J
+     N A
-----------
   2 0 2 5
```

In this coded addition, different letters represent different digits, and the same digit is always represented by the same letter. Additionally, none of the multi-digit numbers start with zero.

**What is the value of NA?**

---

### 5. Four Friends

Anna, Bartosz, Cezary, and Danuta are four friends. Each of them is preparing for a specific profession: archaeologist, bookkeeper, carpenter, and dentist. It is known that Bartosz will be a dentist. Only one of these people is training for a profession that starts with the same letter as their name, and that person is **not** Anna.

**What professions did Anna and Danuta choose?**

---

### 6. The Lost Scale Pan

Robert lost the right pan of his balance scale and had to use a different one — slightly heavier than the original. Now, with empty pans, his scale does not show balance.

However, Robert noticed that when he places a full bottle of juice on the right pan and 9 identical empty bottles on the left pan, the scale is balanced.

The same happens when Robert places two empty bottles on the right pan and a bottle filled halfway with juice on the left pan.

**How many times heavier is the full bottle of juice compared to an empty bottle?**

---

### 7. On the Plus Side

```
_ _ _ _ _ _
```
Place all the numbers 1, 2, 3, 4, 5, and 7 in the boxes in such a way that the first number is smaller than the last, and in every set of three consecutive boxes, there are two numbers and their sum.

---

### 8. Hats

Pola has a pair of plush monsters: a three-headed Cerberus and a two-headed Dragon. She really enjoys playing with these plush toys by putting hats on their heads. Pola has four identical white hats, two identical green hats, and one red hat. It is known that each of these hats can be placed on any head of Cerberus or the Dragon.

**In how many different ways can Pola put the hats on her plush toys so that each head has exactly one hat?**  
Two ways of putting on the hats are considered different if the hats on at least one head of one of the plush toys are of different colors."

---

The full set of 18 puzzles is available as a [PDF online](/assets/zadania_cwiercfinal2025.pdf). You can also [browse through the archives](https://gmil.pwr.edu.pl/archiwum/zadania-archiwalne) to see all the puzzles (from all stages) from 2002 till today. It’s quite an impressive collection!

## Methodology

For my benchmark I selected the advances reasoning models from various providers:

- **GPT-4o**: My usual go to model from the OpenAI family, with access to code execution.
- **GPT-o3-mini**: The new OpenAI model [made available just yesterday](https://openai.com/index/openai-o3-mini/)
- **Sonnet-3.5**: My go to model from Antropic, sometimes referred to as **Sonnet-3.6**
- **Gemini-Flash**: Google's advanced reasoning model optimized for speed.
- **DeepSeek-R1**: A state of the art reasoning model from DeepSeek.

Each model was given identical puzzle descriptions and one attempt to solve each problem. I evaluated their responses against the correct solutions, counting a solution as correct only if the final answer matched exactly. 

## Benchmark Results

![Benchmark Results](/assets/gmil-benchmark-results.png)

The benchmark results reveal a clear separation in mathematical capabilities among the tested models. At the top tier, three performers stand out: GPT-o3-mini achieved a perfect score of 100%, while both my daughter Anika and DeepSeek-R1 solved 7 out of 8 tasks correctly (87.5% accuracy). In contrast, Gemini-Flash and GPT-4o each solved 3 tasks, while Sonnet-3.5 managed only 2 correct solutions.

DeepSeek-R1's performance deserves a closer look. Its approach relied heavily on brute force computation, systematically testing all possible solutions. This strategy proved successful for simpler puzzles like *Two Dates*, where the solution appeared early in the search space. However, when attempting *On the Plus Side*, R1 exhausted its inference tokens before finding the answer. While it might have eventually succeeded with more computational resources, I counted this as a failure in the final results.

Below are the results for each model, with links to the solution transcripts. Unfortunatelly, I dont have Anika's notes anymore but you can take my word for it - she did solve 7 on her own :)

### GPT-4o
- Correct: [Aquarium](https://gist.github.com/przadka/a9ad6ef39260c205dd4ddec427de671c), [Race to 2025!](https://gist.github.com/przadka/ff0b7655b2e7d9c133de42eeaf750f47), [Four Friends](https://gist.github.com/przadka/f4db7fa12683d5c3c8e5f37d9950aeed)
- Incorrect: [Two Dates](https://gist.github.com/przadka/d8a10d4da2cb2bc9bfeee7dfd33e9691), [In the Maze](https://gist.github.com/przadka/ff24497b4f9d13b75d6b60dc1d205686), [Lost Scale Pan](https://gist.github.com/przadka/28f58eadeb893fa0d2a8e22ffcb136d2), [On the Plus Side](https://gist.github.com/przadka/b4112ebe40bd70f30befbc5e9ce0c34b), [Hats](https://gist.github.com/przadka/18fb5fef964414f1aa8a02245f28009d)

**Total Correct:** **3**

---

### GPT-3.5 Mini
- Correct: [Two Dates](https://gist.github.com/przadka/ce86560d605b460657a2c3dc62f60d4a), [Aquarium](https://gist.github.com/przadka/aac3d72a4ddd81bcf8ebcb1c8b1e59e5), [In the Maze](https://gist.github.com/przadka/a3b44a9f8c36b96764b617cb3ccc238e), [Race to 2025!](https://gist.github.com/przadka/274562bf79a3cd5d39275af5904f6b19), [Four Friends](https://gist.github.com/przadka/997f175c7c32232ecc45ed7e151c827d), [Lost Scale Pan](https://gist.github.com/przadka/43343e06569011d610a43e364d69a8b1), [On the Plus Side](https://gist.github.com/przadka/192428dde13c61137ac74e4fe72da1a3), [Hats](https://gist.github.com/przadka/f296eafc3b2b2de04975f6a1665e0ada)

**Total Correct:** **8**

---

### Sonnet-3.5
- Correct: [Aquarium](https://gist.github.com/przadka/9d516d58c4b32127c28fedf3ff526324), [Four Friends](https://gist.github.com/przadka/23506a6142f9d29cb25068ffdb669a63)
- Incorrect: [Two Dates](https://gist.github.com/przadka/a0c1b1a51735055729212ca1c535fdbc), [In the Maze](https://gist.github.com/przadka/9aa3cc7d3ce24a68a576807b3a0df9e1), [Race to 2025!](https://gist.github.com/przadka/56503981626d041765f77ac9af3c64db), [Lost Scale Pan](https://gist.github.com/przadka/582dc2c10e19975a818f98c8fc799cc2), [On the Plus Side](https://gist.github.com/przadka/a6dada4ba512c8487eca3916f36ebcb4), [Hats](https://gist.github.com/przadka/26d7403796ce7465d2dac6cbd09b1bf1)

**Total Correct:** **2**

---

### DeepSeek-R1
- Correct: [Two Dates](https://gist.github.com/przadka/de347b2aaef12a14060c8be52c4f6b05), [Aquarium](https://gist.github.com/przadka/8f021b47eec17ad144a24572d075028b), [In the Maze](https://gist.github.com/przadka/11e4e8c6e0a6dac52bb98b902c6e873f), [Race to 2025!](https://gist.github.com/przadka/880d598534c4d2faa86835ad245ad93e), [Four Friends](https://gist.github.com/przadka/22e4ed00f9079ca1503bd4ebfdf1ad13), [Lost Scale Pan](https://gist.github.com/przadka/3587e54278fd2905b09462d456b79d72), [Hats](https://gist.github.com/przadka/73e00a38e396093208a1f749fb59ad6a)
- Incorrect: [On the Plus Side](https://gist.github.com/przadka/f49f3d45c40ca625e7841ae40f5daf69) (ran out of tokens)

**Total Correct:** **7**

---

### Gemini-Flash
- Correct: [Aquarium](https://gist.github.com/przadka/91bef3aee76cd08cbf7f5ebdd9449e64), [Race to 2025!](https://gist.github.com/przadka/34f0ef22b033b6fddc5a9acc1f949295), [Four Friends](https://gist.github.com/przadka/993926bc3e47fb1374a5eaedd6b1a2a8)
- Incorrect: [Two Dates](https://gist.github.com/przadka/54dce96ed834493036cff0765a0322dc), [In the Maze](https://gist.github.com/przadka/f17a54e7a6268c8c24b28124f2ceaab5), [Lost Scale Pan](https://gist.github.com/przadka/0599b714fc2836eeadbf8ed27c9c3a04), [On the Plus Side](https://gist.github.com/przadka/c72f70551442ae6acfbf33dc53656bdf), [Hats](https://gist.github.com/przadka/e42faf4f035731d5a7f9ca13a8959e9e)

**Total Correct:** **3**

---

### Anika
- Correct: Two Dates, Aquarium, In the Maze, Race to 2025!, Four Friends, On the Plus Side, Hats (no transcripts available)
- Incorrect: Lost Scale Pan

**Total Correct:** **7**

## What's next?

One interesting aspect of this benchmark is that these puzzles are most likely new, and solutions are not yet available online. For all previous editions, Wrocław University actually publishes the solutions, so they may be included in the training data. Even with new puzzles, the models might still perform well through memorization. Many problems, particularly in the lower difficulty categories, follow familiar templates that models could match against similar historical problems. If memory fails, they can always try to brute force through all the options, just like 4o did with *Race to 2025!*, leveraging its ability to generate Python code:

![GPT Brute Forcing](/assets/gpt-brute-forcing.png)

It would be fun to extend this analysis to more difficult GMIL categories and perhaps create a standardized version of this benchmark for tracking AI progress in mathematical reasoning. But for now, I'm leaving this with a mix of pride and fascination that my daughter's math skills are comparable to DeepSeek's R1 - for better or worse.

---

*Big thanks to my friends Michał Warda and Łukasz Wróbel who inspired me to write this.*
