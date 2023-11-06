import React from 'react'

function ResearchObjective({title, description, text1, text2, text3, text4}) {
  return (
    <div>
      <div className='medium-header' style={{color:'white'}}>
        {title}
      </div>
      <div className='domain-content-box'>
        {description}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='domain-small-content-box' style={{ marginRight: '10px' }}>
            {text1}
        </div>
        <div className='domain-small-content-box' style={{ marginRight: '10px' }}>
            {text2}
        </div>
        <div className='domain-small-content-box' style={{ marginRight: '10px' }}>
            {text3}
        </div>
        <div className='domain-small-content-box'>
            {text4}
        </div>
      </div>
    </div>
  )
}

export default ResearchObjective
