import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <center>
    <h1>Your Order has been confirmed successfully</h1>
    <div className='btn'>
        <Link to="/">
        <button>Continue Shopping</button>
        </Link>
    </div>
    </center>
  )
}

export default Success