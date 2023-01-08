import React from 'react';
import { useEffect, useState } from 'react';
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
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

function ListTables ({ tables, setSelectedDicetable } : { tables: Dicetable[], setSelectedDicetable: Function }) {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      {tables.map(table => (
        <div onClick={e => setSelectedDicetable(table)} key={table.id} className='border rounded-lg'>
          <img src={table.banner} width={'100%'} className="rounded-tl-lg rounded-tr-lg" />
          <div className='p-7'>
            <h2 className='text-4xl'>{table.title}</h2>
          </div>
        </div>
      ))}
    </Fragment>
  )
}

export default function Dicetables () {
  const [tables, setTables] = useState<Dicetable[]|null>(null)
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const [selectedDicetable, setSelectedDicetable] = useState<Dicetable|null>(null)

  useEffect(() => {
    const loadTables = async () => {
      const request = await fetch('/tables.json')
      const data = await request.json()
      setTables(data)
    }

    loadTables()
  }, [])

  if (tables == null) return <div>Loading...</div>

  const layoutProps = {
    title: context.siteConfig.title,
    description: "Um Sistema de RPG onde Goblins dominam o mundo e humanos não existem."
  }

  return (
    <Layout {...layoutProps}>
      <BreakpointProvider>
        <main className='tailwindpage'>
          <div className="p-5 2xl:m-auto 2xl:w-[1536px]">
            {selectedDicetable && (
              <div className='bg-green-500 p-10 absolute'>
                <h1 className='text-5xl font-extrabold'>{selectedDicetable.title}</h1>
                <table className='mt-10'>
                  <thead>
                    <tr>
                      <th className='border'>Dado</th>
                      <th className='border'>Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedDicetable.rolls.map(roll => (
                      <tr>
                        <td className='border'>{roll.dice_roll}</td>
                        <td className='border'>{roll.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <h1 className='text-5xl font-extrabold'>Tabelas</h1>
            <div className='mt-7'>
              <Breakpoint medium up>
                <div className='grid grid-cols-4'>
                  <ListTables setSelectedDicetable={setSelectedDicetable} tables={tables} />
                </div>
              </Breakpoint>

              <Breakpoint small down>
                <ListTables setSelectedDicetable={setSelectedDicetable} tables={tables} />
              </Breakpoint>
            </div>
          </div>
        </main>
      </BreakpointProvider>
    </Layout>
  )
}