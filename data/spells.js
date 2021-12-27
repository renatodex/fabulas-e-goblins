const files = require.context('./', true, /\.json$/);

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => {
    const keyArray = key.split("/")
    const fileName = keyArray[keyArray.length-1]
    const spellName = fileName.split(".")[0]
    cache[spellName] = r(key)
  });
}

importAll(files)

export default cache
