import React from 'react'
import {Link , useLocation} from 'react-router-dom'
import './HomeMainbar.css'
import Questions from './Questions'



const HomeMainbar = () => {
  const location = useLocation()
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <Link to='/AskQuestion' className='ask-btn'> Ask Question</Link>
      </div>
      <Questions /> 
    </div>
  )
}

export default HomeMainbar