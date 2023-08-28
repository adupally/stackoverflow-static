import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
import Search from '../../assests/magnifying-glass-solid.svg'
import Avatar from "../Avatar/Avatar"
import Button from "../Button/Button"
import { useGlobalContext } from '../HomeMainbar/Context';

const Navbar = () => {
  let { title, searchPost } = useGlobalContext();
  var User = null
  return( 
  
    <nav className='main-nav'>
    <div className = "navbar">
      <Link to='/' className="nav_item nav-logo">
        <img src="https://www.ranklogos.com/wp-content/uploads/2015/06/Stack-Overflow-Logo.png" alt="logo" width="200" />
      </Link>
      <Link to="/" className='nav-item nav-btn'>Abouts</Link>
      <Link to="/" className='nav-item nav-btn'>Products</Link>
      <Link to="/" className='nav-item nav-btn'>For Teams</Link>
      <form onSubmit={(e) => e.preventDefault()} >
        <input type="text" placeholder='Search...' value={title === "Angular" ? "" : title} onChange={(e) => searchPost(e.target.value)}  />
        
        <img src={Search} alt='search' width="18" className='search-icon'/>
      </form>
      {User === null ? 
      <Link to='/Auth' className='nav-item nav-links'>login</Link> :
      <>
      <Link to='/'> <Avatar>M</Avatar></Link>
      <Button className="nav-item nav-links"> Logout</Button>
      </>  

    }
      
    </div>
    </nav>
  ); 
}

export default Navbar