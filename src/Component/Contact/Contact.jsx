import React, { useState } from 'react';
import './Contact.css';
import Apple from '../../Assets/Apple_background.jpg';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const firebaseConfig = {
  apiKey: "AIzaSyD-N4FGH7kDqIsGPC5Bc56cBCcL3DZQyzc",
  authDomain: "befelix-cec16.firebaseapp.com",
  projectId: "befelix-cec16",
  storageBucket: "befelix-cec16.appspot.com",
  messagingSenderId: "55637139129",
  appId: "1:55637139129:web:51aeda1fa90f2b852d0568",
  measurementId: "G-78T14HPCG5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        firstName,
        lastName,
        email,
        message
      });
      console.log("Document written with ID: ", docRef.id);
      setFormSubmitted(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className='Contact' id='Contact' style={{ backgroundImage: `url(${Apple})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#444' }}> 
      <div className="container"> 
        <h2>Contact Me</h2> </div>
        {!formSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        ) : (
          <div className="form-group">
            <p>Thank you for your message!</p>
          </div>
        )}


    <div className="social-icons">
      <a href="http://linkedin.com/in/felix-kabange-892a411b3"><FaLinkedin /></a>
      <a href='https://instagram.com/felix_kabange?igshid=YmMyMTA2M2Y=' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
      <a href='https://twitter.com/fellykabange?s=21&t=PCI42pGmSx0tWiCnd_vdaQ' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
      <a href='https://github.com/Felixkabange' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
    </div>
    </div>
  );
}

export default Contact;
