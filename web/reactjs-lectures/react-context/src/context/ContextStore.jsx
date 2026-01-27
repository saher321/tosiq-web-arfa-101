import React, { createContext, useState } from 'react'

export const MyContext = createContext();

const ContextStore = ({ children }) => {

  const [userInfo, setUserInfo] = useState(null)

  let APP_NAME = "Context";
  let name = "Tayyab";

  const showValueInConsole = () => {
    console.log("New Value from Context store")
    setUserInfo({id: 1, name})
  }
  
  return (
    <MyContext.Provider value={{APP_NAME, name, showValueInConsole, userInfo}}>
      { children }
    </MyContext.Provider>
  )
}

export default ContextStore
