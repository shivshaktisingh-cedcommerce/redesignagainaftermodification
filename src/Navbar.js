import React ,{useContext , useState} from 'react'
import "./Navbar.css"
import 'animate.css';
import {dummy} from "./Datacontext"

function Navbar(props) {
  const[x,setX]=useState(["x","y"])
  const user = useContext(dummy)

  const login_modal=()=>{
    user.setFlagmodal(true)
  }


  const logoutfun=()=>{
    user.userlogin.email="";
    user.userlogin.password="";
    user.setLoginFlag(false)
    setX([])
  }
  return (
    <> 
    <div id="navbar_main_div" className="animate__animated animate__backInLeft">
        <div id="div1_navbar"><a href="https://play.google.com/store/apps/details?id=io.ionic.way2doorapp"  id="click_here_btn_id">Download APP</a></div>
        <div id="div2_navbar"><i class="fa-solid fa-location-dot" id="map_icon"></i>Location: <select id="location_select"><option value="Lucknow (226010)" className> Lucknow (226010) </option></select></div>
        {user.userlogin.password.length===0?<div id="div3_navbar" onClick={login_modal}><i class="fa fa-user" aria-hidden="true" id="login_icon"></i></div>:<div id="div4_navbar" onClick={logoutfun} >Logout</div>   }
        <div id="eye_vision_div_id" ><button id="vision_button_id" onClick={()=>props.visionfun()}><i class="fas fa-low-vision"></i></button></div>

    </div>
    
    </>
  )
}
export default Navbar;
