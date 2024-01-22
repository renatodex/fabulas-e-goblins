const { getTables } = require('../../data/md_tables/_md-tables-cjs')
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
    name: 'md-tables-to-static',
    async loadContent() {
      let tables = await getTables()
      return { tables }
    },
    async contentLoaded({content}) {
      const { tables } = content
      tables.map(table => generateFile({ filename: `../../static/md_tables/${table.id}.json`, data: table}))
    },
  };
};

module.exports = tablesToStatic
