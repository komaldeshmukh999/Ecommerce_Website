import React from 'react'
import Header from './Header'
import "./About.css"
import myImage from "../assets/girl.jpg"
export default function About() {
  return (
   
    <div>
      <div class="jumbotron text-center" style={{backgroundColor:"gray",color:"white"}}>
           <h1> The Generics</h1>
     </div>
    <div className="about-content">
     <h1>About</h1>
     <div className="main-content">
     <img src={myImage} alt="My Image"/>
     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reprehenderit quam sapiente, autem similique suscipit soluta libero consequatur atque repellat! Necessitatibus voluptatum ut accusamus dolor tenetur labore, autem a sapiente.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quas reiciendis voluptatum ratione officiis aliquam, dolore ex at qui saepe eum quasi ducimus delectus quae reprehenderit! Dicta officiis error exercitationem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sint veniam adipisci. Consectetur pariatur autem aliquam tempora vitae atque incidunt, esse aliquid! Molestias repellat officia cumque beatae reiciendis aut optio.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quam cupiditate fugiat? Aperiam quia, quibusdam molestias modi asperiores delectus assumenda explicabo sit voluptates natus, iure enim! Eligendi sed ipsum non.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta vitae molestias soluta! Eligendi labore sit officiis minima veniam magni excepturi provident harum optio! Mollitia earum exercitationem aliquid a sequi.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim obcaecati consequatur, suscipit iste magnam, consequuntur, reprehenderit delectus quis eaque cumque qui maiores consectetur officia sint odio culpa quas illum eius?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reiciendis recusandae pariatur voluptas facere iste quas, deleniti sint odio aspernatur, similique amet expedita dolores alias, adipisci excepturi praesentium ipsum consequatur?</p>
     </div>
     
    </div>
    <div className="about-footer">
     <h1>The Generics</h1>
     <p>facebook</p>
     <p>instagram</p>
     <p>twitter</p>
    </div>
    </div>
  )
}
