import React from 'react'

const TeamItem = ({ team }) => {
    return (
        <div className='shadow rounded-lg p-3'>
            <div className='flex items-center justify-center'>
                <img className='shadow rounded-full h-16 w-16' src={team.profileImage} alt="" />
            </div>
            <div className='text-center font-bold'>
                {team.name}
                <div className='text-gray-500 font-normal text-sm'>{team.designation}</div>
            </div>

            <div className='text-gray-500 text-sm text-center italic font-bold'>
                {team.email}
            </div>
        </div>
    )
}

export default TeamItem
