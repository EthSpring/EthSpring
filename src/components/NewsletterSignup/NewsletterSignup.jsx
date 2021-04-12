import React from 'react';
import styles from './NewsletterSignup.module.css';

export default function HoverBox() {
  return  (
    <div className={styles.NewsletterSignupBlock}>
      <div className={`container`}>
        <div className="row">
          <div className="col col--6">
            <div>
              <h2>Join the Newsletter!</h2>
              <p>We'll periodically send out additional resources, recordings of talks, and even invitations to apply to learning cohorts we host in the future.
              </p>
            </div>
          </div>
          <div className="col col--6">
            <div>
              <div className={styles.NewsletterSignupInputContainer}>
                <input type="text" className={styles.NewsletterSignupInput} placeholder="Name"></input>
              </div>
              <div className={styles.NewsletterSignupInputContainer}>
                <input type="text" className={styles.NewsletterSignupInput} placeholder="Email Address"></input>
              </div>
              <button class="button button--primary button--block">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};