import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import '../../css/custom.css'

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Um Sistema de RPG onde Goblins dominam o mundo e humanos não existem.<head />">
      <main>
          <div className="p-10 border-2">
            <h1>Bestiário</h1>
          </div>
      </main>
    </Layout>
  );
}

export default Home;
