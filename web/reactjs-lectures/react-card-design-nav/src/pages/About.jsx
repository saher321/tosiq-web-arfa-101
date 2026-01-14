import React from 'react'
import WebLayout from '../layouts/WebLayout'
import teams from '../resources/teams'
import TeamItem from '../components/TeamItem'

const About = () => {
  return (
    <WebLayout>
      <section className='m-5'>
        <div className='grid grid-cols-12 gap-3'>
          {
          teams.map((team) => {
            return (
              <div key={team.id} className='col-span-3'>
                <TeamItem team={team} />
              </div>
            )
          })
        }
        </div>
      </section>
    </WebLayout>
  )
}

export default About
