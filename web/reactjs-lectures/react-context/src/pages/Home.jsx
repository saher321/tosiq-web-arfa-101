
import { useContext } from 'react'
import WebLayout from '../layouts/WebLayout'
import { MyContext } from '../context/ContextStore'

const Home = () => {
  const data = useContext(MyContext);
  return (
    <WebLayout>
      <section>
        Home page
        <div>{data.userInfo?.id} - {data.name}</div>
        <div>
          <button onClick={data.showValueInConsole}>Print value</button>
        </div>
      </section>      
    </WebLayout>
  )
}

export default Home
