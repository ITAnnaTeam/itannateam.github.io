---
title: "Session 1 Recap — AI Engineering Foundations"
authors:
  name: ITAnna Team
  url: https://www.youtube.com/@ITAnnaTeam
tags: [AI Engineering, LLMs, Foundations, Session Recap]
---

We ran our first live session on 4th July covering Module 1: Foundations. Here's a quick recap of what we discussed and why it matters for software engineers making the move into AI Engineering.

{/* truncate */}

## What we covered

### 1. AI Engineering vs. ML Engineering vs. Data Science

One of the biggest sources of confusion for software engineers entering the AI space is the difference between these three roles. We broke it down clearly:

- **Data Scientists** focus on analysis, statistics, and extracting insights from data.
- **ML Engineers** build and train models from scratch — they need deep knowledge of mathematics and model architectures.
- **AI Engineers** build *applications* on top of existing models. You don't need to train a model; you need to know how to use one effectively.

If you're a software engineer who wants to ship AI-powered products, you're an AI Engineer.

### 2. How LLMs actually work — no math required

We covered the intuition behind large language models:

- Text is broken into **tokens** (roughly sub-word pieces).
- An LLM predicts the **next token** given all previous tokens — that's the entire core mechanic.
- **Training** is what happened before you got the model. **Inference** is what happens when you call the API.

Understanding this distinction helps you reason about why models behave the way they do — and how to get better results from them.

### 3. Embeddings explained simply

Embeddings are a way to represent text as a list of numbers (a vector) such that **similar meanings end up close together** in that number space.

This is the foundation for:
- Semantic search
- Retrieval-Augmented Generation (RAG)
- Recommendation systems

You don't need to understand the math — you need to understand *what embeddings are for*.

### 4. Context windows, temperature, and other knobs

Every LLM call has configuration options:

- **Context window** — how much text the model can "see" at once (input + output combined).
- **Temperature** — controls randomness. `0` = deterministic/focused, `1+` = creative/varied.
- **Max tokens** — caps the output length.
- **Top-p / Top-k** — alternative sampling strategies.

As an AI Engineer, you'll be tuning these regularly.

## What's next

Session 2 will cover **Module 2: Talking to Models** — we'll write actual code to call an LLM API, explore prompt engineering techniques, and look at structured outputs and function calling.

Join the [WhatsApp community](https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB) to get the Zoom link for the next session.
