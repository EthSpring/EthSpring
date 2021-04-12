import React from 'react';
import styles from './HoverBox.module.css';

export default function HoverBox({title, description, emoji, style}) {
  return  (
    <div className={styles.HoverBox} style={style}>
      <div className={styles.HoverBoxEmoji}>
        {emoji || '🍆'}
      </div>
      <div className={styles.HoverBoxTitle}>
        {title}
      </div>
      <p className={styles.HoverBoxDescription}>{description}</p>
    </div>
  )
};