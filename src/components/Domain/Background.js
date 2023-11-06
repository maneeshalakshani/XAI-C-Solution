import React from 'react'

function Background({title, text}) {
  return (
    <div>
      <div className='medium-header' style={{color:'white'}}>
        {title}
      </div>
      <div className='domain-content-box domain-content-box-bg'>
        {text}
      </div>
    </div>
  )
}

export default Background
