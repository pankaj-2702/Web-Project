import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../Components/home'
import Header from '../Components/header.jsx'
import GalleryOne from '../Components/galleryOne.jsx'
import GalleryTwo from '../Components/galleryTwo.jsx'
import { galleryData } from '../Components/gallery.js'
import { galleryData2 } from '../Components/galleryDataTwo.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ReservationForm from '../Components2/reservation.jsx'
import Menu from '../Components2/menu.jsx'
import ContactUs from '../Components2/contact.jsx'
function App() {
  const allData = [...galleryData, ...galleryData2];

 useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // duration in ms, animate only once
  }, []);

  return (
    
    <>
   
     
       <div className="scroll-container">
        <section className='scroll-page'>
          <Header/>
          <div id="home">
            <Home/>
          </div>
          </section>
          <div className="firstCont" id="gallery">
             {allData.map((item, index) => (
        index % 2 === 0 ? (
          <section className='scroll-page'>
            <GalleryOne key={item.id} {...item} />
          </section>
          
        ) : (
          <section className='scroll-page'>
            <GalleryTwo key={item.id} {...item} />
          </section>
        )
      ))}
           
          </div>
            
               <section className='scroll-page' id="reservation" >
                <ReservationForm/>
               </section>
               
               <section className='scroll-page' id="menu" >
                <Menu/>
               </section>
               <section className='scroll-page' id="contact" >
                <ContactUs/>
               </section>
       </div>
    
   
    </>
  )
}

export default App
