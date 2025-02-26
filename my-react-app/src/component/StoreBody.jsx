import React from 'react';
import { useContext } from 'react';
import context from '../context/context';
export default function StoreBody() {
  const { productList,addToCart,showCart,setShowCart} = useContext(context);
  return (
    <div>
       <div style={{display:"flex",justifyContent:'space-around',alignItems:'center',flexWrap:"wrap"}}>
      {productList.map((product) => (
        <div key={product.id}>
        <h1>{product.title}</h1>
          <div><img src={product.imageUrl} alt={product.title} style={{ width: '200px', height: '200px', borderRadius: '20%' }} /></div>
          <div>{product.price}</div>
          <div><button onClick={()=>addToCart(product.id)}style={{ backgroundColor: '#4CAF50', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
            Add to Cart
          </button>
          </div>
        </div>
      ))}
    </div>
    <button onClick={()=>{setShowCart(!showCart)}}>See the cart</button>
    </div>
   
  );
}

