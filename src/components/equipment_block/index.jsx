import React from 'react'
import { formulaToDiceComponents, diceComponentsToFormula, addReducer } from '../../lib/dice_tools'

function replaceAffixVariables(value, affix) {
  // Extract the base name and the variable parts
  let baseName = value.split('(')[0].trim();
  let variables = value.match(/\((.*?)\)/g);
  console.log(variables)

  // Check if there are no variables to replace
  if (!variables) return baseName;

  let replacements = [];

  let tempEmpowers = affix.empowers
  // For each variable, find the corresponding value and format it
  variables.forEach(variable => {
      let varName = variable.replace(/[()]/g, '');

      let empowerObj = tempEmpowers.find(e => e.name === varName);
    
      if (empowerObj && affix.empowers.length > 1) {
          replacements.push(`${varName}=${empowerObj.value}`);
      }
      if (empowerObj && affix.empowers.length == 1) {
        replacements.push(`${empowerObj.value}`);
      }

      if (empowerObj) {
        tempEmpowers = tempEmpowers.filter(empower => empower != empowerObj)
      }
  });

  // Format the final string
  let formattedName = replacements.length === 1 ? `${baseName} (${replacements[0]})` : `${baseName} (${replacements.join(') (')})`;

  return formattedName;
}

export default function EquipmentBlock ({ data }) {

  const physicalAffixes = data.affixes.filter(affix => affix.is_physical)
  const magicalAffixes = data.affixes.filter(affix => affix.is_magical)
  const baseDamage = data.item_shape.base_damage.replaceAll(' ', '')
  const physicalDamageFormula = damageFormula(physicalAffixes)
  const magicalDamageFormula = damageFormula(magicalAffixes)

  const totalAttackPhysical = data.refinement.attack_physical + sumAffixesValues(data.affixes, (affix) => affix.attack_physical_up)
  const totalAttackMagical = data.refinement.attack_magical + sumAffixesValues(data.affixes, (affix) => affix.attack_magical_up)
  const totalDefensePhysical = data.refinement.defense_physical + sumAffixesValues(data.affixes, (affix) => affix.defense_physical_up)
  const totalDefenseMagical = data.refinement.defense_magical + sumAffixesValues(data.affixes, (affix) => affix.defense_magical_up)

  console.log(data.refinement.defense_magical, sumAffixesValues(data.affixes, (affix) => affix.defense_magical_up), totalAttackPhysical)

  function itemName () {
    if (data.material && data.item_shape) {
      return `${data.item_shape.name} de ${data.material.name}`
    } else {
      return data.name
    }
  }

  function damageFormula (affixes) {
    const affixesFormula = affixes.map(affix => affix.empowers).flat().filter(empower => empower.damage_up).map(empower => empower.value)
    
    return diceComponentsToFormula(
      affixesFormula.map(formula => formulaToDiceComponents(formula)).flat()
    )
  }

  function sumAffixesValues (affixes, filterFunction) {
    const attackAffixes = affixes.map(affix => affix.empowers).flat().filter(filterFunction).map(empower => empower.value)
    return attackAffixes.reduce(addReducer, 0) 
  }

  return (
    <div className="tailwindpage">
      <div className="shadow-lg rounded-xl bg-theroyal-600 p-5">
        <div className="bg-theroyal-600 text-white rounded-t-xl">
          <h3 className='text-xl font-bold'>
            {itemName()} + {data.refinement[data.item_shape.item_type]}
          </h3>
        </div>

        <div className='bg-theroyal-600 mt-3 text-sm sm:text-md'>
          <div className="grid grid-cols-2 gap-3 p-3 bg-white rounded-t-xl">
            <div className='grid sm:block gap-3 sm:gap-0'>
              <div className='sm:flex'>
                <div className='border flex-1 border-b-0 sm:border-r-0 border-black px-2 py-1 rounded-t-xl sm:rounded-r-none'>Dano Total</div>
                <div className='border flex-1 sm:border-b-0 border-black px-2 py-1 sm:rounded-t-xl rounded-b-xl sm:rounded-br-none sm:rounded-l-none'>
                  <span className='text-blue-500'>
                    {diceComponentsToFormula(formulaToDiceComponents(baseDamage))}
                  </span>

                  {physicalDamageFormula && (
                    <span>
                      {' + '}
                      <span className='text-green-500'>
                        {physicalDamageFormula}
                      </span>
                    </span>
                  )}

                  {magicalDamageFormula && (
                    <span>
                      {' + '}
                      <span className='text-pink-400'>
                        {magicalDamageFormula}
                      </span>
                    </span>
                  )}
                </div>
              </div>
              <div className='sm:flex'>
                <div className='border flex-1 border-b-0 sm:border-r-0 border-black rounded-t-xl sm:rounded-t-none px-2 py-1'>Ataque (F/M)</div>
                <div className='border flex-1 sm:border-b-0 border-black rounded-b-xl sm:rounded-b-none px-2 py-1'>+{totalAttackPhysical} / +{totalAttackMagical}</div>
              </div>
              <div className='sm:flex'>
                <div className='border flex-1 border-b-0 sm:border-r-0 border-black rounded-t-xl sm:rounded-t-none px-2 py-1'>Defesa (F/M)</div>
                <div className='border flex-1 sm:border-b-0 border-black rounded-b-xl sm:rounded-b-none px-2 py-1'>+{totalDefensePhysical} / +{totalDefenseMagical}</div>
              </div>
              <div className='sm:flex'>
                <div className='border flex-1 border-black border-b-0 sm:border-b sm:border-r-0 px-2 py-1 rounded-t-xl sm:rounded-t-none sm:rounded-br-none sm:rounded-b-xl sm:rounded-r-none'>Movimento</div>
                <div className='border flex-1 border-black px-2 py-1 sm:rounded-b-xl rounded-b-xl sm:rounded-b-none sm:rounded-bl-none sm:rounded-l-none'>{data.speed}</div>
              </div>
            </div>

            <div className="grid sm:block gap-3 sm:gap-0">
              <div className='sm:flex'>
                <div className='border flex-1 border-b-0 sm:border-r-0 border-black px-2 py-1 rounded-t-xl sm:rounded-r-none sm:flex bg-gray-200'>
                  <div className='flex-1'>Grau:</div>
                  <div>
                    <span className={`rounded-full mx-0.5 border-black border inline-block w-[1.35rem] text-sm text-center font-bold ${data.tier == 1 ? 'bg-theroyal-500 text-white' : 'bg-white'}`}>1</span>
                    <span className={`rounded-full mx-0.5 border-black border inline-block w-[1.35rem] text-sm text-center font-bold ${data.tier == 2 ? 'bg-theroyal-500 text-white' : 'bg-white'}`}>2</span>
                    <span className={`rounded-full mx-0.5 border-black border inline-block w-[1.35rem] text-sm text-center font-bold ${data.tier == 3 ? 'bg-theroyal-500 text-white' : 'bg-white'}`}>3</span>
                    <span className={`rounded-full mx-0.5 border-black border inline-block w-[1.35rem] text-sm text-center font-bold ${data.tier == 4 ? 'bg-theroyal-500 text-white' : 'bg-white'}`}>4</span>
                  </div>
                </div>
                <div className='border flex-1 sm:border-b-0 border-black px-2 py-1 sm:rounded-t-xl rounded-b-xl sm:rounded-br-none sm:rounded-l-none bg-gray-200'>Ocupa: {data.weight} espaço</div>
              </div>
              <div className='sm:flex'>
                <div className='border flex-1 border-b-0 sm:border-r-0 border-black rounded-t-xl sm:rounded-t-none px-2 py-1'>Durabilidade:</div>
                <div className='border flex-1 sm:border-b-0 border-black rounded-b-xl sm:rounded-b-none px-2 py-1'>
                  <div className='inline-block'>
                    <div className='flex gap-1'>
                      {Array.from(new Array(data.durability.total)).map((slot, i) => {
                        console.log(i)
                        return (
                          <span className={`flex-none ${i < data.durability.current ? 'bg-green-500' : 'bg-gray-400'} h-3 w-3 inline-block rounded-full`}></span>
                        )
                      })}
                      {/* <span className="flex-none bg-gray-400 h-3 w-3 inline-block rounded-full"></span>
                      <span className="flex-none bg-gray-400 h-3 w-3 inline-block rounded-full"></span> */}
                    </div>
                  </div>
                  <span className='inline ml-1'>
                    ({data.durability.current}/{data.durability.total})
                  </span>
                </div>
              </div>
              <div className='sm:flex'>
                <div className='border flex-1 border-b-0 sm:border-r-0 border-black rounded-t-xl sm:rounded-t-none px-2 py-1'>Attributo</div>
                <div className='border flex-1 sm:border-b-0 border-black rounded-b-xl sm:rounded-b-none px-2 py-1'>Sobrevivência</div>
              </div>
              <div className='sm:flex'>
                <div className='border flex-1 border-black border-b-0 sm:border-b sm:border-r-0 px-2 py-1 rounded-t-xl sm:rounded-t-none sm:rounded-br-none sm:rounded-b-xl sm:rounded-r-none'>Preço de Venda</div>
                <div className='border flex-1 border-black px-2 py-1 sm:rounded-b-xl rounded-b-xl sm:rounded-b-none sm:rounded-bl-none sm:rounded-l-none'>T$ 20.000</div>
              </div>
            </div>
          </div>
          <div className='p-3 pt-0 bg-white rounded-b'>
            <div className='sm:grid gap-3 sm:grid-cols-2'>
              <div className=''>
                {physicalAffixes.map(affix => (
                  <div className='mt-3 first:mt-0'>
                    <AffixBlock affix={affix} />
                  </div>
                ))}
              </div>
              <div className='mt-3 sm:mt-0'>
                {magicalAffixes.map(affix => (
                  <div className='mt-3 first:mt-0'>
                    <AffixBlock affix={affix} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AffixBlock ({ affix }) {
  return (
    <div className={`${affix.is_magical ? 'bg-pink-100 border-pink-600': 'bg-lime-100 border-lime-600'} border rounded-2xl`}>
      <div className={`border-b ${affix.is_magical ? 'border-pink-600': 'border-lime-600'} px-3 py-1 text-lg font-bold`}>
        <div className='flex'>
          <span className='flex-1'>
            <span>{affix.name}</span>
            <span className={`ml-1 ${affix.is_magical ? 'text-pink-600': 'text-lime-600'}`}>{replaceAffixVariables(affix.notation, affix)}</span>
          </span>
          <span className='text-md italic font-light'>
            {affix.is_magical ? 'Afixo Mágico' : 'Afixo Físico'}
          </span>
        </div>
      </div>
      <div className='p-3'>
        {replaceAffixVariables(affix.description, affix)}
      </div>
    </div>
  )
}