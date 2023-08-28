import React from 'react'

const WidgetTags = () => {

  const tags = ['C','C++','Python','Java','HTML','CSS','Javascript','React.js','Angular.js','API']
  return (
    <div className='widget-tags'>
      <h4>Watched Tags</h4>
      <div className='widget-tags-div'>
        {
          tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))
        }

      </div>
    </div>
  )
}

export default WidgetTags