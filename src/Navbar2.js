import React ,{useContext} from 'react'
import "./Navbar2.css"
import 'animate.css';
import {dummy} from "./Datacontext"


export default function Navbar2(props) {
  const user = useContext(dummy)


    window.onscroll = myScroll;

    function myScroll(){
      
    }
    const opendrawerfun=()=>{
      user.setFlagdrawer(true)
    }
  return (
      <>
    <div id="navbar2_main_div">
        <div id="navbar2_logo_div_id"><img src="way2door-min.png" alt="" id="img_logo_id"/></div>
        <div id="navbar2_content_div_id">Today's order will be delivered tomorrow. सबसे सस्ता और सबसे अच्छा.</div>
        <div id="navbar2_cart_div_id"><i class="fa-brands fa-opencart" id="cart_icon_id" onClick={opendrawerfun}><sup id="cart_items_length">{props.cart.length}</sup></i></div>
    </div>
    <hr/>
    <div id="offer_div_id"><img src="offer1.jpg" alt="" id="offer_image_id"/>
    <p id="p_id" className="animate__animated animate__flash">Additional 10% off on order over Rs. 2000 </p>
    <p id="arrowdown_p_id"><i class="fas fa-arrow-down animate__animated animate__infinite	infinite animate__shakeY"></i></p>
    <p id="btn_p_id"><a href="#category_main_div" id="shop_now_btn">Shop Now</a></p>
    <p id="order_timing_p_id">Order Timing : 8:00 am To 6:00 pm </p>
    </div>
    </>
  )
}
