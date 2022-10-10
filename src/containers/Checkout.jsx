
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserDetails } from '../redux/shopping/shopping-actions'

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
    <div className='cartProducts'>
        {
            selector.map((item)=>{
                    return <div className='cartProduct' key={item.id}>
                    <div className='productImage'>
                        <img src={item.image} alt={item.title}/>
                        {/* <h5>${item.price}</h5> */}
                        <p>{item.title}</p>
                    </div>
                    </div>
            })
        }
        <div className='userDetails'>
            <center><h3>Enter Your Details</h3></center>
            <div>
            <label>Name :</label>
            </div>
            <div>
            <input type="text" placeholder='Enter Name' required
            onChange={(e)=>{setDetails({...userDetails,name:e.target.value})}}
            />
            </div>
            <div>
            <label>Number :</label>
            </div>
            <div>
            <input type="number" placeholder='Enter Number' required
            onChange={(e)=>{setDetails({...userDetails,number:e.target.value})}}
            />
            </div>
            <div>
            <label>Address :</label>
            </div>
            <div>
            <textarea type="text" placeholder='Enter Address' required
            onChange={(e)=>{setDetails({...userDetails,address:e.target.value})}}
            />
            </div>
            <div>
                <Link to="/preview">
                    <button onClick={handleUserDetails}>Next</button>
                </Link>
 
            </div>

        </div>
    </div>
  )
}

export default Checkout