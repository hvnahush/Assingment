import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Firebase';  // Import firebase config
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add additional user info to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        uid: user.uid,
      });

      alert('Signup successful!');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error signing up:', error.message);
      alert(error.message);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>SIGN UP</h1>
        <div className="login-field">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignup}>Signup</button>
        <p className="login-login">
          Already have an account? <span onClick={handleLogin}>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
