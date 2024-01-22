const { resolve } = require('path');
const path = require('path');
const { readdir } = require('fs').promises;
const fs = require('node:fs');
const Dictionary = require('./_column_names_dictionary')

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

function markdownTableToJson(markdownTable) {
  // Split the table into rows
  const rows = markdownTable.split('\n').map(row => row.trim()).filter(row => row);

  // Extract headers, ignoring empty strings
  const headers = rows[0].split('|').map(header => header.trim()).filter(header => header);

  // Convert each row into an object
  const jsonData = rows.slice(2).map(row => {
      // Split values and remove empty strings
      const values = row.split('|').map(value => value.trim()).filter(value => value);
      return headers.reduce((obj, header, index) => {
          obj[header] = removeMarkdown(values[index]);
          return obj;
      }, {});
  });

  return jsonData;
}

function removeMarkdown(text) {
  // Remove markdown formatting (bold, italic, code)
  return (text || '').replace(/(\*\*|\*|`)/g, '');
}

function getTables() {
  return new Promise((resolve, reject) => {
    getFiles("data/md_tables").then((files) => {
      let tables = files
        .filter((path) => !path.includes('_md-tables-cjs.js') && !path.includes('_column_names_dictionary.js'))
        .map((file) => {
          const markdownTable = (fs.readFileSync(file, 'utf8'))
          const fileName = path.basename(file).split('.')[0]
          const jsonRows = markdownTableToJson(markdownTable)

          const finalJsonRows = jsonRows.map(row => {
            let newRow = {};
            for (let key in row) {
                // Replace the key if it's in the dictionary, otherwise keep the original key
                let newKey = Dictionary[key] || key;
                newRow[newKey] = row[key];
            }
            return newRow;
          })

          return { id: fileName, data: finalJsonRows }
        })

      resolve(tables)
    }).catch(err => {
      reject(err)
    })
  })
}

module.exports = { getTables }
