import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

function Entry() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Entry