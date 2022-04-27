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
        .map((file) => require(file))

      resolve(spells)
    }).catch(err => {
      reject(err)
    })
  })
}

module.exports = { getEnemies }
