import React, { useContext } from 'react'
import WebLayout from '../layouts/WebLayout'
import { MyContext } from '../context/ContextStore';

const Contact = () => {
  const data = useContext(MyContext);
  return (
    <WebLayout>
      <section>
        Contact page
        <div>{ data.name }</div>
      </section>
    </WebLayout>
  )
}

export default Contact
