import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";

import { connect, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import Pagination from "./Pagination";
import { setProducts } from "../redux/shopping/shopping-actions";

const ProductPage = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page   
  const [recordsPerPage] = useState(4);
  // To hold the actual data
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log(response.data)
    dispatch(setProducts(response.data))
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //console.log("Products :", products);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = products.slice(indexOfFirstRecord,
    indexOfLastRecord);
  const nPages = Math.ceil(products.length / recordsPerPage)
  return (
    <>
      <div className="ui grid container">
        <ProductComponent currentRecords={currentRecords} />
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}




export default connect(mapStateToProps)(ProductPage);
