import React from 'react';
import styles from './styles.module.css';

interface Topic {
  num: number;
  text: string;
}

interface ModuleCardProps {
  moduleNum: string;
  badge: string;
  isLive?: boolean;
  isOptional?: boolean;
  title: string;
  topics: Topic[];
}

export default function ModuleCard({
  moduleNum,
  badge,
  isLive = false,
  isOptional = false,
  title,
  topics,
}: ModuleCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.ghost}>{moduleNum}</div>

      <div className={`${styles.badge} ${isLive ? styles.badgeLive : ''}`}>
        {isLive && <span className={styles.liveDot} />}
        {badge}
      </div>

      <h2 className={styles.title}>
        {title}
        {isOptional && <span className={styles.optionalTag}>Optional</span>}
      </h2>

      <ul className={styles.topics}>
        {topics.map((t) => (
          <li key={t.num} className={styles.topic}>
            <div className={styles.topicNum}>
              <span>{t.num}</span>
            </div>
            <span className={styles.topicText}>{t.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
