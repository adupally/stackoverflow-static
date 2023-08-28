import React from 'react'
import './LeftSidebar.css'
import {NavLink} from "react-router-dom"
import tagssvg from '../../assests/tag-svgrepo-com.svg'
import users from '../../assests/users-group-rounded-svgrepo-com.svg'



const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className="side-nav-links" activeClass="active">
                <p className='home'>Home</p>
            </NavLink>
        <div classsName="side-nav-div">
            <div ><p className='public'> PUBLIC</p>
            </div>
        
            <NavLink to='/Questions' className="side-nav-links" activeClass="active">
                <p>🌐</p><p style = {{paddingLeft:"10px"}}>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className="side-nav-links" activeClass="active" >
                <img src={tagssvg} alt='tagssvg'  className='figures'/>
                <p className='tags'>Tags</p>
            </NavLink>
            <NavLink to='/Users' className="side-nav-links" activeClass="active" >
                <img  src={users} alt='users' className='figures'/>
                <p className='tags'>Users</p>
            </NavLink>
        
                </div>
        </nav>

    </div>
  )
}

export default LeftSidebar