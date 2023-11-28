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
          title={'Research Paper Publication'}
          content={'The research paper, titled "Counterfactual Explanations for Commonly Used Text Classifiers focusing on Review Classification," delves into the realm of Explainable Artificial Intelligence (XAI). Published in the Asia-Pacific Conference on Computer Science and Data Engineering 2023, the paper explores innovative approaches to providing counterfactual explanations specifically tailored for text classifiers commonly used in review classification tasks. With an H index of 12, the paper contributes to the growing body of knowledge in XAI, aiming to enhance the transparency and interpretability of text classification models. This research holds significance for improving user understanding of AI-driven decision-making processes, particularly in applications where accurate interpretation is vital, such as sentiment analysis in reviews.'}
        />
        {/* <AchievementCard
          title={'Achievement 1'}
          content={'srtuhk sitho; sriths rhiser;h hi;s/r euhjile a.eirh aehuarth rsjth.skrtih srthsrt'}
        /> */}
      </Stack>
      {/* <Stack 
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
      </Stack> */}
    </div>

  )
}

export default Achievements
