import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
   


  const register = () => {
    const { name, email, password, cpassword } = user;
    if (name && email && password && password === cpassword) {
      axios.post("http://localhost:5001/signup", user)
        .then(res => {
          alert("Registration Successful");
          if (res.data.success) {
            navigate('/home'); // Navigate to the Home page
          }
          console.log(res.data);
        })
        .catch(err => {
          console.error("Error during registration: ", err);
          alert("User already Registered");
        });
    } else {
      alert("Please fill all fields correctly");
    }
  };


  const navigate = useNavigate();
  const gotoLogin = () =>{
    navigate('/login');
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <input
          type="password"
          name="cpassword"
          value={user.cpassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <div
          onClick={register}
          className="w-full bg-indigo-600 text-white py-2 rounded-md text-center cursor-pointer hover:bg-indigo-700 transition-colors mb-4"
        >
          Register
        </div>
        <div className="text-center mb-4">or</div>
        <div
        onClick={gotoLogin}
         className="w-full bg-gray-200 text-gray-700 py-2 rounded-md text-center cursor-pointer hover:bg-gray-300 transition-colors">
          Login
        </div>
      </div>
    </div>
  );
};
export default Signup

