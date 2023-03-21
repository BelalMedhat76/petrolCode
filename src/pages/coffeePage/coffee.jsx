import React from "react";
import '../products/product.css'
import spreeso from '../../imgs/spreeso.png'
import {FaArrowRight} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import FetchData from "../../fetch_data";
import Filter from '../productFilter/filterMethod'
const Coffee = () => {
  const URL = "http://localhost:2020/products";
  const{products,ispending,error,setproducts}=FetchData(URL);
  const navigate = useNavigate();

  const productFilterCoffee = () => {
    // 👇️ navigate programmatically
    navigate('/filterproductCoffee');
  };


  return (
    <div>
       {error && (
        <div
          style={{
            color: "#fff",
          }}
        >
          {error}
        </div>
      )}
      {ispending && (
        <div
          style={{
            color: "#fff",
            textAlign: "center",

            padding: "30px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          {" "}
          ...loading
        </div>
      )}
      <section className="Products ">
        <p>Products</p>
        <p>
          Norooz Qeshm Company distributor of Iranian and foreign engine oils
        </p>
      </section>

      <div className="productCards ">
  
        <div className="cards-of-products"  onClick={productFilterCoffee}>
<img src={spreeso} alt="" />
    <p className="productName">COVIM</p>
    <a href="#" className="read-more-product"><FaArrowRight/> Read More</a>
        </div>
        {/* <div className="cards-of-products"  onClick={productFilterPetro}>
<img src={icon4} alt="" />

    <p className="productName">Petro S</p>
    <a href="#" className="read-more-product"><FaArrowRight/> Read More</a>
        </div> */}
       
      </div>
    </div>
  );
};

export default Coffee;