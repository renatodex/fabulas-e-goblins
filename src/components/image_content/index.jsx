import React from 'react'
import style from './style.module.scss'

export default function ImageContent ({src, children}) {
  return (
    <div className='tailwindpage'>
      <div className='grid lg:grid-cols-2 mb-8'>
        <div className='md:border-2 md:pt-8 align-middle lg:border-r-0 border-b-0 lg:border-b-2'>
          <img src={src} />
        </div>
        <div className={`md:border-2 md:pt-8 md:p-8 ${style['image-content']}`}>
          {children}
        </div>
      </div>
    </div>
  )
}