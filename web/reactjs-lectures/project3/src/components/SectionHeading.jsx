import React from 'react'

const SectionHeading = ({ isActive, title }) => {
  return (
    <>
    {
        isActive && <div className='m-2 p-2 w-fit bg-green-900 text-white rounded'>
                    {title}
                </div>
    }
    </>
  )
}

export default SectionHeading
