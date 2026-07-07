import React from 'react';
import Layout from '@theme/Layout';
import ProjectCard from '@site/src/components/ProjectCard';
import styles from './projects.module.css';

const PROJECTS = [
  {
    badge: 'Module 01 · Foundations',
    title: 'Session 1 — LLM Basics',
    text: 'Code from the first live session. Covers LLM API calls, token inspection, embeddings, and prompt experiments.',
    tags: ['Python', 'OpenAI API', 'Embeddings'],
    buttonLabel: 'View on GitHub →',
    href: '#',
    disabled: false,
  },
  {
    badge: 'Module 02 · Coming Soon',
    title: 'Prompt Engineering Lab',
    text: 'Hands-on prompt engineering examples — zero-shot, few-shot, chain-of-thought, and structured outputs.',
    tags: ['Python', 'Prompting', 'LangChain'],
    buttonLabel: 'Coming Soon',
    href: '#',
    disabled: true,
  },
];

export default function Projects(): JSX.Element {
  return (
    <Layout
      title="Projects"
      description="Real AI Engineering projects built during ITAnna sessions — study the code, fork it, build on it."
    >
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className="eyebrow">
          <div className="eyebrow-line" />
          <span className="eyebrow-text">Open Source</span>
        </div>
        <h1 className={styles.heroTitle}>Projects</h1>
        <p className={styles.heroSub}>
          Real AI Engineering projects built during ITAnna sessions — study the code, fork it, build on it.
        </p>
      </section>

      {/* ── PROJECT GRID ── */}
      <div className={styles.grid}>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Layout>
  );
}
