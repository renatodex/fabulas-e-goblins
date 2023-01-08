import React from 'react';
import { useEffect, useState } from 'react';
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import { Fragment } from 'react';

function Dicetable ({ dicetable }) {
  return (
    <div className='bg-green-500 p-10 absolute'>
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
            <tr>
              <td className='border'>{roll.dice_roll}</td>
              <td className='border'>{roll.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ShowDicetable () {
  const context = useDocusaurusContext();

  const layoutProps = {
    title: context.siteConfig.title,
    description: "Um Sistema de RPG onde Goblins dominam o mundo e humanos não existem."
  }

  return (
    <Layout {...layoutProps}>
      <BreakpointProvider>
        <main className='tailwindpage'>
          <div className="p-5 2xl:m-auto 2xl:w-[1536px]">
            <Dicetable dicetable={{ title: 'exemplo', rolls: []}} />
          </div>
        </main>
      </BreakpointProvider>
    </Layout>
  )
}