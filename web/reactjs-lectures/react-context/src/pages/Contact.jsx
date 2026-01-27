import React, { useContext } from 'react'
import WebLayout from '../layouts/WebLayout'
import { MyContext } from '../context/ContextStore';

const Contact = () => {
  let myname = useContext(MyContext);
  return (
    <WebLayout>
      <section>
        Contact page
        <div>{ myname }</div>
      </section>
    </WebLayout>
  )
}

export default Contact
