import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registation = () => {
  
  const [inputs,setInputs]=useState({
    name:"",
    email:"",
    password:"",
  })
  const navigate =useNavigate();


  const handleRegistration = (e) => {
      setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
      }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post("http://localhost:4444/api/v1/user/register", {
        username: String(inputs.name),
        email: String(inputs.email),
        password: String(inputs.password),
      });
  
      // Registration successful, show alert and navigate to login
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      // Handle registration error here if needed
      console.error("Registration failed:", error);
    }
  };
  return (
    <div className="App" style={{ backgroundColor: 'black', minHeight: '100vh', padding: '20px' }}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="mt-5">
            <h3 className="mb-4 text-white">Registration Form</h3>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={inputs.name}
                name="name"
                onChange={handleRegistration}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={inputs.email}
                name="email"
                onChange={handleRegistration}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={inputs.password}
                name="password"
                onChange={handleRegistration}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mb-3"
              
            >
              Register
            </button>
            <p className="text-white">
              Already have an account? <a onClick={()=> navigate("/login")} href="#">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Registation