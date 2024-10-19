import React from 'react'
import Button from './Button'
import Input from './Input'
import Link from 'next/link'

export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
        <h3 className='text-4xl sm:text-5xl md:text-6xl'>Login / Register</h3>
        <p>You&#39;re 1 step away from being a kukk</p>
        <div className='grid gap-3 ' >
            <Input>
                Username
            </Input>
            <Input>
                Password
            </Input>
        </div>
        
        <Button text="LOGIN"/>
        <p>Don&#39;t have an account? <Link href={'/register'}><span className='text-blue-900 cursor-pointer hover:text-blue-950'>Sign up</span></Link></p>
    </div>
  )
}
