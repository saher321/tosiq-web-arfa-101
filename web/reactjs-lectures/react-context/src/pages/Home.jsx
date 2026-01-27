
import { useContext } from 'react'
import WebLayout from '../layouts/WebLayout'
import { MyContext } from '../context/ContextStore'

const Home = () => {
  const data = useContext(MyContext);
  return (
    <WebLayout>
      <section>
        Home page
        <div>{data.name}</div>
      </section>      
    </WebLayout>
  )
}

export default Home
