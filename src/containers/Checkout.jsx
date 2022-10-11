import "./checkout.css"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserDetails } from '../redux/shopping/shopping-actions'
import { BsWhatsapp } from 'react-icons/bs';
import Bagitems from "./Bagitems"
const Checkout = () => {
    const [userDetails,setDetails]=useState({
        name:"",
        number:0,
        address:"",
    })
    const selector=useSelector(state=>state.shop.cart)
    const dispatch=useDispatch();
    const handleUserDetails=()=>{
        dispatch(setUserDetails(userDetails))
    }
    
  return (
    <div className="checkoutWrapper">
        <Bagitems/>
          <div className='userDetails'>
            <div style={{marginBottom:"30px"}}>
                <h3>Enter Mobile Number</h3>
            </div>
            <div className="numberInput">
                <span className="whatsappLogo"><BsWhatsapp style={{background:"green",color:"white",borderRadius:"50%",fontSize:"30px"}}/></span><input type="text" placeholder="Enter whatsapp no."/>
            </div>
            <div className="getoffersonwhatsapp">
                <p>Get offers on Whatsapp</p>
            </div>
            <div className="checkoutbtn">
                <Link to="/basicdetails">
                    <button>Confirm number</button>
                </Link>
            </div>
        </div>
        </div>
    
  )
}

export default Checkout