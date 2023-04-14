import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductDataAction } from './redux/action';
import axios from "axios";

const App = () => {

const dispatch = useDispatch();
const dataFromApi = useSelector(state=>state.productReducers);
console.log("dataFromApi: "+dataFromApi.data);
console.log("dataFromApi status: "+dataFromApi.status);

useEffect(()=>{
  getProducts();
  // eslint-disable-next-line
},[]);

const getProducts=()=>{

  // let result = await fetch("https://fakestoreapi.com/products");
  // result = await result.json();
  // dispatch(getProductDataAction(result));

  axios({
    url: "https://fakestoreapi.com/products",
    method: "GET",
  }).then((res) => { 
      dispatch(getProductDataAction(res));
  })
}

  return (
    <div>
      {
        dataFromApi.data ==null?
        <h1>Please wait......</h1>:
        dataFromApi.data.map((item,index)=>{
          return (
            <>
            <p>{item.title}</p>
            </>
          );
        })
      }
    </div>
  )
}

export default App