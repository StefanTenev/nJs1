import React from 'react'
import Dashboard from '../A1NonPage/components/Dashboard'
import Main from '../A1NonPage/components/Main'
import Login from '../A1NonPage/components/Login'

export default function DashboardPage() {

    const isAuthenticated = false

    const children = isAuthenticated ? (<Dashboard />) : (<Login />)


  return (
    <Main>
        {children}
    </Main>
  )
}
