import React, { createContext , useState } from 'react'

export const dummy = createContext()

const Datacontext = (props) => {
    const[flagmodal, setFlagmodal]=useState(false)
    const[flagmodal1, setFlagmodal1]=useState(false)
  return (
  <>
  <dummy.Provider value={{flagmodal, setFlagmodal , flagmodal1 ,setFlagmodal1}}>
{props.children}
  </dummy.Provider>
  </>
  )
}
export default Datacontext;

