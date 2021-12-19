import React from 'react'
import Spells from '../../data/spells'
import { SpellFromJson } from './../../src/components/skill_block/index'

export default () => {
  const queryParams = new URLSearchParams(window.location.search)

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
    <main>
      <h1>Compendium de Poderes</h1>
      <div>
        {filteredSpells(Spells, queryParams.get('spells')).map((spell) => (
          <SpellFromJson key={spell.name} expanded={queryParams.get("opened") || false} spellData={spell} />
        ))}
      </div>
    </main>
  )
}