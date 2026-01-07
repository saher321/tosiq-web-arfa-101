import React from 'react'
import SectionHeading from './components/SectionHeading'
const App = () => {
  return (
    <>
    {/* <h1 style={{color: "red", backgroundColor: "yellow"}} className='heading'>This is my app component</h1>       */}


    <div className='shadow text-2xl text-gray-600 bg-white w-fit p-3 m-4 rounded-lg border-l-2 border-l-lime-500'>
        Hello Mike, Good evening!
    </div>

    <SectionHeading isActive={false} title="Services" />
    <SectionHeading isActive={true} title="Teams"  />
    <SectionHeading isActive={false} title="Project"  />
    <SectionHeading isActive={true} title="Feedbacks"  />
    </>
  )
}

export default App
