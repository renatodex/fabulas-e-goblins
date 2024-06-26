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

function getTierFromPath(path) {
  const match = path.match(/tier(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

function getSpells() {
  return new Promise((resolve, reject) => {
    getFiles("data/spells").then((files) => {
      let spells = files
        .filter((path) => !path.includes('spells.js'))
        .map((file) => {
          const fileData = require(file);
          const parts = file.replace(/\\/g, "/").split(".").filter(part => part !== "json")[0].split("/");
          const fileName = parts[parts.length - 1];
          const tier = getTierFromPath(file);
          return { id: fileName, tier, ...fileData };
        });

      resolve(spells);
    }).catch(err => {
      reject(err);
    });
  });
}

module.exports = { getSpells };
