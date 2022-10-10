import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from "react-redux"
import Modal from "react-modal"
import CartItem from './CartItem'
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { setDiscount } from '../redux/shopping/shopping-actions';


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

            {
                cart.map((item) => {

                    return <CartItem key={item.id} itemData={item} />

                })
            }
            <div className='cartSummary'>
                <h4>Cart Summary</h4>
                <div className='cartPrice'>
                    <span>Total:({totalItem})  </span>
                    <span className='price'>${applyOffer ? (totalPrice - applyOffer).toFixed(2) : totalPrice}</span>
                    <span style={{ color: "green", marginLeft: "10px" }}>{toggle ? `You Saved ${applyOffer.toFixed(2)}$` : ""}</span>
                </div>
                <div className='checkoutBtn'>
                   <Link to={`/checkout`}>
                        <button>Checkout to proceed</button>
                    </Link>
                
                    
                    <span onClick={() => { setOpenModel(true) }}>{toggle ? "Change Offer" : "Apply coupons"}</span>
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