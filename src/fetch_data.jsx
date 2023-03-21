import { useState,useEffect } from "react";
import React from "react";
const FetchData=(URL)=>{
    const [products, setproducts] = useState(null);
    const [ispending, SetIsPending] = useState(true);
    const [error, SetError] = useState(null);
    useEffect(() => {
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
                setproducts(data);
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
      return{products,ispending,error,setproducts};
}
export default FetchData;