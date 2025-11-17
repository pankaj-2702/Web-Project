import './reservation.css'

import React, { useState } from 'react';
import jsPDF from 'jspdf';
//import logo from 'images\logo.jpeg'; // your restaurant logo

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    requests: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    
    doc.addImage('images/logo-light.jpeg', 80, 10, 50, 30);

    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text("Harvest House", 105, 50, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Reservation Receipt`, 105, 60, { align: 'center' });
    doc.line(20, 65, 190, 65);

    
    let y = 80;
    Object.entries(formData).forEach(([key, value]) => {
      doc.text(`${key.toUpperCase()}: ${value}`, 25, y);
      y += 10;
    });

    
    const bookingTime = new Date().toLocaleString();
    doc.text(`Booking Generated At: ${bookingTime}`, 25, y + 10);

    
    doc.setFont('times', 'italic');
    doc.text("Thank you for dining with us!", 105, y + 25,{align:'center'});


    window.open(doc.output("bloburl"));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

return (
     
  <form onSubmit={handleSubmit} className="reservation-form">
     <h1 id="book">Book Your Table — It Only Takes a Minute!</h1>
    <div className="inner-box">
      <div className="input-section">

        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="date">Reservation Date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="time">Reservation Time</label>
          <input
            type="time"
            id="time"
            name="time"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="guests">No. of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            placeholder="No. of Guests"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group area">
          <label htmlFor="requests">Special Requests</label>
          <textarea
            id="requests"
            name="requests"
            placeholder="Special Requests"
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className='input-group' id="submit">Reserve Table</button>
      </div>

      <div className="diet-coke">
        <img src="images/diet-coke-by-vivek.webp" alt="" id="diet-coke-img" />
        
        
      </div>
    </div>
  </form>
);

}

export default ReservationForm;
