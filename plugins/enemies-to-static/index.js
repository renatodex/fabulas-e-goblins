const { getEnemies } = require('../../data/enemies/enemies-cjs')
const path = require('path');
const { writeFile } = require('fs')

function enemiesToStatic(context, options) {
  return {
    name: 'enemies-to-static',
    async loadContent() {
      let enemies = await getEnemies()
      return { enemies }
    },
    async contentLoaded({content}) {
      const { enemies } = content

      const filePath = path.join(__dirname, '../../static/enemies.json')

      writeFile(filePath, JSON.stringify(enemies), function (err) {
        if (err) return console.log(err);
        console.log('Saved enemies to static');
      })
    },
  };
};

module.exports = enemiesToStatic
