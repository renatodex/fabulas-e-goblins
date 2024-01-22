import React, { useState, useEffect } from 'react'
import skill_styles from './skill.module.scss'
import styles from './style.module.scss'

export default function Skill () {
  let [skills, setSkills] = useState([])

  useEffect(() => {
    let loadSkills = () => {
      fetch("https://www.goblinsuave.com.br/airtable_api/v1/grimo_spells?limit=50").then((result) => {
          return result.json()
      }).then((data) => {
          setSkills(data)
      })
    }

    loadSkills()
  }, [])

  return (
    <div className={skill_styles.skill}>
      <SpellBlock spellData={skills[3]}></SpellBlock>
    </div>
  );
}

export function SpellBlock ({ spellData, onSelectSpellEvent, selected }) {

  let attackLogic = function() {
    switch(spellData?.['attack_logic']?.[0]) {
      case 'element_defense':
        return 'Contra Defesa Mágica'
      case 'physical_defense':
        return 'Contra Defesa Física'
      case 'corrupted_element_defense':
        return 'Contra Defesa Mágica Corrompida'
      default:
        return 'Nenhuma'
    }
  }

  let habilityType = function () {
    switch(spellData?.['action_type']?.[0]) {
      case 'battle_active':
        return 'Habilidade Ativa';
      case 'battle_passive':
        return 'Habilidade Passiva';
      case 'peace_action':
        return 'Uso Fora de Combate';
      default:
        return 'Não especificado'
    }
  }

  let actionType = spellData?.['action_type']?.[0]

  if (!spellData) {
    return (
      <div className={styles['spell-block']}>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className={styles['spell-block']}>
      <div className={styles['title-grid']}>
        <h1>{ `Nível ${spellData?.min_level} - ${spellData?.name}` } {selected && (
            <span>(selected)</span>
          )}
        </h1>
        <img src={spellData?.spell_icon?.[0]?.url} width={'50px'}></img>
      </div>

      <h3 className={[
        styles['hability-type'],
        styles[`hability-type--${actionType}`],
      ].join(' ')}>{ habilityType() }</h3>
      <div className={styles['mechanic']}>
        <p>{ spellData?.epic_description }</p>
        <div>{ spellData?.mechanic }</div>
      </div>

      <div className={styles['characteristics']}>
        <div className={styles['characteristics__block']}>
          <label>Custo de Magia</label>
          <p className={styles['big-number']}>{ spellData?.['magic_cost'] }</p>
        </div>
        <div className={styles['characteristics__block']}>
          <label>Turnos de Duração</label>
          <p className={styles['big-number']}>{ spellData?.['duration_time'] }</p>
        </div>
        <div className={styles['characteristics__block']}>
          <label>Distância Máxima</label>
          <p className={styles['big-number']}>{ spellData?.['max_cast_distance'] }</p>
        </div>

        <div className={styles['characteristics__block']}>
          <label>Fórmula de Dano/Cura</label>
          { spellData?.hit_formula }
        </div>

        <div className={styles['characteristics__block']}>
          <label>Lógica de Ataque</label>
          { attackLogic() }
        </div>

        { spellData?.['element'] == [] && (
          <div className={styles['characteristics__block']}>
            <label>Elemento</label>
            { spellData?.['_element__name'] }
          </div>
        ) }

        <div className={styles['characteristics__block']}>
          <label>Alcance</label>
          { spellData?.['_range_type__name'] }
        </div>

        { spellData?.['range_amount'] != '0' && (
          <div className={styles['characteristics__block']}>
            <label>Configuração do Alcance</label>
            { spellData?.['range_amount'] }
          </div>
        ) }
      </div>
    </div>
  )
}
