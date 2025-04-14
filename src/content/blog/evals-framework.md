---
author: Michał Prządka
pubDatetime: 2025-04-10T10:31:52.737Z
title: The Real Moat Isn't Your Agent
postSlug: evals-framework
featured: false
ogImage: /assets/evals-framework
description: A battle-tested framework for evaluating LLM-based systems.
---

The strongest [moat](https://x.com/garrytan/status/1892952656940880036) in AI isn't your agent or model. It's how fast and how precisely you can catch failure before your customers do. In AI, evals are the firewall. Without them, you're one bad output away from PR disaster, compliance hell, or real-world harm.

If you're a technical leader struggling with AI reliability, a product manager trying to scale beyond POCs, or a C-suite executive wondering why your AI investments aren't delivering consistent results—this post is for you. It represents lessons learned from real-world implementations where robust evaluation not only prevented failures but enabled faster iterations and superior products.

While most companies rush to deploy sophisticated AI systems with minimal evaluation, they're not moving fast—they're flying blind. After working with various AI implementations in healthcare, customer service, and enterprise applications, I've noticed something consistent: teams that take evaluation seriously build better systems. And "better" isn't just about technical benchmarks—these companies see real differences in how customers respond to and rely on their AI solutions.

![Garry Tan on Evals](/assets/garry-tan-evals.png)

## Mistakes That Cost

Unlike traditional software, LLM-based systems are inherently probabilistic, highly sensitive and complex multi-component systems. To make things even worse, the business consequences of AI failures can be severe:

- **Healthcare**: Hallucinated treatment recommendations lead to potential patient harm and malpractice liability
- **Legal**: Fabricated case citations result in invalidated arguments and professional negligence claims
- **Financial services**: Invented compliance regulations trigger regulatory investigations and seven-figure penalties
- **Customer service**: Confidently wrong product information creates customer churn and negative social media exposure

For every client I've worked with, evaluations have caught at least one critical issue that would have directly damaged customer relationships or created significant liability.

![Write Prompts](/assets/write-prompts-cartoon.png)

## Why Most Teams Get Evals Wrong?

Most teams approach AI evaluation backward. They deploy systems with elaborate capabilities but primitive safeguards, essentially hoping problems won't materialize until after launch. Here's where they fail:

- They rely on vibe checks instead of systematic metrics
- They only evaluate generation, not retrieval or tool use
- They skip testing edge cases until it's too late
- They treat evals as a one-off project, not a continuous system

I've found that systematically evaluating four critical components addresses these common pitfalls: retrieval, tool use, generation, and agent trajectory. This approach transforms vague concerns about AI reliability into quantifiable metrics that directly impact business outcomes.

![Evals Framework](/assets/four-eval-pillars.png)

## 4-Part Evaluation Framework I Use With Clients

The framework I use divides evaluation into four key areas, each designed to catch specific types of AI failures:

| Component | Problem |
|-----------|---------|
| **Context Retrieval** | Are we retrieving relevant documents for our AI's context? |
| **Tool Use** | Are we using the correct tools to perform actions? |
| **Generation** | Does our AI's output meet our quality standards? |
| **Agent Trajectory** | Is our AI's reasoning path efficient and effective? |

Let's examine each component in detail, reviewing the problem, potential metrics and real-world examples.

### Context Retrieval

**Problem:** Are we retrieving relevant documents for our AI's context?

**Metrics & Targets:**
- Recall: >90% of relevant docs retrieved
- Precision: >85% of all retrieved docs are relevant
- MRR: First relevant doc in top 3 positions
- Coverage: >95% of query types have at least one relevant result

**Real-World Example:**
A legal assistant analyzing a contract dispute retrieves 8/10 relevant precedent cases, with 7 being directly applicable (precision: 0.875). The most relevant case appears first in results (MRR=1.0).

### Tool Use

**Problem:** Are we using the correct tools to perform actions?

**Metrics & Targets:**
- Tool selection accuracy: >95% correct tool choices
- Parameter accuracy: >99% correctly formatted parameters
- Execution success rate: >98% error-free tool calls
- Recovery rate: >90% of failed calls successfully retry

**Real-World Example:**
A booking assistant handling 100 meeting requests:
- Correctly uses calendar API 97 times
- Formats all parameters correctly in 99 cases
- Successfully executes 98 bookings
- Recovers from 1/2 failures through retry

### Generation

**Problem:** Does our AI's output meet our standards?

**Metrics & Targets:**
- Style compliance: >90% match to brand voice
- Veracity: 100% of statements grounded in source documents
- Completeness: >95% of query aspects addressed
- Conciseness: Response length within ±20% of ideal

**Real-World Example:**
Customer service AI handling product inquiries:
- Maintains brand voice in 92/100 responses
- Every statement traced to product documentation
- Addresses all customer points in 96/100 cases
- Keeps responses under 150 words

### Agent Trajectory

**Problem:** Is our AI's reasoning path efficient and effective?

**Metrics & Targets:**
- Task completion: >95% successful outcomes
- Convergence: avg steps/min steps ratio across multiple test runs
- Redundancy: % of repeated actions
- Recovery: attempts needed for correction

**Real-World Example:**
Financial advisor AI analyzing retirement plans:
- Completes 97/100 analyses successfully
- Convergence ratio: 1.18 (avg: 5.9 steps, min: 5 steps)
- Never repeats calculations
- Self-corrects in first retry when wrong

![Technically Speaking](/assets/technically-cartoon.png)

## $100k Fix You Can Find in Week One

Working closely with the [Docplanner](https://www.docplanner.com/) team, I led the implementation of this framework for their high-stakes healthcare AI that automates clinical documentation from doctor-patient conversations. Here, inaccuracy isn't just inconvenient—it's dangerous.

We built a two-tier evaluation system:

1. **Automated scalable evaluation**: Programmatic checks applied to thousands of summaries, catching:
   - Structural inconsistencies
   - Quality issues (contradictions, redundancy)
   - Language inconsistencies
   - Irrelevant content

2. **Expert quality evaluation**: Comprehensive assessment focused on critical metrics:
   - **Recall**: Capture of relevant medical facts
   - **Veracity**: Truthfulness without hallucinations
   - **Drug recall**: Medication accuracy


Karol Traczykowski, VP of AI at Docplanner, puts it bluntly: _Without systematic evaluation, we wouldn't be able to deliberately, precisely improve recall and accuracy. It allows us to deliver real value to doctors and help them save even more time._

The impact was clear and immediate. Issues that would have taken months to identify through user feedback were caught in the first week of evaluation, preventing potential damage and accelerating time to market.

## Implementation Timeline

Most teams fear evaluation will slow them down. The opposite is true—it accelerates meaningful progress by preventing costly detours:

| Timeline | Achievement |
|----------|-------------|
| **Week 1** | Initial test set creation and basic metric implementation |
| **Weeks 2-3** | First round of comprehensive evaluation and issue identification |
| **Week 4** | Implementation of fixes for critical issues |
| **Months 2-3** | Refinement of evaluation process and development of automated pipelines |
| **Ongoing** | Continuous monitoring and expansion of test coverage |

Every client who implemented this framework saw quantifiable improvements within four weeks—with the full system established by the end of the third month. You'll only need 3-5 hours a week from someone on your team to keep this running, but it'll constantly shield you from nasty surprises.


![Greg Brockman on Evals](/assets/greg-brockman-evals.png)

## Simple Evals You Can Start Today

You don't need a massive evaluation infrastructure to see immediate benefits. Here are three approaches you can implement immediately:

### 1. Create a Basic Retrieval Test Set

- Manually curate 50-100 query-document pairs representing typical user needs
- Use an LLM to generate synthetic variations of these queries to increase coverage
- Implement basic recall and precision metrics to identify weak spots

### 2. Implement Lightweight Generation Checks

- Define 5-10 basic criteria that matter most for your use case
- Use a simple LLM-assisted check to score outputs against these criteria
- Track scores over time to identify regressions or improvements

### 3. Use Synthetic Edge Cases

- Generate deliberately challenging queries that probe edge cases
- Include "hard negatives"—inputs designed to confuse your retrieval system
- Create variations in phrasing to test consistency of responses

![Lunch Choices](/assets/lunch-choices-cartoon.png)

## Your Competitive Edge

The cost of AI failure far exceeds the investment in prevention. Companies that skip evaluation aren't being agile—they're accumulating technical debt that will eventually come due, often at the worst possible moment.

Take these four steps today:

1. **Audit your current evaluation practices**: Document what you're already doing and identify gaps
2. **Create your first test set**: Start with just 50 examples covering your most critical use cases
3. **Implement one basic metric**: Even a simple precision/recall calculation can provide valuable insights
4. **Trace your system's behavior**: Use tools like [Langfuse](https://langfuse.com/), [Braintrust](https://www.braintrust.dev/) or [Phoenix](https://phoenix.arize.com/) to track your system's behavior over time

When implemented correctly, robust evaluation becomes your competitive advantage. Companies that master evaluation can innovate faster, deploy with greater confidence, and build deeper customer trust, while competitors are busy firefighting. They know exactly what works, what doesn't, and why - and where to invest to keep their advantage.

I help companies build eval systems that spot problems before they explode. If you're ready to make your AI trustworthy at scale, [book a call here](https://calendly.com/przadka/30min).

---

Discuss this post on [LinkedIn](https://www.linkedin.com/pulse/real-moat-isnt-your-agent-michal-przadka-qefve) or [X](https://x.com/przadka/status/1911751264678916320).