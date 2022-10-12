import "./bagDetails.css"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserDetails } from '../redux/shopping/shopping-actions'
import { BsWhatsapp } from 'react-icons/bs';
import Bagitems from "./Bagitems"
const BasicDetails = () => {

    const [formStatus, setFormStatus] = useState(false);
    const initialValues = {name: '', pin:0, houseNumber: '',address:''};
    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
     
    // const [userDetails, setDetails] = useState({
    //     name: "",
    //     pin: 0,
    //     houseNumber:"",
    //     address: "",
    // })
    // const selector = useSelector(state => state.shop.cart)
    // const dispatch = useDispatch();
    // const handleUserDetails = () => {
    //     dispatch(setUserDetails(userDetails))
    // }


    
   
   //functions for form validation
    const handleChange = (event) => {
        console.log('event', event.target.value, event.target.name);
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('FormData Submitted...', formData);
        const errorRet = validateForm(formData);
        setFormErrors(errorRet);
        if(Object.keys(errorRet).length === 0) {
            setFormStatus(true);
            console.log('--------------hahah------------------')
            //api call - formData
            setFormData(initialValues);
        }
    }

    const validateForm = (form_Data) => {
        let error = {};
        if(!form_Data.name) {   //username is blank
            error.name = 'Please, enter username...'
        }

        if(!form_Data.pin) {   //email is blank
            error.pin = 'Please, enter email...'
        }

        if(!form_Data.address) {   //username is blank
            error.address = 'Please, enter address...'
        }

        if(!form_Data.houseNumber) {   //password is blank
            error.houseNumber = 'Please, enter houseNumber...'
        }
        // if(!form_Data.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {   //password is blank
        //     error.email = 'Please type valid email format ...'
        // }
        if(form_Data.pin.length < 5) {   //password is blank
            error.pin = 'Please enter 5 characters  ...'
        }
        if(!form_Data.name.match(/[A-Za-z]/) ) {   //password is blank
            error.name = 'Please enter non digit charatcters  ...'
        }
        return error;
    };


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
                    <input type="text" placeholder="Enter Name" name="name"
                     required onChange={handleChange} value={formData.name} 
                     />
                </div>
                <div className='text-danger'>{formErrors.name}</div>
                <div className="pinHouse">
                    <div className="labelAndInput">
                        <div className="label">
                            <label>Pincode</label>
                        </div>
                        <div className="nameInput">
                            <input type="text" placeholder="Pincode"
                            name="pin" onChange={handleChange} value={formData.pin}
                            />
                        </div>
                        <div className='text-danger'>{formErrors.pin}</div>
                    </div>

                    <div className="labelAndInput">
                        <div className="label">
                            <label>House Number</label>
                        </div>
                        <div className="nameInput">
                            <input type="text" placeholder="House Number" 
                            name="houseNumber" onChange={handleChange} value={formData.houseNumber}
                            />
                        </div>
                        <div className='text-danger'>{formErrors.houseNumber}</div>
                    </div>
                </div>

                <div className="address">
                    <div className="label" style={{marginBottom:"15px"}}>
                        <label>Enter Address</label>
                    </div>
                    <textarea type="text" placeholder="Enter Address"
                    name="address" onChange={handleChange} value={formData.address}
                    />
                    <div className='text-danger'>{formErrors.address}</div>
                </div>

                <div className="saveContinuebtn">
                    <Link to="/payment">
                    <button onClick={handleSubmit}>Save & Continue</button>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default BasicDetails