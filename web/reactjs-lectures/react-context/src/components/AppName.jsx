import React, { useContext } from 'react'
import { MyContext } from '../context/ContextStore'
const AppName = () => {

  const data = useContext(MyContext);

  return (
    <>
      {data.APP_Name}
    </>
  )
}

export default AppName
