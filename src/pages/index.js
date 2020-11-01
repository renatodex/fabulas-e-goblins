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

const socials = [
  {
    title: 'Junte-se a nós no Instagram!',
    imageUrl: 'img/socials/instagram.png',
    description: (
      <div>
        Nossa página no Instagram está sempre trazendo novas atualizações do sistema e outras novidades.
        É lá que postamos nossas últimas atualizações!
      </div>
    ),
    cta_text: 'Seguir',
    cta_link: 'https://www.instagram.com/tendadogoblin',
  },
  {
    title: 'Canal do Discord',
    imageUrl: 'img/socials/discord.png',
    description: (
      <div>
        Criamos um canal especificamente para discussões sobre o sistema.
        É lá que organizaremos mesas de teste e outros eventos!
      </div>
    ),
    cta_text: 'Juntar-se ao Canal',
    cta_link: 'https://discord.gg/PRMXj4j',
  },
  {
    title: 'Colabore no Github',
    imageUrl: 'img/socials/github.png',
    description: (
      <div>
        Este site é um projeto de código aberto que pode ser evoluido colaborativamente
        através da plataforma Github.
        Quer ajudar a incrementar o projeto, ou traduzi-lo para outros idiomas?
        O Github é o local perfeito!
      </div>
    ),
    cta_text: 'Colaborar',
    cta_link: 'https://github.com/renatodex/fabulas-e-goblins',
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

function Social({imageUrl, title, description, cta_text, cta_link}) {
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

        <h1 style={{textAlign: 'center', width: '80%', margin: '0 auto'}}>
          Fabulas & Goblins nas redes
        </h1>

        {socials && socials.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {socials.map((props, idx) => (
                  <Social key={idx} {...props} />
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
