import "./checkout.css"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDetails } from '../redux/shopping/shopping-actions'
const Bagitems = () => {
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
    
    <div className='cartProducts'>
        <h5>Bag Items</h5>
        {
            selector.map((item)=>{
                    return <div className="cartBox">
                     <div className='checkoutImage' key={item.id}>
                        <img src={item.image} alt={item.title}/>
                        </div>
                        <div className="productTitle">
                            <p>{item.title}</p>
                            <p>{item.category}</p>
                        </div>
                        <div className="productPrice">
                            <p>${item.price}</p> 
                        </div>
                        
                        
                    </div>
                
            })
        }
        </div>
        
    
  )
}

export default Bagitems