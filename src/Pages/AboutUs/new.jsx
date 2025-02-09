import React, { useState } from 'react';

// const AboutUs = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [district, setDistrict] = useState('');  
   const [showAlert, setShowAlert] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (!name || !email || !message ||!phone ||!password ||!district) {
        setShowAlert(true); // Set state to trigger the alert
      }
       else {
        // If all fields are filled, reset alert and log the data
        setShowAlert(false);
        console.log("Form submitted:", { name, email, message,phone,password,district });
  

    alert(`Name: ${name}, Email: ${email}, Message: ${message},Phone: ${tel},Password: ${password},District: ${district}`);
  };

  
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleDistrictChange = (e) =>  setDistrict(e.target.value);

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter your Phone Number"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your Password"
          />
        </div>
        <div>
        
          <input
            type="radio"
            id="pudukkotai"
            name="pudukkotai"
            value="pudukkotai"
            onChange={handleDistrictChange}
          />
          <label htmlFor="pudukkotai">Pudukkotai</label>
        </div>
<div>
<h4>Select Your District</h4>
        
        <div>
          <input
            type="radio"
            id="thanjavur"
            name="thanjavur"
            value="thanjavur"
            onChange={handleDistrictChange}
          />
          <label htmlFor="thanjavur">Thanjavur</label>
        </div>

       <div>
          <input
            type="radio"
            id="madurai"
            name="madurai"
            value="madurai"
            onChange={handleDistrictChange}
          />
          <label htmlFor="madurai">Madurai</label>
        </div>
        </div>


        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {showAlert && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          All fields are required!
        </div>
      )}
    </div>
  );
};

// export default AboutUs;
