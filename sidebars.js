/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  someSidebar: [
    'introduction', {
      '1. Começando a Jogar': [
        'starting-the-game/what-is',
        'starting-the-game/players-role',
        'starting-the-game/gm-role',
        'starting-the-game/how-to-play',
      ],
      '2. Criando seu Personagem': [
        'sheet-creation/getting-sheet',
        'sheet-creation/pick-a-name',
        'sheet-creation/pick-a-role',
        'sheet-creation/money',
        'sheet-creation/initial-level',
        'sheet-creation/define-your-culture',
        'sheet-creation/defining-attributes',
        'sheet-creation/movement-points',
        'sheet-creation/armor-deduction',
        'sheet-creation/hp-points',
        'sheet-creation/mp-points',
        'sheet-creation/defense-points',
        'sheet-creation/magic-defense',
        'sheet-creation/attack-points',
        'sheet-creation/magic-attack-points',
        'sheet-creation/initial-items',
        'sheet-creation/grimos-and-magic',
        'sheet-creation/defining-your-origins',
        'sheet-creation/defining-initiative',
      ],
      '3. Espécies Jogáveis': [
        'species/specie-goblins',
        'species/specie-armadons',
        'species/specie-metaloids',
        'species/specie-razalans',
        'species/specie-valdaris',
        'species/specie-luminins',
      ],
      '4. Grimos': [
        'grimos-and-spells/grimos-introduction',
        'grimos-and-spells/giurads-crest',
        'grimos-and-spells/lunns-jewel',
        'grimos-and-spells/alluras-orb',
        'grimos-and-spells/eye-of-kanus',
        {
          '[Em desenvolvimento]': [
            'grimos-and-spells/ark-of-ravna',
            'grimos-and-spells/darians-totem',
            'grimos-and-spells/flask-of-valari',
            'grimos-and-spells/magni-machine',
            'grimos-and-spells/rune-of-ixin',
            'grimos-and-spells/qatuns-illusion'
          ]
        }
      ],
      '5. Papéis de Jogo': [
        'roles/roles-introduction',
        'roles/roles-adventurer',
        'roles/roles-tank',
        'roles/roles-hunter',
        'roles/roles-arcanist',
        'roles/roles-priest',
        'roles/roles-fortuner',
      ],
      '6. Culturas': [
        'cultures/cultures-introduction',
        'cultures/children-of-dew',
        'cultures/children-of-sands',
        'cultures/children-of-sailing',
        'cultures/children-of-clouds',
        'cultures/children-of-islands',
        'cultures/children-of-underground',
        'cultures/children-of-storms',
        'cultures/children-of-plains',
        'cultures/children-of-mountains',
        'cultures/children-of-depths',
      ],
      '7. Regras do Jogo': [
        'game-rules/rules-introduction',
        'game-rules/scenes',
        'game-rules/declaring-actions-and-outcomes',
        'game-rules/skill-checks',
        'game-rules/challenge-checks',
        'game-rules/short-and-long-rest',
        'game-rules/merchants',
        'game-rules/blacksmiths',
        'game-rules/terrain',
        'game-rules/evolving',
        'game-rules/game-etiquette',
      ],
      '8. Sistema 2d20': [
        'system-2d20/system-introduction',
        'system-2d20/critical-outcomes',
        'system-2d20/epic-outcomes',
        'system-2d20/matching-outcomes',
        'system-2d20/nulled-outcomes',
        'system-2d20/advantage-rolls',
      ],
      '9. Regras  de Combate': [
        'combat-rules/combat-intro',
        'combat-rules/begining-of-combat',
        'combat-rules/player-turn',
        'combat-rules/moving',
        'combat-rules/understanding-magic-spells',
        'combat-rules/physical-combat',
        'combat-rules/magical-combat',
        'combat-rules/death',
        'combat-rules/durability',
        'combat-rules/negative-effects',
      ],
      '10. Narrador': [
        'the-guide/guide-intro',
        'the-guide/fundamentals',
        'the-guide/structure-history',
        'the-guide/create-the-world',
        'the-guide/inhabit-the-world',
        'the-guide/preparing-a-session',
        'the-guide/preparing-combats',
        'the-guide/executing-combats',
        'the-guide/tell-the-tale',
        'the-guide/game-tips',
        'the-guide/gm-toolbelt',
      ],
      '11. As Terras Místicas': [
        'the-world/wheres-the-game-placed',
        'the-world/the-blackout',
        'the-world/the-ages-of-the-world',
        {
          'Religiões': [
            'the-world/religions/lunniism',
            'the-world/religions/etherealism',
            'the-world/religions/avernicism',
            'the-world/religions/arzalism',
            'the-world/religions/primalism',
            'the-world/religions/ostrecism',
          ],
        },
        'the-world/natural-laws',
        'the-world/magic-items',
        'the-world/elo-master',
        'the-world/notable-groups',
      ],
    }
  ]
}

module.exports = sidebars;
