import React,{useState} from 'react';
import './Contact.scss';

const Contact = () => {

const [msg, setMsg] = useState(false);

const handleSubmit=(e)=>{
  e.preventDefault();
  setMsg(true);

}

  return (
  <div className="Contact" id="contact">
      <div className="left">
          <img src="https://image.shutterstock.com/image-vector/business-handshake-contract-agreement-flat-260nw-405401863.jpg" alt="" />
      </div>
      <div className="right">
          
          <form onSubmit={handleSubmit}>
          <h2>Contact</h2>
              <input type="text"  placeholder="Email"/>
              <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
              <button type="submit">Send</button>
              {msg&&<span>Thanks,I'll reply ASAP, and will contact you thru mobile and email:)</span>}
          </form>
      </div>
  </div>
  )
};

export default Contact;
