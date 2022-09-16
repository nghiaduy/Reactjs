import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Nav from '../Nav'

const index = () => {
  return (
    <div className="content-app">
      <div className="content-body">
        <div className="sidebar" >
            <Sidebar />
        </div>
        <div className="content">
            <div class="nav">
                <Nav/>
            </div>
            <div className="grid-item">
                <Outlet />
            </div>
        </div>
      </div>
    </div>
  )
}

export default index