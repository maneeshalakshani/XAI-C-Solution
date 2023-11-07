import React from 'react'
import { Stack } from '@mui/material'
import TeamCard from './TeamCard'

import Prasanna from '../../assets/images/prasanna.png'
import Jeewaka from '../../assets/images/Jeewaka.png'
import Shashini from '../../assets/images/shashini.png'
import Thilini from '../../assets/images/thilini.png'
import Maneesha from '../../assets/images/maneesha.png'
import Srinidee from '../../assets/images/srinidee.png'

function Teams() {
    const teamMembersSupervisors = [
        { name: 'Prasanna Sumathipala', role: 'Supervisor', image: Prasanna },
        { name: 'Jeewaka Perera', role: 'Co - Supervisor', image: Jeewaka },
    ];
    const teamMembers = [
        { name: 'Sashini Warnasooriya', role: 'Team Leader', image: Shashini },
        { name: 'Thilini Anjalika', role: 'Member', image: Thilini },
        { name: 'Maneesha Lakshani', role: 'Member', image: Maneesha },
        { name: 'Srinidee Munasinghe', role: 'Member', image: Srinidee },
    ];

    return (
        <div id='team' className='teams-container'>
            <div className='center large-header'>
                Our Team
            </div>
            <div>
                <Stack direction="row" spacing={4} className='teams-box'>
                    {teamMembersSupervisors.map((doc, index) => (
                        <TeamCard key={index} name={doc.name} role={doc.role} image={doc.image} />
                    ))}
                </Stack>
                <Stack direction="row" spacing={4} className='teams-box'>
                    {teamMembers.map((doc, index) => (
                        <TeamCard key={index} name={doc.name} role={doc.role} image={doc.image} />
                    ))}
                </Stack>
            </div>
        </div>
    );
}

export default Teams;




