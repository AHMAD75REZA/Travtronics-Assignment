import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/users', {
        params: { username, password },
      });

      const user = response.data[0]; // Assuming JSON Server returns array
      if (user) {
        alert(`Welcome ${user.username}`);
        localStorage.setItem('user', JSON.stringify(user)); // Save user info in localStorage
        navigate('/products'); // Redirect to product page
      } else {
        alert('Invalid credentials, please try again.');
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> {/* Add link to Sign Up page */}
    </div>
  );
};

export default Login;
