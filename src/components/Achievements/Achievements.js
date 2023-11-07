import React from 'react'
import { Stack } from '@mui/material'
import AchievementCard from './AchievementCard'

function Achievements() {
  return (
    <div id='achievements' className='achievements-container'>
      <div className='center large-header'>
        Achievements
      </div>
      <Stack 
        direction={{ sm: 'column', md: 'row' }}
        spacing={{ sm: 2, md: 10 }}
        className='achievements-box'
      >
        <AchievementCard
          title={'Achievement 1'}
          content={'srtuhk sitho; sriths rhiser;h hi;s/r euhjile a.eirh aehuarth rsjth.skrtih srthsrt'}
        />
        <AchievementCard
          title={'Achievement 1'}
          content={'srtuhk sitho; sriths rhiser;h hi;s/r euhjile a.eirh aehuarth rsjth.skrtih srthsrt'}
        />
      </Stack>
      <Stack 
        direction={{ sm: 'column', md: 'row' }}
        spacing={{ sm: 2, md: 10 }}
        className='achievements-box'
      >
        <AchievementCard
          title={'Achievement 1'}
          content={'srtuhk sitho; sriths rhiser;h hi;s/r euhjile a.eirh aehuarth rsjth.skrtih srthsrt'}
        />
        <AchievementCard
          title={'Achievement 1'}
          content={'srtuhk sitho; sriths rhiser;h hi;s/r euhjile a.eirh aehuarth rsjth.skrtih srthsrt'}
        />
      </Stack>
    </div>

  )
}

export default Achievements
