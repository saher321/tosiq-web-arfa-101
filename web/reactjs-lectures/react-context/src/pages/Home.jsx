
import { useContext } from 'react'
import WebLayout from '../layouts/WebLayout'
import { MyContext } from '../context/ContextStore'

const Home = () => {
  let myname = useContext(MyContext);
  return (
    <WebLayout>
      <section>
        Home page
        <div>{myname}</div>
      </section>      
    </WebLayout>
  )
}

export default Home
