import React, { useState,useEffect } from "react";
import {Link, useParams} from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa';
import "../App.css"
import { useSelector } from "react-redux";

const Header = () => {
  const id=useParams();
  
  const [countCart,setCountCart]=useState(0);
   const selector=useSelector(state=>state.shop.cart);
   useEffect(()=>{
    let count=0;
    selector.forEach((item)=>{
        count+=item.qty
    })
    setCountCart(count)
   },[selector,countCart])
  return (
    <div className="header">
      <Link to="/">
      <p >Mbazar</p>
      </Link>
        <Link  to="/cart">
        <p> <FaShoppingCart/>{countCart}</p>
        </Link>
    </div>
  );
};

export default Header;
