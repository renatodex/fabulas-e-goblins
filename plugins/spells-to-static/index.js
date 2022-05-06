const { getSpells } = require('../../data/spells/spells-cjs')
const path = require('path');
const { writeFile } = require('fs')

function generateFile({ filename, data }) {
  const filenamePath = path.join(__dirname, filename)
  writeFile(filenamePath, JSON.stringify(data), function (err) {
    if (err) return console.log(err);
    console.log(`Saved JSON: ${filenamePath}`);
  })
}

function spellsToStatic(context, options) {
  return {
    name: 'spells-to-static',
    async loadContent() {
      let spells = await getSpells()
      return { spells }
    },
    async contentLoaded({content}) {
      const { spells } = content

      const enemySpells = spells.filter(spell => spell.tags?.includes("enemy"))
      const nonEnemySpells = spells.filter(spell => !spell.tags?.includes("enemy"))

      generateFile({ filename: '../../static/enemy-spells.json', data: enemySpells})
      generateFile({ filename: '../../static/spells.json', data: nonEnemySpells})
    },
  };
};

module.exports = spellsToStatic
