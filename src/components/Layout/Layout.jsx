import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
const Layout = () => {
  return (
    <div className='home'>
        <Sidebar/>
           <div className="homeContainer">
              <Outlet/>
           </div>
    </div>
  )
}

export default Layout