import React, { Fragment, useEffect, useState } from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {
  GiDinosaurRex,
  GiSpikedDragonHead,
  GiDoubleDragon,
  GiHydra,
  GiSwordWound,
  GiWingfoot,
  GiMagnifyingGlass,
  GiBoltSpellCast,
  GiGlassHeart,
  GiMeshBall,
  GiMidnightClaw,
} from 'react-icons/gi'
import {
  AiOutlineCloseCircle
} from 'react-icons/ai'
import '../../css/custom.css'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

const ReadMore = ({ className, children, max = 150 }) => {
  const textChildren = children;
  const regex = /(<([^>]+)>)/ig;
  const text = textChildren.replace(regex, '');

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className={className}>
      {isReadMore
        ? (
          <Fragment>
            {text.slice(0, max)}...
          </Fragment>
         )
        : (
          <div
            dangerouslySetInnerHTML={{ __html: children }}
          />
        )
      }
      <span
        onClick={toggleReadMore}
        className="bg-aero-blue text-black rounded-xl px-2 ml-2 cursor-pointer hover:bg-black hover:text-white"
      >
        {isReadMore
          ? (
            "+ Ler mais"
          ) : (
            "- Ler menos"
          )
        }
      </span>
    </div>
  );
};

function EnemyCard({ enemy, onSelectEnemy }) {
  return (
    <div
      className='border-2 p-4 rounded-xl shadow hover:bg-green-50 cursor-pointer'
      onClick={e => onSelectEnemy(enemy)}
    >
      <img src={enemy.image} width="100%" />
      <h2 className='text-2xl italic text-center'>
        {enemy.name}
      </h2>
    </div>
  )
}

function EnemyList({ enemies, onSelectEnemy }) {
  return (
    <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
      {enemies.map(enemy => (
        <EnemyCard
          enemy={enemy} key={enemy.id}
          onSelectEnemy={onSelectEnemy}
        />
      ))}
    </div>
  )
}

function ToggleButtonWithIcon({ icon, children, onClickButton, selected = false }) {
  const buttonStyle = selected ? 'text-black bg-big-foot-feet' : 'text-black bg-gray-100'
  return (
    <button
      onClick={e => {
        onClickButton(e)
      }}
      className={`p-2 pl-4 text-left ${buttonStyle} font-semibold text-2xl rounded-lg`}
    >
      <span className='float-left mr-2 mt-1'>{icon}</span>
      {children}
    </button>
  )
}

function TierSelection({ tier, onTierChange }) {
  const tierIcons = [<GiDinosaurRex />, <GiSpikedDragonHead />, <GiDoubleDragon />, <GiHydra />]
  return (
    <div>
      <h2 className='text-3xl text-aero-blue font-bold font-serif'>
        Selecione a Classe de Desafio
      </h2>
      <div className='mt-3 grid grid-cols-2 gap-2'>
      {tierIcons.map((icon, n) => (
        <ToggleButtonWithIcon
          selected={tier == (n+1)}
          onClickButton={e => onTierChange(n+1)}
          icon={icon}
          key={n}
        >
          Tier{n+1}
        </ToggleButtonWithIcon>
      ))}
      </div>
    </div>
  )
}

function AttributeBar({ color, children, value, icon }) {
  return(
    <div
      className={`${color} relative border-x border-black border-y text-lg text-black rounded-md px-3 py-1 align-baseline font-bold`}
    >
      {/* Forcing possible color classes to be compiled by Tw JIT */}
      <span className='bg-pastel-green'/>
      <span className='bg-blizzard-blue'/>
      <span className='bg-platinum'/>
      <span className='bg-topaz'/>
      <span className='bg-rich-brilliant-lavender'/>
      <span className='bg-pale-violet'/>

      <span className='float-left mr-2 mt-1'>{icon}</span>
      {children}

      {value && (
        <div className='float-right bg-white border-x border-y border-black rounded-full p-2 w-[2.1em] h-[2.1em] text-center text-2xl absolute -right-2 top-0 -top-[0.3em]'>
          {value}
        </div>
      )}
    </div>
  )
}

function EnemyCharacteristicsByTier({ tier, attributes }) {
  return (
    <Fragment>
      <h2 className='text-3xl text-aero-blue font-bold font-serif'>
        Características (Tier {tier})
      </h2>

      <div className='mt-5'>
        <AttributeBar color={'bg-pastel-green'} value={attributes.hit_points} icon={<GiGlassHeart/>}>
          Pontos de Vida
        </AttributeBar>
      </div>

      <div className='mt-5'>
        <AttributeBar color={'bg-blizzard-blue'} value={attributes.movement} icon={<GiWingfoot/>}>
          Movimento
        </AttributeBar>
      </div>

      <div className='mt-5'>
        <AttributeBar color={'bg-platinum'} icon={<GiMagnifyingGlass/>}>
          Tipo: Madeiriço
        </AttributeBar>
      </div>
    </Fragment>
  )
}

function EnemyAttackByTier({ tier, attributes }) {
  return (
    <Fragment>
      <h2 className='text-3xl text-aero-blue font-bold font-serif'>
        Ataque (Tier {tier})
      </h2>

      <div className='mt-5'>
        <AttributeBar color={'bg-topaz'} value={attributes.attack.physical} icon={<GiSwordWound/>}>
          Ataque Físico
        </AttributeBar>
      </div>

      <div className='mt-5'>
        <AttributeBar color={'bg-rich-brilliant-lavender'} value={attributes.attack.magical} icon={<GiBoltSpellCast/>}>
          Ataque Mágico
        </AttributeBar>
      </div>
    </Fragment>
  )
}

function EnemyDefenseByTier({ tier, attributes }) {
  return (
    <Fragment>
      <h2 className='text-3xl text-aero-blue font-bold font-serif'>
        Defesa (Tier {tier})
      </h2>

      <div className='mt-5'>
        <AttributeBar color={'bg-topaz'} value={attributes.defense.physical} icon={<GiSwordWound/>}>
          Defesa Física
        </AttributeBar>
      </div>

      <div className='mt-5'>
        <AttributeBar color={'bg-rich-brilliant-lavender'} value={attributes.defense.magical} icon={<GiBoltSpellCast/>}>
          Defesa Mágica
        </AttributeBar>
      </div>
    </Fragment>
  )
}

function EnemySpellsByTier({ tier, attributes, mappedSpells }) {
  return (
    <Fragment>
      <h2 className='text-3xl text-aero-blue font-bold font-serif'>
        Poderes (Tier {tier})

        <div className='mt-5'>
          {mappedSpells.map(mappedSpell => {
            const attackAttribute =
              mappedSpell?.spell?.attack_logic == 'Físico' ? attributes?.attack?.physical : attributes?.attack?.magical

            return (
              <AttributeBar
                color={'bg-pale-violet'}
                value={mappedSpell?.attack || attackAttribute}
                icon={<GiMidnightClaw/>}
                key={mappedSpell.handle}
              >
                {mappedSpell?.spell?.name}
              </AttributeBar>
            )
          })}
        </div>
      </h2>
    </Fragment>
  )
}

function EnemyDetails({ enemy, onClose }) {
  const [tier, setTier] = useState(0)
  const [tierAttributes, setTierAttributes] = useState(enemy.tier_attributes[0])
  const [enemySpells, setEnemySpells] = useState([])
  const [enemySpellsMapped, setEnemySpellsMapped] = useState([])

  useEffect(() => {
    const loadEnemySpells = async function () {
      const result = await fetch('/enemy-spells.json')
      const resultJson = await result.json()
      setEnemySpells(resultJson)
    }

    loadEnemySpells()
  }, [])

  function changeTier(tier) {
    setTier(tier)
    setTierAttributes(enemy.tier_attributes[tier - 1])
  }

  useEffect(() => {
    setTier(1)
  }, [])

  useEffect(() => {
    setEnemySpellsMapped(
      tierAttributes.spells.map(spell => {
        const tempSpell = enemySpells.find(enemySpell =>
          enemySpell.id == spell.handle
        )
        return { ...spell, spell: tempSpell }
      })
    )
  }, [tierAttributes, enemySpells])

  return (
    <div>
      <div className='bg-gunmetal relative rounded-xl p-10 text-white font-serif'>
        <button
          className='absolute right-0 top-0 px-8 py-10 text-4xl'
          onClick={e => onClose(e)}
        >
          <AiOutlineCloseCircle />
        </button>
        <h2 className='text-3xl font-bold border-b-2 pb-3 font-serif'>
          {enemy.name}
        </h2>

        <div className='mt-7 bg-aero-blue p-4' style={{
          borderRadius: '5em',
        }}>
          <img src={enemy.image} width={'100%'} />
        </div>

        <ReadMore className="mt-6 leading-relaxed">
          {enemy.description}
        </ReadMore>

        <div className='mt-7'>
          <TierSelection
            enemy={enemy}
            tier={tier}
            onTierChange={tier => { changeTier(tier) }}
          />
        </div>

        <div className='mt-10'>
          <EnemyCharacteristicsByTier tier={tier} attributes={tierAttributes} />
        </div>

        <div className='mt-10'>
          <EnemyAttackByTier tier={tier} attributes={tierAttributes} />
        </div>

        <div className='mt-10'>
          <EnemyDefenseByTier tier={tier} attributes={tierAttributes} />
        </div>

        <div className='mt-10'>
          <EnemySpellsByTier
            tier={tier}
            attributes={tierAttributes}
            mappedSpells={enemySpellsMapped}
          />
        </div>
      </div>

      <div className='mt-5'>
        <button
          href="#"
          className='underline'
          onClick={e => {
            console.log("close")
            onClose()
          }}
        >&lt; Voltar ao Bestiário</button>
      </div>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const [enemies, setEnemies] = useState([])
  const [enemy, setEnemy] = useState(null)

  useEffect(e => {
    const loadEnemies = async function () {
      const result = await fetch('/enemies.json')
      const resultJson = await result.json()
      setEnemies(resultJson)
      // setEnemy(resultJson[0])
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
          {enemy
          ? (
              <div className='mt-7'>
                <EnemyDetails enemy={enemy} onClose={e => setEnemy(null)} />
              </div>
            )
          : (
              <div className='mt-7'>
                <EnemyList
                  enemies={enemies}
                  onSelectEnemy={enemy => setEnemy(enemy)}
                />
              </div>
            )
          }
        </div>
      </main>
    </Layout>
  )
}

export default Home;