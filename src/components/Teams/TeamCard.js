import { Stack } from '@mui/material';
import React from 'react';

function TeamCard({ teamMembers }) {
    return (
        <Stack direction="row" spacing={5} className='teams-item'>
            {teamMembers.map((member, index) => (
                <div key={index}>
                    <img
                        src={member.image}
                        alt={member.name}
                        height={150}
                    />
                    <div>
                        <div className='medium-header'>
                            {member.name}
                        </div>
                        <div className='small-header'>
                            {member.role}
                        </div>
                    </div>
                </div>
            ))}
        </Stack>
    );
}

export default TeamCard



