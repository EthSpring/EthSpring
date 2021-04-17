import React from "react";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Box}>
          <div style={{fontSize: '3rem'}}>📖</div>
          <h2>
            <span>Intro to ETH</span>
          </h2>
          <div>
            <div>
              <button class="button button--primary button--lg">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.BottomSpacing}></div>
    </>
  );
}
