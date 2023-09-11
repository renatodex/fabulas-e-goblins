import React from 'react'
import {
  PiSealQuestionDuotone,
} from 'react-icons/pi'

export default function GrimoCostModifier ({ cost, downCost, upCost }) {
  return (
    <div className="tailwindpage" style={{display: "inline-block"}}>
      <div className="flex border-2 font-semibold rounded bg-purple-100 italic px-2 text-lg border-purple-400 mt-3">
        {!!cost && (
          <p>
            Mod Custo PM: <span>+-{cost}</span>
          </p>
        )}
        {!!!cost && !!!upCost && !!downCost && (
          <p>
            Mod Custo PM: <span>-{downCost}</span>
          </p>
        )}
        {!!!cost && !!upCost && !!!downCost && (
          <p>
            Mod Custo PM: <span>+{upCost}</span>
          </p>
        )}
        {!!upCost && !!downCost && (
          <p>
            Mod Custo PM: <span>+{upCost}/-{downCost}</span>
          </p>
        )}
        <a className='inline-block text-2xl align-middle ml-1.5 mt-0.5'>
          <PiSealQuestionDuotone/>
        </a>
      </div>
    </div>
  )
}
