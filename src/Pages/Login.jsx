import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import './CSS/LoginSignup.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const { login } = useAuth() || {}; // Safely destructure login in case useAuth returns undefined
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      if (login) {
        login(); // Call login if available
        navigate('/'); // Redirect after login
      } else {
        setError('Login function is unavailable. Please check your AuthContext setup.');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='log'>

      <div className="login-container">
        <h2>Login Page</h2>
        {!showForm ? (
          <button onClick={() => setShowForm(true)}>Login</button>
        ) : (
          <form onSubmit={handleLogin} className="login-form">
            <div>
              <label>Username: </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;


