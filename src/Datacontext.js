import React, { createContext , useState } from 'react'

export const dummy = createContext()

const Datacontext = (props) => {
    const[flagmodal, setFlagmodal]=useState(false)
    const[flagmodal1, setFlagmodal1]=useState(false)
    const[flagdrawer, setFlagdrawer]=useState(false)
    const[loginflag,setLoginFlag]=useState(false)
    const[userregistration,setUserregistration]=useState({
      name:"",
      mail:"",
      mobile:"",
      password:"",
      city:""
    });
    const[userlogin,setUserlogin]=useState({
      email:"",
      password:""
    });
    // const[flagforloginsignupmodal, setFlagforloginsignupmodal]=useState()
  return (
  <>
  <dummy.Provider value={{flagmodal, setFlagmodal , flagmodal1 ,setFlagmodal1 ,flagdrawer, setFlagdrawer,userregistration,setUserregistration ,userlogin,setUserlogin,loginflag,setLoginFlag}}>
{props.children}
  </dummy.Provider>
  </>
  )
}
export default Datacontext;

