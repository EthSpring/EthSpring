import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HoverBox from '../components/HoverBox/HoverBox';
import styles from './styles.module.css';

const features = [
  {
    title: 'Crypto Philosophy',
    emoji: '🧠',
    description: (
      <>
        Why we want decentralized systems, blockchain governance, and more.
      </>
    ),
  },
  {
    title: 'Peer Protocols',
    emoji: '📡',
    description: (
      <>
        Readings on traditional peer protocols, blockchains, and related quests.
      </>
    ),
  },
  {
    title: 'Protocol Theory',
    emoji: '📜',
    description: (
      <>
        The math and theory behind consensus protocols, distributed systems, and blockchains.
      </>
    ),
  },
  {
    title: 'Development',
    emoji: '👩‍💻',
    description: (
      <>
        How to build decentralized apps (dapps) on the Ethereum blockchain.
      </>
    ),
  },
  {
    title: 'Applications',
    emoji: '🚀',
    description: (
      <>
        Learn about the hottest ETH applications, including NFTs, ERC20, and decentralized finance.
      </>
    ),
  },
  {
    title: 'Zero Knowledge Proofs',
    emoji: '❓',
    description: (
      <>
        The stuff that powers Zcash, tornado.cash, and Dark Forest!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundImage: `url('img/hero.png')`}}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <h1 style={{padding: '0 6rem', fontSize: '3rem'}}> Tracks. </h1>
            <div className={styles.featuresContainer}>
              <div className={styles.featuresRow}>
                {features.map((props, idx) => (
                  <HoverBox key={idx} style={{flex: '0 0 25%'}} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
