import React, { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from './AuthContext';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    
    //     const { login } = useAuth();
    //     const [username, setUsername] = useState('');
    //     const [password, setPassword] = useState('');
    //     const [message, setMessage] = useState('');
    //     const [showForm, setShowForm] = useState(false);
    //     const handleLogin = (username, password) => {
    //       // e.preventDefault();
    //       // Simple authentication logic (for demonstration purposes)
    //       if ({username}  && {password}) {
    //         login(); // Set isAuthenticated to true
    //         setMessage(`Welcome back, ${username}!`);
    //         alert('User has been successfully logged in!');
    //       } else {
    //         setMessage('Invalid username or password');
    //       }
    //     };


    // // const [name, setName] = useState('');
    // // const [email, setEmail] = useState('');
    // // const [password, setPassword] = useState('');
    // // const [isLoginMode, setIsLoginMode] = useState(false); // Track whether the user is in login or signup mode
    // // const [message, setMessage] = useState('');

    // // const handleSubmit = async (e) => {
    // //     e.preventDefault();
    // //     try {
    // //         const endpoint = isLoginMode ? 'login' : 'register';
    // //         const data = isLoginMode ? { email, password } : { name, email, password }; 
    // //         const response = await axios.post(`http://localhost:5000/${endpoint}`, data);
    // //         setMessage(response.data.message || 'Success');
    // //     } catch (error) {
    // //         const errorMessage = error.response?.data || 'An error occurred';
    // //         setMessage(errorMessage);
    // //     }
    // // };

    // return (
    //     <div className='loginsignup'>
    //         <div className="loginsignup-container">
    //             <h1>{isLoginMode ? 'Login' : 'Sign Up'}</h1>
    //             <form onSubmit={handleSubmit}>
    //                 {!isLoginMode && (
    //                     <input
    //                         type="text"
    //                         placeholder='Your Name'
    //                         value={name}
    //                         onChange={(e) => setName(e.target.value)}
    //                         required
    //                     />
    //                 )}
    //                 <input
    //                     type="email"
    //                     placeholder='Email Address'
    //                     value={email}
    //                     onChange={(e) => setEmail(e.target.value)}
    //                     required
    //                 />
    //                 <input
    //                     type="password"
    //                     placeholder='Password'
    //                     value={password}
    //                     onChange={(e) => setPassword(e.target.value)}
    //                     required
    //                 />
    //                 <button type="submit">{isLoginMode ? 'Login' : 'Continue'}</button>
    //             </form>
    //             <p className='loginsignup-login'>
    //                 {isLoginMode ? "Don't have an account?" : 'Already have an account?'}
    //                 <span onClick={() => setIsLoginMode(!isLoginMode)}>
    //                     {isLoginMode ? ' Sign Up here' : ' Login here'}
    //                 </span>
    //             </p>
    //             <div className="loginsignup-agree">
    //                 <input type="checkbox" required />
    //                 <p>By continuing, I agree to the terms of use & privacy policy</p>
    //             </div>
    //             {message && <p className='message'>{message}</p>} {/* Display success/error messages */}
    //         </div>
    //     </div>
    // );
    

    const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication logic (for demonstration purposes)
    if (username === 'user' && password === 'password') {
      login(); // Set isAuthenticated to true
    } else {
      setError('Invalid username or password');
    }
  };
  return (
    <div>
      <h2>Login Page</h2>
      {!showForm ? (
        <button onClick={() => setShowForm(true)}>Login</button>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
        const [formData, setFormData] = useState({
           username: '',
           email: '',
           password: '',
           confirmPassword: '' 
        });
         const handleChange = (e) => {
           setFormData({ ...formData, [e.target.name]: e.target.value });
         };
         const handleSubmit = async (e) => {
           e.preventDefault();
           try {
             const response = await fetch('http://localhost:9000/signup', { // Ensure port matches backend
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
            },
              body: JSON.stringify(formData),
             });
            const data = await response.json();
           if (response.ok) {
               alert(data.message);
             } else {
               alert(data.message || 'Something went wrong');
            }
           } catch (error) {
             console.error('Error:', error);
             alert('Error connecting to the server');
           }
         };
       return (
         <form onSubmit={handleSubmit} className='body'>
           <div className="background-animation">
            <img src={`${process.env.PUBLIC_URL}/walking guy.gif`} alt="Guy walking" className="walking-guy" />
            {/* <img src={`${process.env.PUBLIC_URL}/d6b724c585cfce2a34f1c449d51dcd93.gif`} alt="Guy walking" className="walking-guy" /> */}
           </div>
          <label className='name'>Sign up Page</label>
           <input
             type="text"
             name="username"
             value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className='username'
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
             <input
               type="password"
               name="confirmPassword"
               value={formData.confirmPassword}
               onChange={handleChange}
               placeholder="Confirm Password"
               required
             />
             <button type="submit">Sign Up</button>
           </form>
        );
      
};

export default LoginSignup;
