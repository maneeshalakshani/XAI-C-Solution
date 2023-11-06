import React from 'react'
import ToolsButton from './ToolsButton'
import Stack from '@mui/material/Stack';

function ToolsAndTechnologies() {
  return (
    <div id='tools' className='tools-container'>
      <div className='center medium-header tools-header'>
        Tools & Technologies
      </div>
      <Stack spacing={2} direction="row" sx={{marginTop: '50px'}}>
        <ToolsButton title={'NextJS'} url={'https://nextjs.org/'}/>
        <ToolsButton title={'Python'} url={'https://www.python.org/'}/>
        <ToolsButton title={'Google Colab'} url={'https://colab.research.google.com/?utm_source=scs-index'}/>
        <ToolsButton title={'JavaScript'} url={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'}/>
      </Stack>
      <Stack spacing={2} direction="row" sx={{marginTop: '50px'}}>
        <ToolsButton title={'Material UI'} url={'https://mui.com/'}/>
      </Stack>
    </div>
  )
}

export default ToolsAndTechnologies
