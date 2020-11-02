import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.scss'

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Um Sistema de RPG onde Goblins dominam o mundo e humanos não existem.<head />">
      <main>
          <div className="container">
            <div className={styles.discordCall}>
              <p>Junte-se ao discord através deste link:</p>
              <Link href="https://discord.gg/PRMXj4j">
                https://discord.gg/PRMXj4j
              </Link>
            </div>
          </div>
      </main>
    </Layout>
  );
}

export default Home;
