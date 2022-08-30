import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div id="navbar_main_div">
        <div id="div1_navbar"><a href="https://play.google.com/store/apps/details?id=io.ionic.way2doorapp" target="_blank" id="click_here_btn_id">Download APP</a></div>
        <div id="div2_navbar"><i class="fa-solid fa-location-dot" id="map_icon"></i>Delivery Location : Lucknow (226010) </div>
        <div id="div3_navbar"><i class="fa fa-sign-in" aria-hidden="true" id="login_icon"></i>Login</div> 
        <div id="div4_navbar"><i class="fa fa-paper-plane" aria-hidden="true" id="register_icon"></i>Signup</div>  
    </div>
  )
}
