import React from 'react';
import { useEffect, useState } from 'react';
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import { Fragment } from 'react';

// interface Roll {
//   diceRoll: number,
//   description: string
// }

// interface Dicetable {
//   id: string,
//   title: string,
//   rolls: Roll
// }

function ListTables ({ tables }) {
  return (
    <Fragment>
      {tables.map(table => (
        <div key={table.id} className='p-5 border rounded-lg'>
          <h2 className='text-4xl'>{table.title}</h2>
        </div>
      ))}
    </Fragment>
  )
}

export default function Dicetables () {
  const [tables, setTables] = useState(null)
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  useEffect(() => {
    const loadTables = async () => {
      const request = await fetch('/tables.json')
      const data = await request.json()
      console.log(data)
      setTables(data)
    }

    loadTables()
  }, [])

  if (tables == null) return <div>Loading...</div>

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Um Sistema de RPG onde Goblins dominam o mundo e humanos não existem.<head />"
    >
      <BreakpointProvider>
        <main className='tailwindpage'>
          <div className="p-5 2xl:m-auto 2xl:w-[1536px]">
            <h1 className='text-5xl font-extrabold'>Tabelas</h1>
            <div className='mt-7'>
              <Breakpoint medium up>
                <div className='grid grid-cols-4'>
                  {tables.map(table => (
                    <div key={table.id} className='p-5 border rounded-lg'>
                      <h2 className='text-4xl'>{table.title}</h2>
                    </div>
                  ))}
                </div>
              </Breakpoint>

              <Breakpoint small down>
                <div className='grid grid-cols-1'>
                  {tables.map(table => (
                    <div key={table.id} className='p-5 border rounded-lg'>
                      <h2 className='text-4xl'>{table.title}</h2>
                    </div>
                  ))}
                </div>
              </Breakpoint>
            </div>
          </div>
        </main>
      </BreakpointProvider>
    </Layout>
  )
}