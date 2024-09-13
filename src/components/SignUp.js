import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const newUser = { username, password, role: 'user' }; // Default role is 'user'
      
      console.log('Sending new user data:', newUser); // Log the data being sent

      const response = await axios.post('http://localhost:5000/users', newUser); // Post to JSON server
      
      console.log('Response from server:', response); // Log the response

      alert('Registration successful! Please log in.');
      navigate('/'); // Redirect to login page
    } catch (error) {
      console.error('Sign-Up Error:', error.response || error); // Log the error details
      alert('Error during registration. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
