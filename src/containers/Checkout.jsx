import "./checkout.css"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserDetails } from '../redux/shopping/shopping-actions'
import { BsWhatsapp } from 'react-icons/bs';
import Bagitems from "./Bagitems"
import { toBeEnabled } from "@testing-library/jest-dom/dist/matchers"
const Checkout = () => {
    const [charCheck, setCharCheck] = useState(false)
    const [toggle, setToggle] = useState(false)
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

    const validate = (num) => {
        if (num.match(/[A-Za-z]/)) {
            setCharCheck(true)
            setToggle(false)
        }
       else if (num.length !== 10 && num.length !== 0) {
            setToggle(true)
            setCharCheck(false)
        } else {
            setToggle(false)
            setCharCheck(false)
        }
    }

    return (
        <div className="checkoutWrapper">
            <Bagitems />
            <div className='userDetails'>
                <div style={{ marginBottom: "30px" }}>
                    <h3>Enter Mobile Number</h3>
                </div>
                <div className="numberInput">
                    <span className="whatsappLogo"><BsWhatsapp style={{ background: "green", color: "white", borderRadius: "50%", fontSize: "30px" }} /></span><input type="text" onChange={(e) => { validate(e.target.value) }} placeholder="Enter whatsapp no." />
                </div>
                {
                    toggle && <p style={{ color: "red" }}>Enter the num upto 10 digit</p>

                }
                {
                    charCheck && <p style={{ color: "red" }}>Please enter numbers</p>
                }
                {/* <div className="getoffersonwhatsapp">
                    <p>Get offers on Whatsapp</p>
                </div> */}
                <div className="checkoutbtn">
                    <Link to="/basicdetails">
                        <button disabled={toggle}>Confirm number</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Checkout