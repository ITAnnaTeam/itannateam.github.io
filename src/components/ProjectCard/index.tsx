import React from 'react';
import styles from './styles.module.css';

interface ProjectCardProps {
  badge: string;
  title: string;
  text: string;
  tags: string[];
  buttonLabel: string;
  href: string;
  disabled?: boolean;
}

export default function ProjectCard({
  badge,
  title,
  text,
  tags,
  buttonLabel,
  href,
  disabled = false,
}: ProjectCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.badge}>{badge}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <a
        href={disabled ? undefined : href}
        target={disabled ? undefined : '_blank'}
        rel="noopener noreferrer"
        className={`${styles.btn} ${disabled ? styles.btnDisabled : ''}`}
        aria-disabled={disabled}
      >
        {buttonLabel}
      </a>
    </div>
  );
}
