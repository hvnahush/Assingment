import React, { useState } from 'react'
import './Contact.css'
import message_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import white_arrow from '../../Assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d9c8dcb7-f126-4109-9dc7-49b98d3511ae");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    

  return (
    <div className='contact'>
     <div className='contact-col'>
        <h3>Send us a message <img src={message_icon} alt=''/></h3>
        <p>Feel free to reach out through contact form or contact information below</p>
        <ul>
            <li><img src={mail_icon} alt=''/>hvnahush@gmail.com </li>
            <li><img src={phone_icon} alt=''/>+112 678998973</li>
            <li><img src={location_icon} alt=''/>Wellington Square, Oxford OX1 2JD,<br/>United Kingdom </li>
        </ul>
        </div> 
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message</label>
                <textarea name='message' rows='6'placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn darkBtn'>Submit <img src={white_arrow} alt=''/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
