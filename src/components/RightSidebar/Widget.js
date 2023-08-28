import React from 'react'
import'./RightSidebar.css'
// import comment from '../../assests/comment-solid.svg'
import pen from '../../assests/pen-solid.svg'
import bookmark from '../../assests/bookmark-solid.svg'
import message from '../../assests/message-solid.svg'

import background from '../../assests/stack-overflow.svg'
const Widget = () => {
  return (
    <div className='main-widget'>
    <div className='widget'>
        <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt='pen' className='pen' />
                    <p>If you want to address tech debt, quantify it first</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={pen}alt='pen' className='pen'/>
                    <p>Fighting comment spam at Facebook scale (Ep. 602)</p>
                </div>
            </div>

        <h4>Feature on meta</h4>
        <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={background} alt='backgroundimage' className='background' />
                    <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
                </div>
                <div className='right-sidebar-div-2'>
                        <img src={background} alt='backgroundimage' className='background' />
                        <p>Discussions experiment launching on NLP Collective</p>
                </div>
                <div className='right-sidebar-div-2'>
                        <img src={background} alt='backgroundimage' className='background' />
                        <p>Call for volunteer reviewers for an updated search experience: OverflowAI Search</p>
                </div>     
        </div>

        <h4>Hot Network Questions</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={bookmark} alt='bookmark' className='hotnetwork' />
                <p>An English word describing a pseudo-job</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={background} alt='background' className='hotnetwork'  />
                <p>Why does everybody typedef over standard C types?</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={message} alt='message' className='hotnetwork'  />
                <p>Were there women who were against giving womenthe right to vote ?</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Widget