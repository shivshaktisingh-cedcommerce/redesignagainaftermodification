import React ,{useState , useEffect, useContext}from 'react'
import "./Products.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {data} from "./Data";
import { Button, Drawer } from '@mui/material'
import 'animate.css';
import Modal from '@mui/material/Modal';
import {dummy} from "./Datacontext"

export default function Products(props) {
    const [age, setAge] = useState('');
    const [displayitem,setDisplayitem]=useState(data);
    const[registermessage,setRegistermessage]=useState("")
    const[loginmessage,setLoginmessage]=useState("")


    const register=(event)=>{
     
      user.setUserregistration({...user.userregistration, [event.target.name]:event.target.value})
   }

   const loginfun=(event)=>{
    user.setUserlogin({...user.userlogin, [event.target.name]:event.target.value})
  }

  const login_fun=()=>{
   if(user.userregistration.mail===user.userlogin.email && user.userregistration.password ===user.userlogin.password){
      user.setFlagmodal(false)
      user.setLoginFlag(true)
   }
   else if(user.userregistration.mail !==user.userlogin.email || user.userregistration.password !==user.userlogin.password){
     setLoginmessage("!!!Wrong Credentials")
     user.setLoginFlag(false)
   }
   else if(user.userlogin.email === "" || user.userlogin.password ===""){
    setLoginmessage("!!!Wrong Credentials")
    user.setLoginFlag(false)
  }
  }

  const checkout_fun=()=>{
    if(user.loginflag===false){
      user.setFlagdrawer(false)
      user.setFlagmodal(true)
    }
    if(user.loginflag===true){
      user.setFlagdrawer(false)
      user.setFlagmodal1(true)
      props.setThanksmessage("")
    }
    
  }
 

   const register_fun=(e)=>{
    e.preventDefault()
    let name = e.target.name.value;
    let mobile = e.target.mobile.value
    let mail = e.target.mail.value;
    let password = e.target.password.value
    let city = e.target.city.value
      if(mobile.length!==10){
       setRegistermessage("Correct your mobile number")
      }
      else if(password.length<6){
        setRegistermessage("Password must be greater than 6 ")
       }
       else{
        setRegistermessage('')
        user.setUserregistration({...user.userregistration, name , mail , mobile , password , city})
        setLoginmessage("")
        document.getElementById("box_id").style.display="none";
        document.getElementById("box_id1").style.display="block";
       }
   }


  const user = useContext(dummy)
  
    const handleChange = (event) => { 
        setAge(event.target.value);
        if(event.target.value==="Low to High"){
            displayitem.sort(function(a, b){return a.sellprice - b.sellprice});
          }
        if(event.target.value==="High to Low"){
           displayitem.sort(function(a, b){return b.sellprice - a.sellprice});
        }
        setDisplayitem(displayitem)
      };


      const handleChange1 = (event) => {
        var temp=[]
         
          if(event.target.id==="search_input_id"){
            var x = event.target.value;
            data.map((d)=>{
              var x1 = d.title.toUpperCase()
              if(x1.includes(x.toUpperCase())){
                temp.push(d)
              } 
            })
            setDisplayitem(temp)
        
          }
        }

        const login_now_fun=()=>{
          setLoginmessage("")
          setRegistermessage("")
          document.getElementById("box_id").style.display="none"
          document.getElementById("box_id1").style.display="block"
        }
        const register_now_fun=()=>{
          setLoginmessage("")
          setRegistermessage("")
          document.getElementById("box_id").style.display="block"
          document.getElementById("box_id1").style.display="none"
        }

      const category_select_fun=(event)=>{
        var z =[]
        if(event.target.id==="category_main_fruits"){
          document.getElementById("category_main_mixed").setAttribute("style","background-color:none")
          document.getElementById("category_main_fruits").setAttribute("style","background-color:green")
          document.getElementById("category_main_vegetables").setAttribute("style","background-color:none")
          document.getElementById("category_main_nonveg").setAttribute("style","background-color:none")
          data.map((d)=>{
            if(d.type==="fruits")
            z.push(d)
          })
        }
        if(event.target.id==="category_main_vegetables"){
          document.getElementById("category_main_mixed").setAttribute("style","background-color:none")
          document.getElementById("category_main_fruits").setAttribute("style","background-color:none")
          document.getElementById("category_main_vegetables").setAttribute("style","background-color:green")
          document.getElementById("category_main_nonveg").setAttribute("style","background-color:none")
          data.map((d)=>{
            if(d.type==="vegetables")
            z.push(d)
          })
        }
        if(event.target.id==="category_main_nonveg"){
          document.getElementById("category_main_mixed").setAttribute("style","background-color:none")
          document.getElementById("category_main_fruits").setAttribute("style","background-color:none")
          document.getElementById("category_main_vegetables").setAttribute("style","background-color:none")
          document.getElementById("category_main_nonveg").setAttribute("style","background-color:green")
          data.map((d)=>{
            if(d.type==="nonveg")
            z.push(d)
          })
        }
        if(event.target.id==="category_main_mixed"){
          document.getElementById("category_main_fruits").setAttribute("style","background-color:none")
          document.getElementById("category_main_vegetables").setAttribute("style","background-color:none")
          document.getElementById("category_main_nonveg").setAttribute("style","background-color:none")
          document.getElementById("category_main_mixed").setAttribute("style","background-color:green")
          data.map((d)=>{
        
            z.push(d)
          })
        }


        setDisplayitem([...z])
      }

      
  return (
    <div id="Products_page_main_div">
        <div id="category_main_div">
          <div className="mainContent">
            <p className="category_main_div1">LUCKNOW VEG EXPRESS</p>
            <p className="category_main_div1"><i class="fa fa-star star_icon" aria-hidden="true"></i><i class="fa fa-star star_icon" aria-hidden="true"></i><i class="fa fa-star star_icon" aria-hidden="true"></i><i class="fa fa-star star_icon" aria-hidden="true"></i><i class="fa fa-star star_icon" aria-hidden="true"></i></p>
            <p className="category_main_div1">Average 3.5 / 5</p>
            <p id="category_main_mixed" onClick={category_select_fun} >All</p>
            <p id="category_main_fruits" onClick={category_select_fun} >Fruits</p>
            <p id="category_main_vegetables" onClick={category_select_fun} >Vegetables</p>
            <p id="category_main_nonveg" onClick={category_select_fun} >Non Veg</p>
          </div>
        </div>
        <div id="category_main_div_products">
            <div id="sort_search_div">
                  <Box id="box1_dropdown_id">
                   <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sort By:Price</InputLabel>
                    <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={age}
                     label="Sort By:"
                     onChange={handleChange}
        >
          <MenuItem value="High to Low">High to Low</MenuItem>
          <MenuItem value="Low to High">Low to High</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <div id="search_div_id"><input type="text" id="search_input_id" onChange={handleChange1}/><SearchOutlinedIcon id="search_icon"/></div>
    <div id="cart2_div_id"><i class="fa-brands fa-opencart" id="cart_icon_id" onClick={()=>user.setFlagdrawer(true)}></i><sup id="cart_items_length">{props.cart.length}</sup></div>
   
    </div>
    <div id="display_products_div">
    {displayitem.length===0?<div id="repetitive_display_div_id1">
      <img src="https://media.giphy.com/media/26xBIygOcC3bAWg3S/giphy.gif" alt="" id="no_product_found_gif" /><p id="product_not_found_p_id">Sorry! No product found</p>
                
            </div>:displayitem.map((d)=>{
        return(
            <div id="repetitive_display_div_id">
                <div id="display_image_div_id"><img src={d.image} alt="" id="display_image_id" className="zoom"/>
                <span id="savepercent_span_id">{d.savpercent}%</span>
                <p id="p_title_id">{d.title}</p>
                <p id="p_price_quantity"><span>{d.quantity1}{d.measure}</span><span><del style={{color:"red"}}>Rs.{d.listprice}</del></span>Rs.{d.sellprice}<span></span></p>
                <p id="p_btn_id"><button id="add_to_cart_btn_id" onClick={()=>props.add_to_cart_fun(d)}>Add to cart</button></p>
                </div>
            </div>
        )
    })}
    </div>
        </div>

        <Drawer
         open={user.flagdrawer}
         anchor='right'
         onClose = {()=>user.setFlagdrawer(false)}
        >
            <Button variant='contained' onClick={()=>user.setFlagdrawer(false)} id="close_drawer_btn_id" className="animate__animated animate__jackInTheBox">x</Button>
           <div id="cart_products" className="animate__animated animate__backInRight ">   
           {props.cart.length===0?<div id="gif_div_id"><img src ="https://hakimitr.com/assets/website/images/empty-cart.gif" id="gif_id" alt="" /></div>:""}
           {props.cart.length===0?<p id="empty_cart_message">Your cart is empty</p>:""}
           {props.cart.length!==0?<p id="tagline_p_your_cart_items">Your cart Items</p>:""}
           {props.cart.map((d  , i)=>{
              return (<div id="repetitive_cart_div1">
                  <div id="repetitive_cart_div">
                  <div id="cart_image_div"><img src={d.image} alt="" id="cart_image_id"/>
                  <p id="cart_product_title">{d.title}</p></div>
                  <div id="button_div_id"><button onClick={()=>props.increasequantfun(d)} className="increment_btn_id_add"><i class="fa-solid fa-arrow-up"></i></button><button className="increment_btn_id_quant">{d.quantity} {d.measure}</button><button onClick={()=>props.decreasequantfun(d , i)} className="increment_btn_id_decrease"><i class="fa-solid fa-arrow-down"></i></button>
                  <p id="amt_p_id"> Rs. {d.total}</p>
                  <p><i class="fa fa-trash del_icon" aria-hidden="true" onClick={()=>props.delete_fun(i)}></i></p>
                  </div>
                  </div>
                  <p id="quantityprice_p_id">{d.quantity1}{d.measure} = Rs. {d.sellprice}</p>
                  </div>) 
           })}
          {props.cart.length>0? <p id="total_amount">Total Amount Rs. {props.totalamount}</p>:""} 
          {props.cart.length>0?<p id="p_amt"><button id="checkout_btn" onClick={checkout_fun}>Checkout</button></p>:""}
          </div>
        </Drawer >
        <Modal
        open={user.flagmodal}
        onClose={()=>{user.setFlagmodal(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        id="modal_id"
        className="animate__animated animate__backInDown"
     
      >
        <div>
        <div id="box_id">
          <p id="register_message_p">{registermessage}</p>
          <form onSubmit={register_fun}>
       <p className="register_input_p"><TextField title="Your name" id="outlined-basic" label="Name" variant="outlined"  name="name" required/></p> 
       <p className="register_input_p"><TextField title="Your Mobile Number" id="outlined-basic" label="Mobile number" variant="outlined" name="mobile"  type="number" required /></p> 
       <p className="register_input_p"><TextField title="enter your mail" id="outlined-basic" label="Email" variant="outlined"  name="mail" type="email" required/></p> 
       <p className="register_input_p"><TextField title="enter your password" id="outlined-basic" label="Password" variant="outlined"  name="password" type="password" required/></p> 
       <p className="register_input_p"><TextField title="enter your city" id="outlined-basic" label="City" variant="outlined"  name="city" required/></p> 
       <p className="register_input_p"><Button variant="contained"  type="submit">Register</Button></p> 
       </form>
       <p className="register_input_p">If you have Already Way2door an Account then <br/><button onClick={login_now_fun} id="login_now_btn_id">Login Now</button></p>
       <p className="close_modal_btn"><Button variant="outlined" color="error" onClick={()=>{user.setFlagmodal(false)}}>X</Button></p>
         
        </div>
      <div id="box_id1">
      <p id="register_message_p">{loginmessage}</p>
       <p className="register_input_p"><TextField id="outlined-basic" label="Email" variant="outlined" name="email" onChange={loginfun}/></p> 
       <p className="register_input_p"><TextField id="outlined-basic" label="Password" variant="outlined" name="password" onChange={loginfun}/></p> 
       <p className="register_input_p"><Button variant="contained" onClick={login_fun}>Login</Button></p> 
       <p className="register_input_p">New to Way2door ?<button onClick={register_now_fun} id="login_now_btn_id">Sign Up</button></p>
       <p className="close_modal_btn"><Button variant="outlined" color="error" onClick={()=>{user.setFlagmodal(false)}}>X</Button></p>   
        </div>
        </div>
      </Modal>
      <Modal
        open={user.flagmodal1}
        onClose={()=>user.setFlagmodal1(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        id="modal_id_new"
     
      >
      
        <div id="box_id_new">
          <p id="billing_details_id">Billing Details</p>
          <p id="thanks_id">{props.thanksmessage}</p>
          <table id="tab">
          {props.cart.map((e  , i)=>{
            return (
              <tr><td>{e.title}</td><td>{e.quantity} kg</td><td> Rs {e.total}</td></tr>
            )
          })}
          <tr><td colSpan={2}>Total Amount</td><td>Rs {props.totalamount}</td></tr>
          <tr><td colSpan={2}>After 10% discount</td><td>Rs {props.finalamount}</td></tr>
          <tr><td colSpan={2}>Mobile</td><td><p className="alert_message">{props.mobilemessage}</p><input type="number" id="mobile_id" autoFocus/></td></tr>
          <tr><td colSpan={2}>Pin code</td><td><p className="alert_message">{props.emailmessage}</p><input type="email" id="email_id"/></td></tr>
          <tr><td colSpan={2}>Address</td><td><p className="alert_message">{props.addressmessage}</p><input type="address" id="address_id"/></td></tr>
          </table>
          <p id="place_p"><button id="place_order_btn" onClick={()=>props.place_order_fun()}>Place Order</button></p>
          


          
        </div>
      </Modal>


    </div>
  )
}
