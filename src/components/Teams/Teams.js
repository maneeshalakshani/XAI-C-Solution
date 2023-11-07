import React from 'react'
import { Stack } from '@mui/material'
import TeamCard from './TeamCard'



import Prasanna from '../../assets/images/prasanna.png'
import Shashini from '../../assets/images/shashini.png'
import Thilini from '../../assets/images/thilini.png'
import Maneesha from '../../assets/images/maneesha.png'
import Srinidee from '../../assets/images/srinidee.png'

function Teams() {
    const teamMembers = [
        { name: 'Prasanna Sumathipala', role: 'Supervisor', image: Prasanna },
        { name: 'Shashini Warnasooriya', role: 'Team Leader', image: Shashini },
        { name: 'Thilini Anjalika', role: 'Member', image: Thilini },
        { name: 'Maneesha Lakshani', role: 'Member', image: Maneesha },
        { name: 'Srinidee Munasinghe', role: 'Member', image: Srinidee },
    ];

    return (
        <div id='teams' className='teams-container'>
            <div className='center large-header'>
                Teams
            </div>
            <div>
                <Stack direction="row" spacing={10} className='teams-box'>
                    <TeamCard teamMembers={teamMembers} />

                </Stack>
            </div>
        </div>
    );
}

export default Teams;




