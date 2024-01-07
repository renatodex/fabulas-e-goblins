import React from 'react'
import { GiSwordBrandish } from "react-icons/gi";
import { GiRoundShield } from "react-icons/gi";
import { GiMagicShield } from "react-icons/gi";
import { GiWizardStaff } from "react-icons/gi";
import { BsCoin } from "react-icons/bs";
import { FaWeightHanging } from "react-icons/fa";
import { GiWalkingBoot } from "react-icons/gi";
import { GiFireAxe } from "react-icons/gi";
import { BsBricks } from "react-icons/bs";

export default function EquipmentBlock ({ data }) {

  function name () {
    if (data.material && data.item_shape) {
      return `${data.item_shape.name} de ${data.material.name}`
    } else {
      return data.name
    }
  }

  function affixName(affix) {
    // Extract the base name and the variable parts
    let baseName = affix.name.split('(')[0].trim();
    let variables = affix.name.match(/\((.*?)\)/g);

    // Check if there are no variables to replace
    if (!variables) return baseName;

    let replacements = [];

    // For each variable, find the corresponding value and format it
    variables.forEach(variable => {
        let varName = variable.replace(/[()]/g, '');
        let empowerObj = affix.empowers.find(e => e.name === varName);
        if (empowerObj && affix.empowers.length > 1) {
            replacements.push(`${varName}=${empowerObj.value}`);
        }
        if (empowerObj && affix.empowers.length == 1) {
          replacements.push(`${empowerObj.value}`);
        }
    });

    // Format the final string
    let formattedName = replacements.length === 1 ? `${baseName} (${replacements[0]})` : `${baseName} (${replacements.join(') (')})`;

    return formattedName;
  }

  return (
    <div className="tailwindpage">
      <div className="shadow-lg rounded-xl bg-indigo-500 p-5">
        <div className="bg-indigo-500 text-white rounded-t-xl">
          <h3 className='text-xl font-bold'>
            {name()} +{data.refinement}
          </h3>
        </div>

        <div className='bg-indigo-500 mt-3'>
          <div className="grid grid-cols-2 gap-3 p-3 bg-white rounded-xl">
            <div className='grid sm:block gap-3 sm:gap-0'>
              <div className='sm:flex'>
                <div className='border flex-1 border-b-0 sm:border-r-0 border-black px-2 py-1 rounded-t-xl sm:rounded-r-none'>Dano Total</div>
                <div className='border flex-1 sm:border-b-0 border-black px-2 py-1 sm:rounded-t-xl rounded-b-xl sm:rounded-br-none sm:rounded-l-none'>d12 + 4</div>
              </div>
              <div className='sm:flex'>
                <div className='border flex-1 border-b-0 sm:border-r-0 border-black rounded-t-xl sm:rounded-t-none px-2 py-1'>Ataque (F/M)</div>
                <div className='border flex-1 sm:border-b-0 border-black rounded-b-xl sm:rounded-b-none px-2 py-1'>d12 + 4</div>
              </div>
              <div className='sm:flex'>
                <div className='border flex-1 border-b-0 sm:border-r-0 border-black rounded-t-xl sm:rounded-t-none px-2 py-1'>Defesa (F/M)</div>
                <div className='border flex-1 sm:border-b-0 border-black rounded-b-xl sm:rounded-b-none px-2 py-1'>d12 + 4</div>
              </div>
              <div className='sm:flex'>
                <div className='border flex-1 border-black sm:border-r-0 px-2 py-1 rounded-t-xl sm:rounded-t-none sm:rounded-br-none sm:rounded-b-xl sm:rounded-r-none'>Movimento</div>
                <div className='border flex-1 border-black px-2 py-1 sm:rounded-b-xl rounded-b-xl sm:rounded-b-none sm:rounded-bl-none sm:rounded-l-none'>-1</div>
              </div>
            </div>

            <div className="grid sm:block gap-3 sm:gap-0">
              <div className='sm:flex'>
                <div className='border flex-1 border-b-0 sm:border-r-0 border-black px-2 py-1 rounded-t-xl sm:rounded-r-none sm:flex'>
                  <div className='flex-1'>Grau:</div>
                  <div>
                    <span className='rounded-full mx-0.5 border-black border inline-block w-5 text-sm text-center font-bold bg-purple-400'>1</span>
                    <span className='rounded-full mx-0.5 border-black border inline-block w-5 text-sm text-center font-bold bg-white'>2</span>
                    <span className='rounded-full mx-0.5 border-black border inline-block w-5 text-sm text-center font-bold bg-white'>3</span>
                    <span className='rounded-full mx-0.5 border-black border inline-block w-5 text-sm text-center font-bold bg-white'>4</span>
                  </div>
                </div>
                <div className='border flex-1 sm:border-b-0 border-black px-2 py-1 sm:rounded-t-xl rounded-b-xl sm:rounded-br-none sm:rounded-l-none bg-gray-200'>Ocupa:</div>
              </div>
              <div className='sm:flex'>
                <div className='border flex-1 border-b-0 sm:border-r-0 border-black rounded-t-xl sm:rounded-t-none px-2 py-1'>Durabilidade:</div>
                <div className='border flex-1 sm:border-b-0 border-black rounded-b-xl sm:rounded-b-none px-2 py-1'></div>
              </div>
              <div className='sm:flex'>
                <div className='border flex-1 border-b-0 sm:border-r-0 border-black rounded-t-xl sm:rounded-t-none px-2 py-1'>Attributo</div>
                <div className='border flex-1 sm:border-b-0 border-black rounded-b-xl sm:rounded-b-none px-2 py-1'>Sobrevivência</div>
              </div>
              <div className='sm:flex'>
                <div className='border flex-1 border-black sm:border-r-0 px-2 py-1 rounded-t-xl sm:rounded-t-none sm:rounded-br-none sm:rounded-b-xl sm:rounded-r-none'>Preço de Venda</div>
                <div className='border flex-1 border-black px-2 py-1 sm:rounded-b-xl rounded-b-xl sm:rounded-b-none sm:rounded-bl-none sm:rounded-l-none'>T$ 20.000</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex border-r-2 border-l-2 border-indigo-800">
          <div className="flex-1">
            <div className="p-4 grid grid-cols-4 gap-3 text-2xl font-bold text-center">
              <div className="border p-2 border-gray-200 bg-gray-100 rounded-xl"><GiSwordBrandish className="inline"/> <span>1</span></div>
              <div className="border p-2 border-gray-200 bg-gray-100 rounded-xl"><GiWizardStaff className="inline"/> <span>0</span></div>
              <div className="border p-2 border-gray-200 bg-gray-100 rounded-xl"><GiRoundShield className="inline"/> <span>3</span></div>
              <div className="border p-2 border-gray-200 bg-gray-100 rounded-xl"><GiMagicShield className="inline"/> <span>3</span></div>
            </div>

            <div className="p-4 pt-0 grid grid-cols-2 gap-3">
              <div className="border p-2 border-gray-200 bg-gray-100 rounded-xl">
                Dano Físico: <code>{data.item_shape.base_damage}</code>
              </div>
              <div className="border p-2 border-gray-200 bg-gray-100 rounded-xl">
                Dano Mágico: <code>-</code>
              </div>
            </div>

            <div className="px-4 pb-5 grid grid-cols-3 gap-3">
              {data.affixes.map((affix) => {
                return (
                  <div className="rounded-xl w-auto inline-block border text-md p-3 border-green-300 bg-green-100">
                    {affixName(affix)}
                  </div>
                )
              })}
            </div>
          </div>
        </div> */}

        {/* <div className="p-4 border-t border-t-orange-200 grid grid-cols-4 bg-indigo-500 gap-3 text-lg font-bold text-center rounded-b-xl border-b-2 border-l-2 border-r-2 border-indigo-800">
          <div className="border p-2 bg-white text-black rounded-xl"><BsCoin className="inline"/> <span>T$ {data.buy_price}</span></div>
          <div className="border p-2 bg-white text-black rounded-xl"><FaWeightHanging className="inline"/> <span>{data.slots}</span></div>
          <div className="border p-2 bg-white text-black rounded-xl"><GiWalkingBoot className="inline"/> <span>{data.speed}</span></div>
          <div className="border p-2 bg-white text-black rounded-xl"><BsBricks className="inline"/> <span>{data.durability.current}/{data.durability.total}</span></div>
        </div> */}
      </div>
    </div>
  )
}