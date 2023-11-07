import React from 'react';

function TeamCard({name, role, image}) {
    return (
        <div className='teams-item'>
            <img
                src={image}
                alt={name}
                height={150}
            />
            <div>
                <div className='small-header'>
                    {name}
                </div>
                <p>
                    {role}
                </p>
            </div>
        </div>
    );
}

export default TeamCard



