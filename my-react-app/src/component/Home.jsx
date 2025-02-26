import React,{useState} from 'react'
import "./Home.css"
import Header from './Header'
export default function Home() {
  const [dummyList, setDummyList] = useState([
    { id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99 },
    { id: 'm2', name: 'Schnitzel', description: 'A german specialty!', price: 16.5 },
    { id: 'm3', name: 'Barbecue Burger', description: 'American, raw, meaty', price: 12.99 },
    { id: 'm4', name: 'Green Bowl', description: 'Healthy...and green...', price: 18.99 },
  ]);
  return (
    <div>
   <div className="Generic-box">
         <div class="jumbotron text-center" style={{backgroundColor:"gray"}}>
           <h1> The Generics</h1>
           <button class="btn btn-default btn-lg">Get our Latest Album</button>
         </div>
    </div>
    <div class="jumbotron text-center">
    <h2>Tours</h2>
    <table class="table">
    {dummyList.map((meal)=>{
      return <tr colspan="2">
        <td>{meal.name}</td>
        <td>{meal.description}</td>
        <td>{meal.price}</td>
        <button type="button" class="btn btn-primary">Add</button>
      </tr>
    })}
</table>
</div>
    
    <footer>
    <div className="Home-footer">
    <h1>The Generics</h1>
   </div>
 </footer>
</div>
  )
}
