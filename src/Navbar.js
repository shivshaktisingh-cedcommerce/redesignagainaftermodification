import React ,{useContext} from 'react'
import "./Navbar.css"
import 'animate.css';
import {dummy} from "./Datacontext"

function Navbar(props) {
  const user = useContext(dummy)
  return (
    <> 
    <div id="navbar_main_div" className="animate__animated animate__backInLeft">
        <div id="div1_navbar"><a href="https://play.google.com/store/apps/details?id=io.ionic.way2doorapp"  id="click_here_btn_id">Download APP</a></div>
        <div id="div2_navbar"><i class="fa-solid fa-location-dot" id="map_icon"></i>Location: <select id="location_select"><option value="Lucknow (226010)"> Lucknow (226010) </option></select></div>
        <div id="div3_navbar" onClick={()=>{user.setFlagmodal(true)}}><i class="fa fa-sign-in" aria-hidden="true" id="login_icon"></i>Login</div> 
        <div id="div4_navbar" onClick={()=>{user.setFlagmodal(true)}}><i class="fa fa-paper-plane" aria-hidden="true" id="register_icon" ></i>Signup</div>  
    </div>
    
    </>
  )
}
export default Navbar;
