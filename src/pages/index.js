import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'Um mundo populado por Goblins',
    imageUrl: 'img/feature1.png',
    description: (
      <div>
        Em sistemas tradicionais, Goblins são vistos como monstros horrendos.
        No F&G, não existem humanos, e os Goblins são conhecidos por serem
        pioneiros da exploração.
      </div>
    ),
    cta_text: 'Saiba mais',
    cta_link: '/docs',
  },
  {
    title: 'Simples como deve ser',
    imageUrl: 'img/feature2.png',
    description: (
      <div>
        Um sistema simples e fácil de digerir, agradando tanto Iniciantes como
        jogadores Avançados. Baseado em Sistemas OSR, é projetado para que a sua diversão
        esteja sempre em primeiro lugar.
      </div>
    ),
    cta_text: 'Ler o Livro',
    cta_link: '/docs',
  },
  {
    title: '100% livre e gratuito',
    imageUrl: 'img/feature3.png',
    description: (
      <div>
        Acreditamos que o RPG precisa ser acessível, por isso, estamos cultivando uma
        comunidade para melhorar o sistema colaborativamente.
        O Fábulas & Goblins é 100% gratuito, e sempre será.
      </div>
    ),
    cta_text: 'Ver Licença',
    cta_link: 'https://creativecommons.org/licenses/by-nc/4.0',
  },
];

function Feature({imageUrl, title, description, cta_text, cta_link}) {
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

      <Link
        className={clsx(
          'button button--outline button--success button--md',
          styles.ctaButton,
        )}
        style={{marginBottom: '40px'}}
        to={useBaseUrl(cta_link)}>
        {cta_text}
      </Link>
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
          <Link
            to={'/docs'}>
            <img width={400} src={useBaseUrl('img/logo.png')}></img>
          </Link>

          <div class="lower">
            <div className={styles.buttons}>
            </div>
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
