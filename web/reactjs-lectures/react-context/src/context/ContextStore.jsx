import React, { createContext } from 'react'

export const MyContext = createContext();

const ContextStore = ({ children }) => {

  let APP_NAME = "Context";
  let name = "Tayyab";
  
  return (
    <MyContext.Provider value={{APP_NAME, name}}>
      { children }
    </MyContext.Provider>
  )
}

export default ContextStore
