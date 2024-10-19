import React from 'react'
import Button from '../A1NonPage/components/Button'
import Input from '../A1NonPage/components/Input'

export default function RegisterPage() {
    return (
        <div className='flex flex-col flex-1 justify-center items-center gap-4'>
            <h3 className='text-4xl sm:text-5xl md:text-6xl'>Login / Register</h3>
            <p>You&#39;re 1 step away from being a kukk</p>
            <div className='grid gap-3 ' >
                <Input>
                    Email
                </Input>
                <Input>
                    Username
                </Input>
                <Input>
                    Password
                </Input>
            </div>
            
            <Button text="REGISTER"/>
        </div>
      )
    }
