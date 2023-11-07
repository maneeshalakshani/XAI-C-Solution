import { Stack } from '@mui/material'
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
      <Stack
        direction={{ xs: 'column',sm: 'row', md: 'row' }}
        spacing={{ xs: 2, sm: 2, md: 2 }}
        sx={{
          marginTop: '20px'
        }}
      >
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
            isLast={true}
        />
      </Stack>
    </div>
  )
}

export default ResearchObjective


function ResearchGapBox({text, title, isLast}) {
  return (
    <div className='domain-small-content-box' style={isLast === false ? { marginRight: '10px' } : {}}>
        <h3>{title}</h3>
        {text}
    </div>
  )
}
