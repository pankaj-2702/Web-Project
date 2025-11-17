  import './galleryTwo.css'
  import Info from './info';
import { useState } from 'react';
 function GalleryTwo(props){

     const [isVisible, setIsVisible] = useState(false); // initial state

  const toggle = () => {
    setIsVisible(!isVisible); // toggle true/false
    
  }
   
    return(
          <main className="one1">
        <div className="left-section1">
           <p className='compl1'>{props.compliment}</p>
           <img src={props.image} alt="" id="main-img1" />
           <img id='side-img-11' src={props.image1} alt="" />
        </div>
        <div className="right-section1" style={{backgroundColor:props.color}} >
             <div className="description1">
            <h1 className='title1'>{props.title}</h1>
           <p className='title1'>{props.tagline}</p>
           <button className='btn-see1'  onClick={toggle} >{isVisible ? <Info/>: 'FIND MORE'}</button>
           </div>
           
        </div>
        
       </main>
    )
 }
 export default GalleryTwo