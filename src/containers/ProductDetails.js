import React, { useEffect, useState } from "react";
import "../App.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/shopping/shopping-actions";
import "./productDetails.css"

const ProductDetails = () => {
  const selector = useSelector(state => state.shop.coupons)
  const { productId } = useParams();
  const [product, setProducts] = useState();
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    setProducts(response.data)
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {

    };
  }, [productId]);
  //console.log('single product', product)
  return (
    <div className="productWrapper">
      {product && <>
        <div className="productImage">
          <img src={product.image} />
        </div>
        <div className="detailsProduct">
          <p className="productTitle">{product.title}</p>
          <div style={{display:"flex",alignItems:"center"}}><p style={{ background: "green", height: "30px", width: "30px", textAlign: "center", lineHeight: "30px", borderRadius: "5px",color:"white" }}>{product.rating.rate}</p><p style={{fontSize:"13px",marginLeft:"15px"}}>Based on {product.rating.count} Reviews</p></div>
          <p style={{ fontSize: "20px" }}>$ {product.price}<span style={{ fontSize: "15px", textDecoration: "line-through", marginLeft: "10px", color: "light-grey" }}>  ${(product.price + (10 / 100) * (product.price)).toFixed(2)}</span></p>

          <div className="productOffers">
            <h5>Offers(5)</h5>
            {
              selector.map((coupon) => {
                return <ul>
                  <li><img src="https://cdn.zeplin.io/619d06ef8cfa6aab579b7e4d/assets/51151f2c-82a0-45dc-9ff5-b31b2717a90e.svg"/>{coupon.coupondesc}</li>
                </ul>
              })

            }
          </div>

          <div className="selectQty">
            <div className="quantityHeader">
              <h5>Select Quantity</h5>
            </div>
            <div className="quantityBody">
              <div className="dec">-</div>
              <div className="num">1</div>
              <div className="inc">+</div>
            </div>

          </div>
          <button onClick={() => { dispatch(addToCart(product.id)) }}>Add to Cart</button>

          <div className="deliveryDetails">
            <ul>
              <li><span><img style={{marginRight:"10px"}} src="https://cdn.zeplin.io/619d06ef8cfa6aab579b7e4d/assets/8522ca2d-560e-467b-9e2a-823393a2131b.svg"/></span>Get it delivered 4-5 days</li>
              <li><span><img style={{marginRight:"10px"}} src="https://cdn.zeplin.io/619d06ef8cfa6aab579b7e4d/assets/68741025-5bbf-4b92-b626-e5d140ac674a.svg"/></span>Only payment only</li>
              <li><span><img style={{marginRight:"10px"}} src="https://cdn.zeplin.io/619d06ef8cfa6aab579b7e4d/assets/58f1620a-865c-471c-bd77-44adb5a121f9.svg"/></span>Non Returnable</li>
            </ul>
          </div>
        </div>

      </>
      }

    </div>


  );
};

export default ProductDetails;
