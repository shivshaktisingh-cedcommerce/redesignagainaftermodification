import Navbar from "./Navbar"
import './App.css';
import Navbar2 from "./Navbar2";
import Products from "./Products";
import {useState , useEffect} from 'react'

function App() {
  const [cart , setCart]=useState([])
  const [cartid , setCartid]=useState([])
  const [totalamount,setTotalamount]=useState(0)
  const[finalamount , setFinalamount]=useState(0)
  const [mobilemessage,setMobilemessage]=useState()
  const [emailmessage,setEmailmessage]=useState()
  const [addressmessage,setAddresmessage]=useState()
  const[thanksmessage,setThanksmessage]=useState()

  const add_to_cart_fun=(d)=>{
   if(cartid.indexOf(d.id)===-1){
     setCartid([...cartid , d.id])
     setCart([...cart,d])
   }
   console.log(cartid)
   console.log(cart)

  }

  const increasequantfun=(d)=>{
    var x = Number(d.initialquant)
     d.quantity = Number(d.quantity) + x
     setCart([...cart])
  }

  const delete_fun=(i)=>{
    cart.splice(i , 1)
    cartid.splice(i , 1)
    setCart([...cart])
    setCartid([...cartid])
  }

  const decreasequantfun=(d , i)=>{
    var x = Number(d.initialquant)
    if(Number(d.quantity)>0){
      d.quantity = Number(d.quantity) - x
    }
    if(Number(d.quantity)===0){
      d.quantity = d.initialquant;
      cart.splice(i , 1)
      cartid.splice(i , 1)
    }
    setCartid([...cartid])
    setCart([...cart])
  }

  const place_order_fun=()=>{
    setThanksmessage()
    setMobilemessage()
    setEmailmessage()
    setAddresmessage()
    if(document.getElementById("mobile_id").value==""){
      setMobilemessage("please Enter") 
    }
    if(document.getElementById("email_id").value==""){
      setEmailmessage("please Enter")
    }
    if(document.getElementById("address_id").value==""){
      setAddresmessage("please Enter")
    }
    else{
      cart.map((d)=>{
        d.quantity = d.quantity1
      })
      setCart([...cart])
    
      cartid.splice(0  , cartid.length)
      cart.splice(0  , cart.length)
      setCart([])
      setCartid([])
      document.getElementById('tab').setAttribute("style","display:none")
      document.getElementById('place_p').setAttribute("style","display:none")
      document.getElementById('billing_details_id').setAttribute("style","display:none")
      setThanksmessage("Thanks for Shopping")
    }
  }

  useEffect(()=>{
    var x = 0;
    var x1 = 0;
    var z = 0;
    cart.map((d)=>{
      x1 = (Number(d.quantity)/Number(d.quantity1)) * d.sellprice;
      x = x + (Number(d.quantity)/Number(d.quantity1)) * d.sellprice 
      d.total = x1;
      setCart([...cart])
        
    })

    if(totalamount>2000){
      z = totalamount * 0.9;
    }
    setTotalamount(x)
    setFinalamount(z)
  },[cart])

  return (
    <div className="App">

     <Navbar />
   
     <Navbar2 cart={cart}/>
     <Products add_to_cart_fun={add_to_cart_fun} cart={cart} increasequantfun={increasequantfun} decreasequantfun={decreasequantfun} delete_fun={delete_fun} totalamount={totalamount} finalamount={finalamount} setCart={setCart} setCartid={setCartid} place_order_fun={place_order_fun} thanksmessage={thanksmessage} mobilemessage={mobilemessage} addressmessage={addressmessage} emailmessage={emailmessage} setThanksmessage={setThanksmessage}/>
    </div>
  );
}

export default App;
