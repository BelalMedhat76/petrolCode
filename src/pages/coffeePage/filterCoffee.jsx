import React, { useEffect,useState } from 'react'
import '../productFilter/filterProduct.css'
import{Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Filtering from '../productFilter/filterMethod'
const FilterCoffee = () => {
    
    const URL = "http://localhost:2020/categoryCoffee";
    const [categoryCoffee, setcategoryCoffee] = useState([]);
    const [ispending, SetIsPending] = useState(true);
    const [error, SetError] = useState(null);
    useEffect(() => {
        Filtering();
        const abortCont=new AbortController();
        setTimeout(() => {
          fetch(URL,{
            signal: abortCont.signal
          })
            .then((res) => {
              if (!res.ok) {
                throw Error("could not fetch the data for that resourse");
              }
              return res.json();
            })
            .then((data) => {
                setcategoryCoffee(data);
              SetIsPending(false);
            })
            .catch((err) => {
                if(err.nae=='AbortError'){
                    console.log("fetch Aborted")
                }else{
                    SetIsPending(false);
                    SetError(err.message);
                }
           
            });
        }, 500);
      }, []);
//   const{products,ispending,error,setproducts}=FetchData(URL);
    const navigate = useNavigate();

    const productDetails = () => {
      // 👇️ navigate programmatically
      navigate('/coffeeDetails');
    };
    Filtering();
   
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
        <p>Lion Motor Oil</p>
        <p>
          Norooz Qeshm Company distributor of Iranian and foreign engine oils
        </p>
      </section>


    <div className="btns container">
        <button type="button" data-menu="all">All</button>
        <button type="button" data-menu="Gasoline">Gasoline</button>
        <button type="button" data-menu="Diesel">Diesel</button>
        <button type="button" data-menu="Hydraulic">Hydraulic</button>
        <button type="button" data-menu="Transmission">Transmission</button>
     
    </div>
    <div className="allwrps">
{categoryCoffee.length > 0 && categoryCoffee.map(product=>(
  
        <Link  to={`/coffeeDetails/${product.id}`} data-menu={product.data} className="single news-Slide-up" id="cardHover" key={product.id} >
            <img src={product.img}  alt="" className='singleCard'/>
            <div className='newsCaption'>
    <h2 className='newsCaption-title'>{product.head}</h2>
    <p className='newsCaption-content'>
Nice Coffee</p>

  </div>
        </Link>


        ))}
    </div>

    </div>
  )
}

export default FilterCoffee;