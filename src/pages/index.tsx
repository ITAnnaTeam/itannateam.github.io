import React from 'react';
import Layout from '@theme/Layout';
import ModuleCard from '@site/src/components/ModuleCard';
import CommunityCard from '@site/src/components/CommunityCard';
import styles from './index.module.css';

const MODULES = [
  {
    moduleNum: '01',
    badge: 'Module 01 · Starting Soon',
    isLive: true,
    title: 'Foundations\n(No ML Required)',
    topics: [
      { num: 1, text: 'AI Engineering vs. ML Engineering vs. Data Science — clearing up the confusion' },
      { num: 2, text: 'How LLMs actually work — tokens, next-token prediction, training vs. inference (no math)' },
      { num: 3, text: 'Embeddings explained simply — what a vector representation is and why it matters' },
      { num: 4, text: 'Context windows, temperature, and other inference-time knobs' },
    ],
  },
  {
    moduleNum: '02',
    badge: 'Module 02',
    title: 'Talking to Models',
    topics: [
      { num: 5,  text: 'Calling an LLM API for the first time — your first "Hello World"' },
      { num: 6,  text: 'Prompt engineering fundamentals — zero-shot, few-shot, chain-of-thought' },
      { num: 7,  text: 'Structured outputs and function calling / tool use' },
      { num: 8,  text: 'System prompts vs. user prompts and message roles' },
    ],
  },
  {
    moduleNum: '03',
    badge: 'Module 03',
    title: 'Giving LLMs Knowledge & Memory',
    topics: [
      { num: 9,  text: 'Why LLMs hallucinate and the limits of pure prompting' },
      { num: 10, text: 'RAG from scratch — the core idea before any framework' },
      { num: 11, text: 'Vector databases — what they are and when you need one (Chroma, Pinecone, etc.)' },
      { num: 12, text: 'Chunking strategies and retrieval quality' },
    ],
  },
  {
    moduleNum: '04',
    badge: 'Module 04',
    title: 'Building Real Applications',
    topics: [
      { num: 13, text: 'Agents — what makes something "agentic" vs. a simple chatbot' },
      { num: 14, text: 'Tool use and function calling in practice' },
      { num: 15, text: 'Frameworks overview — LangChain, LangGraph, LlamaIndex (when to use each)' },
      { num: 16, text: 'Multi-step workflows and orchestration' },
    ],
  },
  {
    moduleNum: '05',
    badge: 'Module 05',
    title: 'Making It Production-Ready',
    topics: [
      { num: 17, text: 'Evaluation — how do you know if your AI app is actually good?' },
      { num: 18, text: 'Observability and tracing — logging what the model actually did' },
      { num: 19, text: 'Cost and latency optimization' },
      { num: 20, text: 'Guardrails, safety, and handling failure modes' },
      { num: 21, text: 'Deployment basics — from notebook to a real app' },
    ],
  },
  {
    moduleNum: '06',
    badge: 'Module 06',
    isOptional: true,
    title: 'Where ML Knowledge Helps',
    topics: [
      { num: 22, text: 'Fine-tuning vs. RAG vs. prompting — when each approach makes sense' },
      { num: 23, text: 'A gentle intro to ML concepts AI engineers actually need' },
    ],
  },
];

const YouTubeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"
      fill="#FF0000"
    />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FFFFFF" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Home(): JSX.Element {
  return (
    <Layout title="AI Engineering for Software Engineers" description="No prior ML experience needed. Six modules, 23 topics, real production applications.">

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className="eyebrow">
          <div className="eyebrow-line" />
          <span className="eyebrow-text">Free Live Sessions · AI Engineering</span>
        </div>

        <h1 className={styles.heroTitle}>
          AI Engineering<br />
          <em>for Software Engineers</em>
        </h1>

        <p className={styles.heroSub}>
          No prior ML experience needed. Six modules, 23 topics, real production applications.
        </p>

        <div className={styles.pills}>
          <span className="pill pill--highlight">💻 Free Live Zoom</span>
          <span className="pill">6 Modules</span>
          <span className="pill">23 Topics</span>
        </div>

        <div className={styles.heroCta}>
          <a
            className="cta-btn"
            href="https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Join the WhatsApp Community →
          </a>
        </div>
      </section>

      {/* ── CURRICULUM SECTION HEADER ── */}
      <div className={styles.sectionHeader}>
        <hr className={styles.sectionHr} />
        <span className={styles.sectionLabel}>Curriculum</span>
        <hr className={styles.sectionHr} />
      </div>

      {/* ── MODULE GRID ── */}
      <div className={`${styles.moduleGrid} module-grid`}>
        {MODULES.map((m) => (
          <ModuleCard key={m.moduleNum} {...m} />
        ))}
      </div>

      {/* ── COMMUNITY LINKS ── */}
      <section className={styles.communitySection}>
        <div className={`${styles.communityGrid} community-grid`}>
          <CommunityCard
            icon={<YouTubeIcon />}
            label="Watch on YouTube"
            name="@ITAnnaTeam"
            text="Free session recordings, concept walkthroughs, and AI Engineering tutorials."
            href="https://www.youtube.com/@ITAnnaTeam"
            buttonLabel="Visit Channel →"
            buttonFilled={false}
          />
          <CommunityCard
            icon={<WhatsAppIcon />}
            label="Join the Community"
            name="ITAnna — Q&A & Feedback"
            text="Get session Zoom links, ask questions, share feedback, and discuss with fellow learners."
            href="https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB"
            buttonLabel="Join Now →"
            buttonFilled={true}
          />
        </div>
      </section>

      {/* ── FOOTER CTA STRIP ── */}
      <div className={styles.ctaStrip}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaLabel}>Stay Updated</div>
          <div className={styles.ctaHeading}>
            Join the ITAnna WhatsApp Community for<br />session links, dates &amp; discussions
          </div>
          <a
            className="cta-btn"
            href="https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Community →
          </a>
        </div>
      </div>

    </Layout>
  );
}

