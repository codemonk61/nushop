import "./bagDetails.css"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserDetails } from '../redux/shopping/shopping-actions'
import { BsWhatsapp } from 'react-icons/bs';
import Bagitems from "./Bagitems"
const BasicDetails = () => {
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
            <Bagitems />
            <div className='userDetails'>
                <div style={{ marginBottom: "30px" }}>
                    <h3>Basic Details</h3>
                </div>
                <div className="label">
                    <label>Full Name</label>
                </div>
                <div className="nameInput">
                    <input type="text" placeholder="Enter Name" />
                </div>

                <div className="pinHouse">
                    <div className="labelAndInput">
                        <div className="label">
                            <label>Pincode</label>
                        </div>
                        <div className="nameInput">
                            <input type="text" placeholder="Pincode" />
                        </div>
                    </div>

                    <div className="labelAndInput">
                        <div className="label">
                            <label>House Number</label>
                        </div>
                        <div className="nameInput">
                            <input type="text" placeholder="House Number" />
                        </div>
                    </div>
                </div>

                <div className="address">
                    <div className="label" style={{marginBottom:"15px"}}>
                        <label>Enter Address</label>
                    </div>
                    <textarea type="text" placeholder="Enter Address"></textarea>
                </div>

                <div className="saveContinuebtn">
                    <Link to="/payment">
                    <button>Save & Continue</button>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default BasicDetails