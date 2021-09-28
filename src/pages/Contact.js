import React from "react";
import "../styles/Contact.css";
import PizzaLeft from "../assets/pizzaLeft.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form action="" method="POST" id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter full name..." required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter email..." required />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="" placeholder="Enter messages..." required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
