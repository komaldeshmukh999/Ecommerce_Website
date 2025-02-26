import context from "./context";
import { useState } from "react";
import React from 'react';

export default function ContextProvider(props) {
  const[showCart,setShowCart]=useState(false)
  const [productList, setProductList] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ]);
  const[cart,setCart]=useState([])
  function addToCart(id){
    console.log("added to cart")
  }

  return (
    <context.Provider value={{productList,cart,setCart,addToCart,showCart,setShowCart}}>
    {console.log(productList)}
     {props.children}
    </context.Provider>
  );
}