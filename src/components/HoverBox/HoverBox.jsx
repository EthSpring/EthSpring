import React from 'react';
import styles from './HoverBox.module.css';

export default function HoverBox({title, description, emoji, url, style}) {
  return  (
    <a className={styles.HoverBox} style={style} href={url}>
      <div className={styles.HoverBoxEmoji}>
        {emoji || '🍆'}
      </div>
      <div className={styles.HoverBoxTitle}>
        {title}
      </div>
      <p className={styles.HoverBoxDescription}>{description}</p>
    </a>
  )
};