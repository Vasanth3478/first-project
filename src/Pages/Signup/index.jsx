import React, { useState } from 'react';
import '/src/styles/signup.scss'


const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }


    setError('');
    alert('Sign-Up Successful!');

  };

  return (


      <div className="signup-container">
        <div className="signup-content">
          <h2>Sign Up</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <table>
              <tr>
                <td >
                  <label>Email</label>
                </td>
                <td>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </td>
              </tr>
              <tr className='pass'>
                <td>
                  <label>Password</label>
                </td>
                <td>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </td>
              </tr>
              <tr className='pass'>
                <td>
                  <label>Confirm Password</label></td>
                <td>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td></td><td> <button type="submit" className='btn'>Sign Up</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
  );
};

export default Signup;
