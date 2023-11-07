import { Stack } from '@mui/material'
import React from 'react'

import Badge from '../../assets/images/badge.png'

function AchievementCard({ content, title }) {
    return (
        <Stack direction="row" spacing={5} className='achievements-item'>
            <img
                src={Badge}
                alt='badge'
                height={150}
            />
            <div>
                <div className='medium-header'>
                    {title}
                </div>
                <div className='small-header'>
                    {content}
                </div>
            </div>

        </Stack>
    )
}

export default AchievementCard
