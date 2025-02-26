import React from 'react'
import {Link} from "react-router-dom"
import "./Home.css"
import context from '../context/context'
import { useContext } from 'react'
export default function Header() {
  const{showCart,setShowCart}=useContext(context)
  return (
    <div>
       <header className="header">
       <div >
        <Link to="/home" style={{color:'white',textDecoration:"none"}}>HOME</Link>
       </div>
       <div>
       <Link to="/store" style={{color:'white',textDecoration:"none"}}>STORE</Link>
       </div>
       <div>
       <Link to="/about" style={{color:'white',textDecoration:"none"}}>ABOUT</Link>
       </div>
       <div>
       <div>
        <button class="btn btn-primary">Cart 0</button>
       </div>
       <div>
        <button onClick={()=>setShowCart(showCart)} class="btn btn-primary">Login</button>
       </div>
       </div>
       
    </header>
    </div>
  )
}
