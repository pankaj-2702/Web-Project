import './galleryone.css'
import Info from './info';
import { useState } from 'react';
 //import { imagesInfo } from './info';
function GalleryOne(props){
    const [isVisible, setIsVisible] = useState(false); // initial state

  const toggle = () => {
    setIsVisible(!isVisible); // toggle true/false
    
  }
    return(
       <main className="one">
        <div className="left-section" style={{backgroundColor:props.color}}  >
           <div className="description" >
            <h1 className='title'>{props.title}</h1>
           <p className='title'>{props.tagline}</p>
           <button className='btn-see' onClick={toggle}>{isVisible ? <Info/>: 'FIND MORE'}</button>
           </div>
        </div>
        <div className="right-section">
             <p className='compl'>{props.compliment}</p>
            <img src={props.image} alt="" id="main-img" />
           <img id='side-img-1' src={props.image1} alt="" />
        </div>
        
       </main>
    );
}
export default GalleryOne