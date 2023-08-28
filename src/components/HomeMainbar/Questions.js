import React from 'react'
import { useGlobalContext } from './Context';
import likes from '../../assests/thumbs-up-regular.svg'
import messageregular from '../../assests/message-regular.svg'
import eye from '../../assests/eye-regular.svg'

const Questions = () => {
  const largerText = {
    fontSize: '15px', // Adjust the size as needed
  }
  const {items, isLoading} = useGlobalContext();
    if(isLoading) {
      return (
        <>
        <h1>Loading.....</h1>
        </>
      );
    }
    if ((!items || items.length === 0) ) {  
      return <div className='noSearch'> <h1>Search for the Title of the Question in the Search Bar </h1></div>;
    }
  return (
      <>
      {
      items.map((curPost) =>{
        
      return (
      <>
        <div>
          <div className='display-question-container'>
            <div className='display-votes-ans'>
              <div className='vote-icon'>
                <p className='value'>{curPost.score}</p>
                <p>Votes</p>
                <img src={likes} alt='likes' className='image-icon' />
              </div>
            </div>
            <div className='display-votes-ans'>
              <div className='answers-icon'>
                <p className='value'>{curPost.answer_count}</p>
                <p>Answers</p>
                <img src={messageregular} alt='messageregular' className='image-icon'/>
              </div>
            </div>
            <div className='display-votes-ans'>
              <div className='views-icon'>
                <p className='value'>{curPost.view_count}</p>
                <p>Views</p>
                <img src={eye} alt='eye' className='image-icon' />
              </div>
            </div>
            <div className='display-question-details'>
              <a href={curPost.link} target ="_blank" rel="noreferrer" className='question-title-link'> {curPost.title}</a>
              <div className='display-tags-time'>
                <div className='display-tags'>
                 <p style = {largerText} className='tags-data'> Tags:  {curPost.tags.join(', ')} </p>
                </div>
                <div className='display-time'>
                  <p className='postedBy'> Posted By <span> {curPost.owner.display_name}</span></p>
                </div> 
              </div>
            </div>
          </div>
        </div>
       </>
      );
        })   
  }
</>  
  )
    }
    
export default Questions