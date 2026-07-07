import React from 'react';
import styles from './styles.module.css';

interface CommunityCardProps {
  icon: React.ReactNode;
  label: string;
  name: string;
  text: string;
  href: string;
  buttonLabel: string;
  buttonFilled?: boolean;
}

export default function CommunityCard({
  icon,
  label,
  name,
  text,
  href,
  buttonLabel,
  buttonFilled = false,
}: CommunityCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
      <div className={styles.name}>{name}</div>
      <p className={styles.text}>{text}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${buttonFilled ? styles.btnFilled : styles.btnOutlined}`}
      >
        {buttonLabel}
      </a>
    </div>
  );
}
