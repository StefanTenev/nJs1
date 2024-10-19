import React from 'react'
import Button from './Button'
import Calendar from './Calendar'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='py-4 md:py-12'>
      <h1 className='monospace text-5xl sm:text-6xl md:text-7xl text-center'>
      <span><span className='text-gradient'>BROODLE</span> IS BASED TO TRACK MOOD G</span>
      </h1>
      <p className='text-lg sm:text-xl md:text-2xl text-center'> 
        wawawiwa create mood record <span className='font-bold'>every day</span> gangster wawaiwa
      </p>
      <div className='grid grid-cols-1 gap-1 w-fit mx-auto'>
      <Link href={'/dashboard'}>
      <Button text='Login' />
      </Link>
      <Button text='Sign Up' />
      </div>
      <Calendar />
    </div>
  )
}
