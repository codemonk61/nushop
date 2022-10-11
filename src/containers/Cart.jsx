import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from "react-redux"
import Modal from "react-modal"
import CartItem from './CartItem'
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { setDiscount } from '../redux/shopping/shopping-actions';
import "./cart.css"

const Cart = ({ cart }) => {
    const [toggle, setToggle] = useState(false)
    const [applyOffer, setApplyOffer] = useState(0);
    const [totalPrice, setTotalPrice] = useState();
    const [totalItem, setTotalItem] = useState();
    const [isOpenModel, setOpenModel] = useState(false);
    const [discountPrice,setDiscountPrice]=useState(0)
    const selector = useSelector(state => state.shop.coupons)

    useEffect(() => {
        let items = 0;
        let price = 0;
        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        })
        setTotalItem(items)
        setTotalPrice(price.toFixed(2))

    }, [totalPrice, totalItem, setTotalPrice, setTotalItem, cart])
  //const dispatch=useDispatch()
    const handleOffer = (offer) => {
        setApplyOffer((offer / 100) * totalPrice);
        setDiscountPrice((totalPrice - applyOffer).toFixed(2))
        //console.log('discountPrice',discountPrice)
        setOpenModel(false)
        setToggle(!false)

    }
    //console.log("from cart",cart)
    Modal.setAppElement('#root')
    return (
        
        <div className='cartWrapper'>
            
            <Modal isOpen={isOpenModel} className="model" onRequestClose={() => { setOpenModel(false) }}>
                <div className="overlay">
                    
                </div>
                <div className='modelContent'>
                    <div className='modelHeader'>

                        <h5>Offers</h5>
                        <div style={{ cursor: "pointer" }} onClick={() => { setOpenModel(false) }}><MdClose /></div>

                    </div>
                    {
                        selector.map((item) => {
                            return <div className="offers" key={item.id}>
                                <p>{item.coupondesc}</p>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p>{item.couponcode}</p>
                                    <p style={{ color: "green", cursor: "pointer" }} onClick={() => { handleOffer(item.coupondis) }}>Apply Offer</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </Modal>
            <div>
            <div>
            {
                
                cart.map((item) => {

                    return <CartItem key={item.id} itemData={item} />

                })
                
            }
            </div>
            </div>
            <div className='cartSummary'>
                {/* <h4>Cart Summary</h4>
                <div className='cartPrice'>
                    <span>Total:({totalItem})  </span>
                    <span className='price'>${applyOffer ? (totalPrice - applyOffer).toFixed(2) : totalPrice}</span>
                    <span style={{ color: "green", marginLeft: "10px" }}>{toggle ? `You Saved ${applyOffer.toFixed(2)}$` : ""}</span>
                </div>
                 */}
                    <div className="offer">
                    <div className="offerLogo">
                        <img style={{color:"green"}} src="https://cdn.zeplin.io/619d06ef8cfa6aab579b7e4d/assets/51151f2c-82a0-45dc-9ff5-b31b2717a90e.svg" alt="tag-image"/>
                    </div>
                    <div className="offerDesc">
                        <p style={{ color: "green", marginLeft: "10px",fontSize:"12px",textAlign:"left" }}>{toggle ? `You Saved ${applyOffer.toFixed(2)}$` : ""}</p>
                        <p style={{color:"green",fontSize:"12px"}}>4 offer available</p>
                    </div>
                    <div className="offerBtn">
                        <p style={{color:"green",fontSize:"12px",marginLeft:"10px"}} onClick={() => { setOpenModel(true) }}>{toggle ? "Change Offer" : "Apply coupons"}</p>
                    </div>
                </div>

                  <div className='checkoutSubtotal'>
                    <div className='subtotal_price'>

                    <div className='subtotal'>
                        <p>Subtotal({totalItem})</p>
                        <p>Saving $160</p>
                    </div>
                    <div className='subtotalprice'>
                        <p className='price'>${applyOffer ? (totalPrice - applyOffer).toFixed(2) : totalPrice}</p>
                    </div>

                    </div>
                    <div className='subtotalcheckoutbtn'>
                    <Link to={`/checkout`}>
                        <button>checkout</button>
                    </Link>
                    </div>
                </div> 
            
            </div>
            
        </div>

    
    )
        
}


const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);