import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import './login.css'; // We'll create this CSS file next

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleLogin}>
        <div className="login-header">
          <h2>yO bykes®</h2>
          <p>Rooted in Bharat Since 2006</p>

          <p>Sing in to Admin Panel</p>
        </div>
          <div className="input-group">
            <FaUserAlt className="icon" />
            <input
              type="email"
              placeholder="Enter Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
          <button type="button" className="forgot-password-button">Forgot Password</button>
        </form>
      </div>
    </div>
  );
};

export default Login;