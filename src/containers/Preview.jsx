import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Preview = () => {
    const selector=useSelector(state=>state.shop.userdetails)
    //console.log('preview',selector)
  return (
    <div className='previewPage'>
    <div className='preview'>
      <div className='userDetailsHead'>
        <h1>Your Details</h1>
      </div>
      <div className='Name'>
        <p>Name: <span>{selector.name}</span></p>
      </div>

      <div className='Number'>
        <p>Mobile: <span>{selector.number}</span></p>
      </div>
      <div className='address'>
        <p>Address: <span>{selector.address}</span></p>
      </div>
      
      <div className='btn'>
      <Link to="/success">
        <button>Confirm</button>
        </Link>
      </div>
     
    </div>
    </div>
  )
}

export default Preview