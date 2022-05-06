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

function getEnemies() {
  return new Promise((resolve, reject) => {
    getFiles("data/enemies").then((files) => {
      let spells = files
        .filter((path) => !path.includes('enemies.js') && !path.includes('enemies-cjs.js'))
        .map((file) => {
          const fileData = require(file)
          const parts = file.replace(/\\/g, "/").split(".").filter(part => part != "json")[0].split("/")
          const fileName = parts[parts.length-1]
          return { id: fileName, ...fileData }
        })

      resolve(spells)
    }).catch(err => {
      reject(err)
    })
  })
}

module.exports = { getEnemies }
