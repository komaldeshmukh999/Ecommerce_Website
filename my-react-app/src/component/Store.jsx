import React from 'react'
import StoreBody from './StoreBody'
import ContextProvider from '../context/ContextProvider'
import CartModel from './CartModel'
export default function Store() {
  return (
     <div>
      <div>
         <div class="jumbotron text-center" style={{backgroundColor:"gray",color:"whitesmoke"}}>
           <h1> The Generics</h1>
         </div>
    </div>
    <div>
      <ContextProvider>
       <StoreBody/>
       <CartModel/>
      </ContextProvider>
       </div>
     
    <footer>
    <div className="Home-footer">
    <h1>The Generics</h1>
   </div>
 </footer>
    </div>
  )
}
