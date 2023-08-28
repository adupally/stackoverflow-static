import React from 'react'

import '../../App.css'

import LeftSidebar from '../LeftSidebar/LeftSidebar';
import HomeMainbar from '../HomeMainbar/HomeMainbar';
import RightSidebar from '../RightSidebar/RightSidebar';
import Navbar from '../Navbar/Navbar';

import {AppProvider} from '../HomeMainbar/Context';
import BottomNavBar from '../BottomNavBar/BottomNavBar';



const Home = () => {
  return (
    
    <AppProvider>
      <Navbar />
  <div className="home-container">
  <div className='home-container-1'>
    <LeftSidebar /> 
  </div>
  <div className='home-container-2'>
    <div className='home-mainbar'>
      <HomeMainbar />
    </div>
    <div className='right-sidebar'>
      <RightSidebar />
    </div>
  </div>
  
</div>
<BottomNavBar />
</AppProvider>

  )
}

export default Home