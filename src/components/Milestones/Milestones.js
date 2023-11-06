import React from 'react'
import ColorsTimeline from './TimelineCustom'

function Milestones() {
  return (
    <div id='milestones' className='milestones-container'>
      <div className='center large-header'>
        Milestones
      </div>
      <div style={{width: '80%', marginLeft: '10%'}}>
        <ColorsTimeline />
      </div>
    </div>
  )
}

export default Milestones
