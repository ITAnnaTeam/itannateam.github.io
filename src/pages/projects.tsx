import React from 'react';
import Layout from '@theme/Layout';
import ProjectCard from '@site/src/components/ProjectCard';
import styles from './projects.module.css';

const PROJECTS = [
  {
    badge: 'Module 01 · Foundations',
    title: 'Session 1 — PatternMachine',
    text: `Can a neural network discover a hidden rule that humans can't easily guess? 🧠

We build "PatternMachine" — a minimal neural network (just 2 parameters) to demystify how models learn mathematical rules from data, watching weights converge to the exact ground truth formula in real-time.`,
    tags: ['Python', 'PyTorch', 'Streamlit', 'NumPy', 'Pandas', 'Matplotlib'],
    buttonLabel: 'View on GitHub →',
    href: 'https://github.com/ITAnnaTeam/patternmachine.git',
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
  {
    badge: 'Module 03 · Coming Soon',
    title: 'RAG & Vector Databases',
    text: 'Build Retrieval-Augmented Generation (RAG) systems from scratch, implement vector databases, and perform semantic search.',
    tags: ['Python', 'RAG', 'Vector DB', 'Semantic Search'],
    buttonLabel: 'Coming Soon',
    href: '#',
    disabled: true,
  },
  {
    badge: 'Module 04 · Coming Soon',
    title: 'AI Visibility Engine',
    text: 'Build an orchestration system using LangGraph to visualize agent decision paths, control loops, and multi-step workflows.',
    tags: ['Python', 'LangGraph', 'Agents', 'Workflows'],
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
