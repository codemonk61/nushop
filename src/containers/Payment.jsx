import "./payment.css"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserDetails } from '../redux/shopping/shopping-actions'
import { BsWhatsapp } from 'react-icons/bs';
import Bagitems from "./Bagitems"
const Payment = () => {
    const [userDetails, setDetails] = useState({
        name: "",
        number: 0,
        address: "",
    })
    const selector = useSelector(state => state.shop.cart)
    const dispatch = useDispatch();
    const handleUserDetails = () => {
        dispatch(setUserDetails(userDetails))
    }

    return (
        <div className="checkoutWrapper" style={{marginBottom:"20px"}}>
            <Bagitems/>
            <div className='userDetails'>
                <div className="paymentHeader">
                     <h1>Select Payment Mode</h1>
                </div>
                <div className="paymentBox">
                    <div className="radio">
                         <input type="radio" name="pay"/><span>Pay Online</span>
                    </div>
                    <div className="discount"> 
                        <p>$20 discount</p>
                    </div>
                </div>
                <div className="paymentBox" >
                    <div className="radio">
                         <input type="radio" name="pay"/><span>Pay COD</span>
                    </div>
                    <div className="discount" style={{background:"rgb(252, 118, 118)"}}> 
                        <p>$10 charge</p>
                    </div>
                </div>
                <div className="offer">
                    <div className="offerLogo">
                        <img style={{color:"green"}} src="https://cdn.zeplin.io/619d06ef8cfa6aab579b7e4d/assets/51151f2c-82a0-45dc-9ff5-b31b2717a90e.svg" alt="tag-image"/>
                    </div>
                    <div className="offerDesc">
                        <p>Save upto $1000</p>
                        <p style={{color:"green"}}>4 offer available</p>
                    </div>
                    <div className="offerBtn">
                        <p>Offers</p>
                    </div>
                </div>
                <div className="billDetails">
                    <div className="billHeader" style={{lineHeight:"10px"}}>
                        <h5>Bill Details</h5>
                        <p style={{color:"green",fontSize:"12px"}}>Saving $470 on this order </p>
                    </div>
                    <div className="billDetailsBody">
                        <div className="billItem">
                            <p>Items</p>
                            <p>Items total</p>
                            <p>Online Payment Discount</p>
                            <p>Deliviery Fee</p>
                            <hr></hr>
                            <p>Total Amount</p>
                        </div>

                        <div className="billItem">
                            <p>2</p>
                            <p>$6200</p>
                            <p>-20$</p>
                            <p>$0</p>
                            <hr></hr>
                            <p>$6180</p>
                        </div>
                    </div>
                </div>
                <div className="deliveryDetails">
                    <p>Delivery Address</p>
                    <p style={{color:"gray"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nihil!
                    </p>
                    <p style={{color:"green"}}>
                        Free Delivery within 4-9 days
                    </p>
                </div>
                <div className="paymentFooter">
                    <div className="totalAmount">
                        <p>Total amount</p>
                        <p>$6180 <span style={{marginLeft:"10px",textDecoration:"line-through",fontSize:"12px"}}>$6200</span></p>
                    </div>
                    <Link to="/billpage">
                    <div className="placeOrderbtn">
                       
                            <button>Place Order</button>
                        
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    

    )
}

export default Payment