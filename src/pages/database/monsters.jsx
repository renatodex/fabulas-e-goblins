import React, { useEffect, useState } from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import '../../css/custom.css'

function EnemyCard({ enemy }) {
  return (
    <div className='border-2 p-4 rounded-xl shadow'>
      <img src={enemy.image} width="100%" />
      <h2 className='text-2xl italic text-center'>
        {enemy.name}
      </h2>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const [enemies, setEnemies] = useState([])

  useEffect(e => {
    const loadEnemies = async function () {
      const result = await fetch('/enemies.json')
      const resultJson = await result.json()
      setEnemies(resultJson)
    }

    loadEnemies()
  }, [])

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Um Sistema de RPG onde Goblins dominam o mundo e humanos não existem.<head />">
      <main className='tailwindpage'>
          <div className="p-5 border-2 md:p-10">
            <h1 className='text-5xl font-extrabold'>Bestiário</h1>

            <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 mt-7'>
              {enemies.map(enemy => (
                <EnemyCard enemy={enemy} />
              ))}
            </div>
          </div>
      </main>
    </Layout>
  )
}

export default Home;