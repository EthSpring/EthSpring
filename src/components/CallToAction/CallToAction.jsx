import Link from "@docusaurus/Link";
import React from "react";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Box}>
          <div style={{ fontSize: "3rem" }}>📖</div>
          <h2>
            <span>Intro to ETH</span>
          </h2>
          <div>
            <div>
              <Link
                className="button button--primary button--lg"
                to="/docs/introduction/introduction/1-ethereum-101"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.BottomSpacing}></div>
    </>
  );
}
