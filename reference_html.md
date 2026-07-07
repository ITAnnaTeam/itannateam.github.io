<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ITAnna — AI Engineering Sessions</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --dark: #05175B;
      --blue: #0BB7F1;
      --white: #FFFFFF;
      --dark-card: #081f7a;
      --blue-faint: rgba(11, 183, 241, 0.10);
      --blue-border: rgba(11, 183, 241, 0.25);
      --white-dim: rgba(255,255,255,0.65);
      --white-faint: rgba(255,255,255,0.08);
    }

    body {
      background: var(--dark);
      color: var(--white);
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
    }

    /* ── HEADER ── */
    header {
      max-width: 1120px;
      margin: 0 auto;
      padding: 36px 40px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
    }

    .logo {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 22px;
      font-weight: 700;
      color: var(--white);
      letter-spacing: -0.02em;
    }

    .logo span { color: var(--blue); }

    .yt-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--white-faint);
      border: 1px solid var(--blue-border);
      color: var(--blue);
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 100px;
      text-decoration: none;
      letter-spacing: 0.02em;
      transition: background 0.2s;
    }
    .yt-link:hover { background: var(--blue-faint); }

    /* ── HERO ── */
    .hero {
      max-width: 1120px;
      margin: 0 auto;
      padding: 56px 40px 48px;
    }

    .eyebrow {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 22px;
    }

    .eyebrow-line {
      width: 36px;
      height: 2px;
      background: var(--blue);
      border-radius: 2px;
    }

    .eyebrow-text {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--blue);
    }

    .hero-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(40px, 6.5vw, 72px);
      font-weight: 700;
      line-height: 1.04;
      letter-spacing: -0.02em;
      margin-bottom: 20px;
    }

    .hero-title em {
      font-style: normal;
      color: var(--blue);
    }

    .hero-sub {
      font-size: 17px;
      font-weight: 300;
      color: var(--white-dim);
      line-height: 1.65;
      max-width: 520px;
      margin-bottom: 36px;
    }

    .pills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--blue-faint);
      border: 1px solid var(--blue-border);
      color: var(--blue);
      font-size: 13px;
      font-weight: 500;
      padding: 7px 16px;
      border-radius: 100px;
      letter-spacing: 0.02em;
    }

    .pill.highlight {
      background: var(--blue);
      border-color: var(--blue);
      color: var(--dark);
      font-weight: 600;
    }

    /* ── SECTION LABEL ── */
    .section-header {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 40px 24px;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .section-header hr {
      flex: 1;
      border: none;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .section-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.35);
      white-space: nowrap;
    }

    /* ── MODULE GRID ── */
    .grid {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 40px 80px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    /* ── MODULE CARD ── */
    .card {
      background: var(--white);
      border-radius: 20px;
      padding: 36px 36px 32px;
      position: relative;
      overflow: hidden;
      color: var(--dark);
    }

    .card-ghost {
      position: absolute;
      top: -12px;
      right: 8px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 130px;
      font-weight: 700;
      color: var(--dark);
      opacity: 0.055;
      line-height: 1;
      pointer-events: none;
      user-select: none;
      letter-spacing: -0.04em;
    }

    .card-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(11, 183, 241, 0.13);
      color: #0088bb;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 4px 12px;
      border-radius: 100px;
      margin-bottom: 16px;
    }

    .card-badge.live {
      background: rgba(5, 23, 91, 0.08);
      color: var(--dark);
    }

    .live-dot {
      width: 7px;
      height: 7px;
      background: var(--blue);
      border-radius: 50%;
      animation: pulse 1.8s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.7); }
    }

    .card-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 21px;
      font-weight: 700;
      color: var(--dark);
      line-height: 1.25;
      margin-bottom: 22px;
      letter-spacing: -0.01em;
    }

    .optional-tag {
      display: inline-block;
      background: rgba(5,23,91,0.07);
      color: rgba(5,23,91,0.45);
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 4px;
      vertical-align: middle;
      margin-left: 8px;
      position: relative;
      top: -2px;
    }

    /* ── TOPIC LIST ── */
    .topics {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 11px;
    }

    .topic {
      display: flex;
      align-items: flex-start;
      gap: 11px;
    }

    .topic-num {
      width: 22px;
      height: 22px;
      min-width: 22px;
      background: var(--blue);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1px;
    }

    .topic-num span {
      font-size: 10px;
      font-weight: 700;
      color: var(--dark);
      line-height: 1;
    }

    .topic-text {
      font-size: 14px;
      color: rgba(5, 23, 91, 0.78);
      line-height: 1.55;
      font-weight: 400;
    }

    /* ── CTA FOOTER ── */
    .cta-strip {
      border-top: 1px solid rgba(11, 183, 241, 0.18);
      background: rgba(11, 183, 241, 0.05);
      padding: 52px 40px;
      text-align: center;
    }

    .cta-inner {
      max-width: 560px;
      margin: 0 auto;
    }

    .cta-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--blue);
      margin-bottom: 14px;
    }

    .cta-heading {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 26px;
      font-weight: 600;
      color: var(--white);
      line-height: 1.3;
      margin-bottom: 26px;
      letter-spacing: -0.01em;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--blue);
      color: var(--dark);
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 15px;
      padding: 15px 36px;
      border-radius: 100px;
      text-decoration: none;
      letter-spacing: 0.02em;
      transition: opacity 0.2s, transform 0.15s;
    }

    .cta-btn:hover { opacity: 0.88; transform: translateY(-1px); }

    /* ── RESPONSIVE ── */
    @media (max-width: 720px) {
      header, .hero, .section-header, .grid { padding-left: 20px; padding-right: 20px; }
      .grid { grid-template-columns: 1fr; }
      .hero-title { font-size: 38px; }
      .card { padding: 28px 24px; }
      .card-ghost { font-size: 100px; }
      .cta-strip { padding: 44px 20px; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header>
    <div class="logo">IT<span>Anna</span></div>
    <a class="yt-link" href="https://www.youtube.com/@ITAnnaTeam" target="_blank">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>
      @ITAnnaTeam
    </a>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="eyebrow">
      <div class="eyebrow-line"></div>
      <div class="eyebrow-text">Free Live Sessions</div>
    </div>
    <h1 class="hero-title">AI Engineering<br><em>Session Curriculum</em></h1>
    <p class="hero-sub">Built for software engineers — no prior ML experience needed. Six modules, 23 topics, real applications.</p>
    <div class="pills">
      <span class="pill highlight">&#128197; First Session: 4th July &nbsp;&bull;&nbsp; 9 AM IST</span>
      <span class="pill">&#128187; Free Live Zoom</span>
      <span class="pill">6 Modules</span>
      <span class="pill">23 Topics</span>
    </div>
  </section>

  <!-- SECTION DIVIDER -->
  <div class="section-header">
    <hr>
    <span class="section-label">Curriculum</span>
    <hr>
  </div>

  <!-- MODULE GRID -->
  <div class="grid">

    <!-- MODULE 1 -->
    <div class="card">
      <div class="card-ghost">01</div>
      <div class="card-badge">
        <div class="live-dot"></div>
        Module 01 &nbsp;·&nbsp; Starting 4th July
      </div>
      <h2 class="card-title">Foundations<br>(No ML Required)</h2>
      <ul class="topics">
        <li class="topic">
          <div class="topic-num"><span>1</span></div>
          <span class="topic-text">AI Engineering vs. ML Engineering vs. Data Science — clearing up the confusion</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>2</span></div>
          <span class="topic-text">How LLMs actually work — tokens, next-token prediction, training vs. inference (no math)</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>3</span></div>
          <span class="topic-text">Embeddings explained simply — what a vector representation is and why it matters</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>4</span></div>
          <span class="topic-text">Context windows, temperature, and other inference-time knobs</span>
        </li>
      </ul>
    </div>

    <!-- MODULE 2 -->
    <div class="card">
      <div class="card-ghost">02</div>
      <div class="card-badge">Module 02</div>
      <h2 class="card-title">Talking to Models</h2>
      <ul class="topics">
        <li class="topic">
          <div class="topic-num"><span>5</span></div>
          <span class="topic-text">Calling an LLM API for the first time — your first "Hello World"</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>6</span></div>
          <span class="topic-text">Prompt engineering fundamentals — zero-shot, few-shot, chain-of-thought</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>7</span></div>
          <span class="topic-text">Structured outputs and function calling / tool use</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>8</span></div>
          <span class="topic-text">System prompts vs. user prompts and message roles</span>
        </li>
      </ul>
    </div>

    <!-- MODULE 3 -->
    <div class="card">
      <div class="card-ghost">03</div>
      <div class="card-badge">Module 03</div>
      <h2 class="card-title">Giving LLMs Knowledge &amp; Memory</h2>
      <ul class="topics">
        <li class="topic">
          <div class="topic-num"><span>9</span></div>
          <span class="topic-text">Why LLMs hallucinate and the limits of pure prompting</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>10</span></div>
          <span class="topic-text">RAG (Retrieval-Augmented Generation) from scratch — the core idea before any framework</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>11</span></div>
          <span class="topic-text">Vector databases — what they are and when you need one (Chroma, Pinecone, etc.)</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>12</span></div>
          <span class="topic-text">Chunking strategies and retrieval quality</span>
        </li>
      </ul>
    </div>

    <!-- MODULE 4 -->
    <div class="card">
      <div class="card-ghost">04</div>
      <div class="card-badge">Module 04</div>
      <h2 class="card-title">Building Real Applications</h2>
      <ul class="topics">
        <li class="topic">
          <div class="topic-num"><span>13</span></div>
          <span class="topic-text">Agents — what makes something "agentic" vs. a simple chatbot</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>14</span></div>
          <span class="topic-text">Tool use and function calling in practice</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>15</span></div>
          <span class="topic-text">Frameworks overview — LangChain, LangGraph, LlamaIndex (when to use each)</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>16</span></div>
          <span class="topic-text">Multi-step workflows and orchestration</span>
        </li>
      </ul>
    </div>

    <!-- MODULE 5 -->
    <div class="card">
      <div class="card-ghost">05</div>
      <div class="card-badge">Module 05</div>
      <h2 class="card-title">Making It Production-Ready</h2>
      <ul class="topics">
        <li class="topic">
          <div class="topic-num"><span>17</span></div>
          <span class="topic-text">Evaluation — how do you know if your AI app is actually good?</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>18</span></div>
          <span class="topic-text">Observability and tracing — logging what the model actually did</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>19</span></div>
          <span class="topic-text">Cost and latency optimization</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>20</span></div>
          <span class="topic-text">Guardrails, safety, and handling failure modes</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>21</span></div>
          <span class="topic-text">Deployment basics — from notebook to a real app</span>
        </li>
      </ul>
    </div>

    <!-- MODULE 6 -->
    <div class="card">
      <div class="card-ghost">06</div>
      <div class="card-badge">Module 06</div>
      <h2 class="card-title">Where ML Knowledge Helps <span class="optional-tag">Optional</span></h2>
      <ul class="topics">
        <li class="topic">
          <div class="topic-num"><span>22</span></div>
          <span class="topic-text">Fine-tuning vs. RAG vs. prompting — when each approach makes sense</span>
        </li>
        <li class="topic">
          <div class="topic-num"><span>23</span></div>
          <span class="topic-text">A gentle intro to ML concepts AI engineers actually need — no full ML course required</span>
        </li>
      </ul>
    </div>

  </div>

  <!-- CTA FOOTER -->
  <div class="cta-strip">
    <div class="cta-inner">
      <div class="cta-label">Stay Updated</div>
      <div class="cta-heading">Join the ITAnna WhatsApp community for session links, dates &amp; discussions</div>
      <a class="cta-btn" href="https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB" target="_blank">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        Join the Community
      </a>
    </div>
  </div>

</body>
</html>