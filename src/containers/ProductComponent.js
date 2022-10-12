import React from "react";
import { BsWhatsapp } from 'react-icons/bs';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css"
import { addToCart } from "../redux/shopping/shopping-actions";

const ProductComponent = ({ currentRecords }) => {
  // const products = useSelector((state) => state.allProducts.products);
  const dispatch=useDispatch()

  return (

    <div className="wrapper">

      {
        currentRecords.map((item) => {

          return <div className="box" >
              <Link to={`/product/${item.id}`} key={item.id}>
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="desc">
                <p>{item.title.substring(0, 30)}...</p>
                <div style={{display:"flex",alignItems:"center"}}><p style={{ background: "green", height: "30px", width: "30px", textAlign: "center", lineHeight: "30px", borderRadius: "5px",color:"white" }}>{item.rating.rate}</p><p style={{fontSize:"13px",marginLeft:"15px"}}>Based on {item.rating.count} Reviews</p></div>
                <p>$ {item.price}<span style={{textDecoration:"line-through",marginLeft:"10px",color:"light-grey"}}>  ${(item.price+(10/100)*(item.price)).toFixed(2)}</span></p>
              </div>
              </Link>
              <div className="boxFooter">
                <div className="whatsAppbtn">
                  <a href="https://wa.me/918637824594?text=urlencodedtext">
                <BsWhatsapp style={{background:"green",color:"white",borderRadius:"50%"}}/>
                </a>
                </div>
                
                <div >
              
                  <button  className="addToCartBtn" onClick={() => { dispatch(addToCart(item.id)) }}>
                    Add to bag
                  </button>
                  
                </div>
              </div>
            </div>
          
        })
      }
    </div>

  )

};

export default ProductComponent;
