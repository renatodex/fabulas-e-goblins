import React from 'react';
import { useEffect, useState } from 'react';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import { Fragment } from 'react';

interface Roll {
  dice_roll: number;
  description: string;
}

interface Dicetable {
  id: string;
  title: string;
  rolls: Roll[];
  banner: string;
}

function ListTables ({ tables } : { tables: Dicetable[] }) {
  return (
    <Fragment>
      {tables.map(table => (
        <a href={`/tabelas/${table.id}?table_id=${table.id}`} key={table.id} className='border rounded-lg'>
          <img src={table.banner} width={'100%'} className="rounded-tl-lg rounded-tr-lg" />
          <div className='p-7'>
            <h2 className='text-4xl'>{table.title}</h2>
          </div>
        </a>
      ))}
    </Fragment>
  )
}

export default function Dicetables () {
  const [tables, setTables] = useState<Dicetable[]|null>(null)

  useEffect(() => {
    const loadTables = async () => {
      const request = await fetch('/tables.json')
      const data = await request.json()
      setTables(data)
    }

    loadTables()
  }, [])

  if (tables == null) return <div>Loading...</div>

  return (
    <BreakpointProvider>
      <main className='tailwindpage'>
        <div className="p-5 2xl:m-auto 2xl:w-[1536px]">
          <h1 className='text-5xl font-extrabold'>Tabelas</h1>
          <div className='mt-7'>
            <Breakpoint medium up>
              <div className='grid grid-cols-4 gap-5'>
                <ListTables tables={tables} />
              </div>
            </Breakpoint>

            <Breakpoint small down>
              <ListTables tables={tables} />
            </Breakpoint>
          </div>
        </div>
      </main>
    </BreakpointProvider>
  )
}