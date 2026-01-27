import React, { createContext } from 'react'

export const MyContext = createContext();

const ContextStore = ({ children }) => {

  let name = "Tayyab";
  
  return (
    <MyContext.Provider value={name}>
      { children }
    </MyContext.Provider>
  )
}

export default ContextStore
