import URLSearchParams from '@ungap/url-search-params'
import React, { useState } from "react";
import Spells from '../../data/spells/spells'
import { SpellFromJson } from './../../src/components/skill_block/index'
import styles from './spells.module.scss'

export default () => {
  let windowValue = null

  const [selectedSpells, setSelectedSpells] = useState([])
  const [skillSelectionUI, setSkillSelectionUI] = useState(false)

  if (typeof window !== "undefined") {
    windowValue = window
  }

  if (typeof window == "undefined") {
    return <h1>Carregando..</h1>
  }

  const queryParams = new URLSearchParams(windowValue.location.search)

  const redirectToBuild = () => {
    windowValue.location.href = windowValue.location.pathname + windowValue.location.search + "&skills=" + selectedSpells.map(e => e.id).join(',')
  }

  const filteredSpells = (spells, queryFilter) => {
    if (queryFilter) {
      const filterResult = queryFilter.split(",").map(key => (
        Spells[key]
      ))

      return Object.values(filterResult)
    } else {
      return Object.values(spells)
    }
  }

  const toggleSelectedSpell = (spell) => {
    if (skillSelectionUI) {
      if (selectedSpells.find(selectedSpell => selectedSpell.name == spell.name)) {
        setSelectedSpells(
          selectedSpells.filter(selectedSpell => selectedSpell.name != spell.name)
        )
      } else {
        setSelectedSpells([
          ...selectedSpells, spell,
        ])
      }
    }
  }

  const sheetFilter = (spells, { specie, culture, grimo }) => {
    const spellValues = Object.values(spells)
    const specieSpells = spellValues.filter(spell => spell.tags.includes(specie))
    const cultureSpells = spellValues.filter(spell => spell.tags.includes(culture))
    const grimoSpells = spellValues.filter(spell => spell.tags.includes(grimo))

    return [specieSpells, cultureSpells, grimoSpells]
  }

  if (!queryParams.get('specie') || !queryParams.get('culture') || !queryParams.get('grimo')) return <div>Nothing..</div>

  const [specieSpells, cultureSpells, grimoSpells] = sheetFilter(Spells, {
    specie: queryParams.get('specie'),
    culture: queryParams.get('culture'),
    grimo: queryParams.get('grimo'),
  })

  let learnedSpells = []
  if (queryParams.get("skills")) {
    learnedSpells = filteredSpells(grimoSpells, queryParams.get("skills"))
  }

  let ultimateSpells = grimoSpells.filter(skill => skill.tags.includes("ultimate"))

  return (
    <main className={styles.compendium}>
       {skillSelectionUI && (
        <div className={styles['spells-selection']}>
          <div>
            Selecione os poderes de Grimo para gerar um link filtrado.
            <button onClick={e => redirectToBuild()}>Gerar Link</button>
          </div>
        </div>
      )}

      <div className={styles.spells}>
        <h1 className={styles['spells-title']} style={{ marginTop: '0px'}}>Poderes de Espécie</h1>
        {specieSpells.map((spell) => (
          <SpellFromJson key={spell.name} expanded={queryParams.get("opened") || false} spellData={spell} />
        ))}

        <h1 className={styles['spells-title']}>Poderes de Cultura</h1>
        {cultureSpells.map((spell) => (
          <SpellFromJson key={spell.name} expanded={queryParams.get("opened") || false} spellData={spell} />
        ))}

        <h1 className={styles['spells-title']}>Poderes de Sobrecarga</h1>
        {ultimateSpells.map((spell) => (
          <SpellFromJson
            key={spell.name}
            expanded={queryParams.get("opened") || false}
            spellData={spell}
          />
        ))}

        {queryParams.get("skills") && (
          <div>
            <h1 className={styles['spells-title']}>Poderes do Grimo (aprendidos)</h1>
            {learnedSpells.map((spell) => (
              <SpellFromJson
                key={spell.name}
                expanded={queryParams.get("opened") || false}
                spellData={spell}
              />
            ))}
          </div>
        )}

        <hr/>

        {(queryParams.get("skills") == null || queryParams.get("non_learned_skills")) && (
          <div>
            <h1 className={styles['spells-title']}>
              Poderes de Grimo (não aprendidos)
              {skillSelectionUI ? (
                <button onClick={e => setSkillSelectionUI(false)}>Cancelar Seleção de Poderes</button>
              ) : (
                <button onClick={e => setSkillSelectionUI(true)}>Selecionar Poderes</button>
              )}
            </h1>

            {[1,2,3,4].map(tier => (
              <div className={styles['spells-tier']}>
                <h2>Grau {tier}</h2>
                {grimoSpells.filter(spell => spell.folder == `tier${tier}` && !spell.tags.includes("ultimate")).map((spell) => (
                  <SpellFromJson
                    selected={selectedSpells.find(selectedSpell => selectedSpell.name == spell.name)}
                    key={spell.name}
                    expanded={queryParams.get("opened") || false}
                    spellData={spell}
                    onClick={spell => toggleSelectedSpell(spell)}
                  />
                ))}
              </div>
            ))}

          </div>
        )}
      </div>
    </main>
  )
}
