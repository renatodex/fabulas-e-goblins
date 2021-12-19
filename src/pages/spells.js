import URLSearchParams from '@ungap/url-search-params'
import React from "react";
import Spells from '../../data/spells'
import { SpellFromJson } from './../../src/components/skill_block/index'
import styles from './spells.module.scss'

export default () => {
  let windowValue = null

  if (typeof window !== "undefined") {
    windowValue = window
  }

  const queryParams = new URLSearchParams(windowValue)

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

  return (
    <main className={styles.compendium}>
      <h1>Compendium de Poderes</h1>
      <div className={styles.spells}>
        {filteredSpells(Spells, queryParams.get('spells')).map((spell) => (
          <SpellFromJson key={spell.name} expanded={queryParams.get("opened") || false} spellData={spell} />
        ))}
      </div>
    </main>
  )
}
