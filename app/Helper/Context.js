'use client'
import React, { createContext } from 'react'

export const ContextData = createContext();

const Context = ({children}) => {
    let name = 'jp jp';
  return (
    <>
    <ContextData.Provider value={name}>
        {children}
    </ContextData.Provider>
    </>
  )
}

export default Context