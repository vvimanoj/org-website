import React from 'react'
import './contact.css'
import msgIcon from '../../assets/msg-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import locIcon from '../../assets/location-icon.png'
import webIcon from '../../assets/website.svg'
import whiteArr from '../../assets/white-arrow.png'

const contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "cca38464-e87e-4d02-a06b-2eba64bcc116");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

  
      if (res.success) {
        console.log("Success", res)
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msgIcon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={webIcon} alt="" />www.katariafoundation.in</li>
            <li><img src={mailIcon} alt="" />katariafoundation@yahoo.com</li>
            <li><img src={phoneIcon} alt="" />+91 706.542.5201</li>
            <li><img src={locIcon} alt="" />Kataria Factory, 327, Main Road, Conductor Colony, Burari, Delhi, 110084</li>
            </ul>    
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name'
            required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your message here</label>
            <textarea name="message" rows={6} placeholder='Enter your message' required ></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={whiteArr} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default contact
