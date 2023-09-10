import React from 'react'

function RollLine ({ label, amount, note, colorClass, borderClass, noteColorClass }) {
  return (
    <div className={`flex justify-between flex-wrap text-xl md:text-3xl font-bold border-b-8 border-dashed pb-2 mb-4 ${colorClass} ${borderClass}`}>
      <div className=''>
        {label}
      </div>
      <div className={`${borderClass} rounded-xl md:p-2 leading-3`}>
        {amount}
      </div>
      <div className={`w-full text-xl italic md:text-2xl ${noteColorClass}`}>
        {note}
      </div>
    </div>
  )
}

export default function RollTable () {
  return (
    <div className='tailwindpage'>
      <div className='border rounded p-6 shadow-lg'>
        <RollLine label="Desastre" amount="1" note="(em qualquer dado)" noteColorClass="text-gray-700" colorClass="text-black" borderClass="border-black" />
        <RollLine label="Falha" amount="2-13" note="(no maior dado)" noteColorClass="text-red-700" colorClass="text-red-600" borderClass="border-red-600" />
        <RollLine label="Sucesso" amount="14-19" note="(no maior dado)" noteColorClass="text-green-700" colorClass="text-green-600" borderClass="border-green-600" />
        <RollLine label="Triunfo" amount="20" note="(em qualquer dado)" noteColorClass="text-yellow-700" colorClass="text-yellow-600" borderClass="border-yellow-600" />
      </div>
    </div>
  )
}
