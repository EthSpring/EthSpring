import React from 'react';
import styles from './NewsletterSignup.module.css';

export default function HoverBox() {
  return  (
    <div className={styles.NewsletterSignupBlock}>
      <div className={`container`}>
        <div className="row">
          <div className="col col--6">
            <div>
              <h2 style={{ marginTop: 0 }}>✉️ Join the Newsletter!</h2>
              <p>We'll periodically send out additional resources, recordings of talks, and even invitations to apply to learning cohorts we host in the future.
              </p>
            </div>
          </div>
          <div className="col col--6">
            <form action="https://tinyletter.com/ethspring" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/ethspring', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
              <div className={styles.NewsletterSignupInputContainer}>
                <input type="text" name="email" className={styles.NewsletterSignupInput} placeholder="Email Address"></input>
              </div>
              <button class="button button--primary button--block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};