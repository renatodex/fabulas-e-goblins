const { getTables } = require('../../data/tables/tables-cjs')
const path = require('path');
const { writeFile } = require('fs')

function generateFile({ filename, data }) {
  const filenamePath = path.join(__dirname, filename)
  writeFile(filenamePath, JSON.stringify(data), function (err) {
    if (err) return console.log(err);
    console.log(`Saved JSON: ${filenamePath}`);
  })
}

function tablesToStatic(context, options) {
  return {
    name: 'tables-to-static',
    async loadContent() {
      let tables = await getTables()
      return { tables }
    },
    async contentLoaded({content}) {
      const { tables } = content
      generateFile({ filename: '../../static/tables.json', data: tables})
    },
  };
};

module.exports = tablesToStatic
