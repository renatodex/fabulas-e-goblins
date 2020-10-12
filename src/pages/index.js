import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Um mundo populado por Goblins',
    imageUrl: 'img/feature1.png',
    description: (
      <>
        Em sistemas tradicionais, Goblins são vistos como monstros horrendos.
        No F&G, não existem humanos, e os Goblins são conhecidos por serem
        pioneiros da exploração.
      </>
    ),
  },
  {
    title: 'Simples como deve ser',
    imageUrl: 'img/feature2.png',
    description: (
      <>
        Um sistema simples e fácil de digerir, agradando tanto Iniciantes como
        jogadores Avançados. Baseado em Sistemas OSR, é projetado para que a sua diversão
        esteja sempre em primeiro lugar.
      </>
    ),
  },
  {
    title: '100% livre e gratuito',
    imageUrl: 'img/feature3.png',
    description: (
      <>
        Acreditamos que o RPG precisa ser acessível, por isso, estamos cultivando uma
        comunidade para melhorar o sistema colaborativamente.
        O Fábulas & Goblins é 100% gratuito, e sempre será.
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

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Um Sistema de RPG onde Goblins dominam o mundo e humanos não existem.<head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Ler o Livro
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
