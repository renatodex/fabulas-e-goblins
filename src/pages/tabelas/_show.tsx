import React from 'react';
import { useEffect, useState } from 'react';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import {useLocation} from '@docusaurus/router';

function Dicetable ({ dicetable }) {
  return (
    <div className=''>
      <img src={dicetable.banner} width={'100%'} className=''></img>

      <div className='p-5'>
        <h1 className='text-5xl font-extrabold'>{dicetable.title}</h1>
        <table className='mt-10'>
          <thead>
            <tr>
              <th className='border'>Dado</th>
              <th className='border'>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {dicetable.rolls.map(roll => (
              <tr key={roll.dice_roll}>
                <td className='border'>{roll.dice_roll}</td>
                <td className='border'>{roll.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function ShowDicetable () {
  const location = useLocation();
  const tableId = new URLSearchParams(location.search).get("table_id")

  const [diceTable, setDiceTable] = useState(null)

  useEffect(() => {
    const loadDiceTable = async () => {
      const request = await fetch(`/tables/${tableId}.json`)
      const data = await request.json()
      setDiceTable(data)
    }

    loadDiceTable()
  }, [])

  if (diceTable == null) return <div>Loading...</div>

  return (
    <main className='tailwindpage'>
      <div className="2xl:m-auto 2xl:w-[1536px]">
        <Dicetable dicetable={diceTable} />
      </div>
    </main>
  )
}