const { getSpells } = require('../../data/spells/spells-cjs')
const path = require('path');
const { writeFile } = require('fs')

function spellsToStatic(context, options) {
  return {
    name: 'spells-to-static',
    async loadContent() {
      let spells = await getSpells()
      return { spells }
    },
    async contentLoaded({content}) {
      const { spells } = content

      const filePath = path.join(__dirname, '../../static/spells.json')

      writeFile(filePath, JSON.stringify(spells), function (err) {
        if (err) return console.log(err);
        console.log('Saved spells to static');
      })
    },
  };
};

module.exports = spellsToStatic
