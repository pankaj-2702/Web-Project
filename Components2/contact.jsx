import './contact.css'
import { FaInstagram } from "react-icons/fa";   // Instagram
import { MdEmail, MdLocationOn } from "react-icons/md"; // Email + Location
import { FaPhoneAlt } from "react-icons/fa";    // Phone
import { FaClock } from "react-icons/fa";

function ContactUs(){

    return (
        <footer className='contact-page'>
         <div className="upper-section"></div>
         <div className="middle"></div>
         <div className="bottom">
            <h1 id="title-contact">Harvest House</h1>
            <div className="contact-deatils">
                <div className="location">
                    <h2>LOCATION</h2>
                    <a className='details insta-link' href='https://maps.app.goo.gl/Rw5d4mRsEjfAZ6ND9' target="_blank" 
                            rel="noopener noreferrer"><MdLocationOn size={33} color="white" /><br></br>
                        NIT Srinagar,<br></br>
                        Jammu & Kashmir</a>
                
                    
                </div>
                <div className="Phone">
                    <h2>PHONE</h2>
                    <p className='details'><FaPhoneAlt size={33} color="white" /><br></br>
                        80XXXXX08</p>
                </div>
                <div className="email">
                    <h2>EMAIL</h2>
                    <a className='details insta-link' href='mailto:iamlive19@gmail.com' target="_blank" 
                  rel="noopener noreferrer">  <MdEmail size={33} color="white" /> <br></br>
                    harvesthouse@gmail.com</a>
                </div>
                <div className="Hours">
                    <h2>HOURS</h2>
                    <p className='details'><FaClock size={33} color="white" /><br />
                        08:30AM - 10:30PM</p>
                    
                </div>
                <div className="insta">
                    <h2 >INSTAGRAM</h2>
                    <a className='details insta-link' href="https://www.instagram.com/pankaj_ku.mar?igsh=dXk5N29uNGEzb3Iy"  target="_blank" rel="noopener noreferrer"><FaInstagram size={35} color="white" />
                    <br />
                    </a>
                </div>
            </div>
         </div>
        </footer>
    )
}
export default ContactUs