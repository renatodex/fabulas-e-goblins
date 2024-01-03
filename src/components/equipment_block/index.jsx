import React from 'react'
import { GiSwordBrandish } from "react-icons/gi";
import { GiRoundShield } from "react-icons/gi";
import { GiMagicShield } from "react-icons/gi";
import { GiWizardStaff } from "react-icons/gi";
import { BsCoin } from "react-icons/bs";
import { FaWeightHanging } from "react-icons/fa";
import { GiWalkingBoot } from "react-icons/gi";
import { GiFireAxe } from "react-icons/gi";

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
      <div className="border border-orange-200 rounded shadow-md">
        <div className="p-4 border-b border-orange-200 bg-orange-50">
          <h3 className='text-lg font-bold'>
            {name()} +{data.refinement}
          </h3>
        </div>

        <div className="flex">
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
        </div>

        <div className="p-4 border-t border-t-orange-200 grid grid-cols-4 bg-orange-50 gap-3 text-lg font-bold text-center">
          <div className="border p-2 border-gray-200 bg-gray-100 rounded-xl"><BsCoin className="inline"/> <span>T$ {data.buy_price}</span></div>
          <div className="border p-2 border-gray-200 bg-gray-100 rounded-xl"><FaWeightHanging className="inline"/> <span>{data.slots}</span></div>
          <div className="border p-2 border-gray-200 bg-gray-100 rounded-xl"><GiWalkingBoot className="inline"/> <span>{data.speed}</span></div>
          <div className="border p-2 border-gray-200 bg-gray-100 rounded-xl"><GiWalkingBoot className="inline"/> <span>{data.durability.current}/{data.durability.total}</span></div>
        </div>
      </div>
    </div>
  )
}