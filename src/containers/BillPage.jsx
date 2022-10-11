import "./bill.css"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserDetails } from '../redux/shopping/shopping-actions'
import { BsWhatsapp } from 'react-icons/bs';
import Bagitems from "./Bagitems"
const BillPage = () => {
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
        <>
            <div className="billPageWrapper" style={{ marginBottom: "20px" }}>
                <div>
                <h4 style={{marginBottom:"20px"}}>Your order has been placed successfully</h4>
                <div className="thankuBox">
                    <p style={{ fontSize: "20px", fontWeight: "bolder" }}>You saved extra $50!</p>
                    <p>Thank You For Shopping With Us</p>
                </div>
                </div>







                <div className="billBoxWrapper">
                    <div className="itemPageWrapper">
                        <div className="billPageItem">
                            <p>Items</p>
                            <p>Delivered By</p>
                            <p>Payment Mode</p>


                            <p>Total Amount</p>
                        </div>

                        <div className="billPageItem">
                            <p>jeans</p>
                            <p>Wed's 19th oct 2022</p>
                            <p>Cash on Delivery</p>


                            <p>6180</p>
                        </div>

                    </div>

                    <div className="billPageBtn">
                        <Link to="/">
                        <button>Continue Shopping</button>
                        </Link>
                        
                    </div>
                </div>



            </div>

        </>

    )
}

export default BillPage