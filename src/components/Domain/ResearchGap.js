import React from 'react'

function ResearchGap({title, text1, text2, text3, text4}) {
  return (
    <div>
      <div className='medium-header' style={{color:'white'}}>
        {title}
      </div>
      <div style={{ display: 'flex' }}>
        <ResearchGapBox
            text={text1}
            title={text1.split('-')[0]}
            isLast={false}
        />
        <ResearchGapBox
            text={text2}
            title={text2.split('-')[0]}
            isLast={false}
        />
        <ResearchGapBox
            text={text3}
            title={text3.split('-')[0]}
            isLast={false}
        />
        <ResearchGapBox
            text={text4}
            title={text4.split('-')[0]}
            isLast={false}
        />
      </div>
    </div>
  )
}

export default ResearchGap


function ResearchGapBox({text, title, isLast}) {
  return (
    <div className='domain-small-content-box' style={isLast === false ? { marginRight: '10px' } : {}}>
        <h3>{title}</h3>
        {text}
    </div>
  )
}

