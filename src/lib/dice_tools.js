/**
 * Converts a formula to individual dice components.
 *
 * @param {string} formula - A dice formula. Eg: 2d6 + 1d4 + 3
 * @returns {Array<string>} - An array with individual dice components. Eg: ['d6', 'd6', 'd4', '3']
 */
export function formulaToDiceComponents(formula) {
  let formulaComponents = formula.replaceAll(' ', '').split('+')
  formulaComponents = formulaComponents.map(component => ((component[0] == 'd') ? `1${component}` : component))

  const minimalComponents = formulaComponents.map(component => {
    let match = /(\d+)(.*)/g.exec(component)
    if (!!match[1] && !!match[2]) {
      return Array.from({length: match[1]}, i => match[2])
    } else {
      return component
    }
  })

  return minimalComponents.flat()
}


/**
 * Converts an array of individual dice components into a summarized formula
 *
 *
 * @param {Array<string>} components - An array of dice strings. Eg: ['d4', '3', 'd6', 'd6']
 *
 * @returns {string} - A summarized formula. Eg: 2d6 + 1d4 + 3
 */
export function diceComponentsToFormula(components) {
  if (components.length == 0) return null

  const diceComponents = components.filter(component => component[0].toString().toLowerCase() == 'd')
  const diceComponentsSet = new Set(diceComponents)
  const numberComponents = components.filter( x => !diceComponentsSet.has(x) );

  const diceToCountMap = diceComponents.reduce((componentObject, component) => {
    if (!componentObject.hasOwnProperty(component)) {
      componentObject[component] = diceComponents.filter(dc => dc == component)
    }

    return componentObject
  }, {})

  return [
    Object.keys(diceToCountMap).map(dice => `${diceToCountMap[dice].length}${dice}`).join('+'),
    numberComponents.reduce(addReducer, 0)
  ].join('+')
}

export function addReducer (a, b) {
  return parseFloat(a) + parseFloat(b)
}
