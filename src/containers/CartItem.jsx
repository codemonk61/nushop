import React, { useState } from 'react'

import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { adjustQty, removeFromCart } from '../redux/shopping/shopping-actions';
const CartItem = ({ itemData }) => {
  const [input, setInput] = useState(itemData.id)
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustQty(itemData.id, e.target.value))
  }
  return (
    <div className='cartItemWrapper'>
      <div className='cartItemImage'>
      <div className='delete' onClick={() => { dispatch(removeFromCart(itemData.id)) }}>
          <span><MdClose /></span>
        </div>
        <img src={itemData.image} alt={itemData.title} />
      </div>
      <div className='cartItemDesc'>
        <p>{itemData.title}</p>
        <p>${itemData.price}</p>

        <div className='qty'>
          <span>Qty:
             <input
              type="number"
              min="1"
              value={itemData.qty}
              onChange={(e) => { onChangeHandler(e) }}
            />
          </span>
        </div>

      </div>
      <div className='productPrice'>
        <p>${itemData.price}</p>
      </div>
      <div className='qtyWrapper'>
        
       
      </div>
    </div>
  )
}

export default CartItem