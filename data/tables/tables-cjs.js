const { resolve } = require('path');
const { readdir } = require('fs').promises;

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

function getTables() {
  return new Promise((resolve, reject) => {
    getFiles("data/tables").then((files) => {
      let tables = files
        .filter((path) => !path.includes('tables-cjs.js'))
        .map((file) => {
          const fileData = require(file)
          const parts = file.replace(/\\/g, "/").split(".").filter(part => part != "json")[0].split("/")
          const fileName = parts[parts.length-1]
          return { id: fileName, ...fileData }
        })

      resolve(tables)
    }).catch(err => {
      reject(err)
    })
  })
}

module.exports = { getTables }
