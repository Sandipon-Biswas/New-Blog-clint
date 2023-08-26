import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/store';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const dispath =useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the server
      const response = await axios.post("http://localhost:4444/api/v1/user/login", {
        email: inputs.email,
        password: inputs.password,
      });

      // Assuming the server responds with a success status
      if (response.data.success) {
        // Successful login, show alert and navigate to dashboard or profile
        dispath(authActions.login());
        alert("Login successful! Welcome back.");
        // Navigate to the appropriate route after successful login
        navigate("/"); // Adjust this route according to your app's structure
      }
    } catch (error) {
      // Handle login error here if needed
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="App" style={{ backgroundColor: 'black', minHeight: '100vh', padding: '20px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="mt-5">
              <h3 className="mb-4 text-white">Login Form</h3>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={inputs.email}
                  name="email"
                  onChange={handleLogin}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={inputs.password}
                  name="password"
                  onChange={handleLogin}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-3"
              >
                Login
              </button>
              <p className="text-white">
                Don't have an account? <a onClick={() => navigate("/registration")} href="#">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
