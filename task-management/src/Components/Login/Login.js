import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase.js';  // Import Firebase auth
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Handle login action
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Sign in with Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Logged in successfully: ", userCredential.user);
            alert('Login successful');
            navigate('/main');  // Redirect to home page after successful login
        } catch (error) {
            console.error("Error logging in:", error.message);
            alert('Invalid email or password. Please try again.');
        }
    };

    // Navigate to Signup page
    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <div className='login'>
            <div className='login-container'>
                <h1>LOGIN</h1>
                <form onSubmit={handleLogin}>
                    <div className='login-field'>
                        <input
                            type='email'
                            placeholder='Email Address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit'>Login</button>
                </form>
                <p className='login-login'>
                    Don't have an account? <span onClick={handleSignup}>Signup here</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
