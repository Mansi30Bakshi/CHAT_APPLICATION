
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [user, setUser] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const login = () => {
//     axios.post('http://localhost:5001/login', user, { withCredentials: true })
//       .then((res) => {
//         alert(res.data.message);
//         if (res.data.success) {
//           navigate('/home'); // Navigate to the Home page
//         }
//       })
//       .catch((err) => console.error('Error during login: ', err));
//   };

//   const goToRegister = () => {
//     navigate('/signup');
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
//         <input
//           type="text"
//           name="email"
//           placeholder="Enter your Email"
//           value={user.email}
//           onChange={handleChange}
//           className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter your Password"
//           value={user.password}
//           onChange={handleChange}
//           className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
//         />
//         <div
//           onClick={login}
//           className="w-full bg-indigo-600 text-white py-2 rounded-md text-center cursor-pointer hover:bg-indigo-700 transition-colors mb-4"
//         >
//           Login
//         </div>
//         <div className="text-center mb-4">or</div>
//         <div
//           onClick={goToRegister}
//           className="w-full bg-gray-200 text-gray-700 py-2 rounded-md text-center cursor-pointer hover:bg-gray-300 transition-colors"
//         >
//           Register
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post('http://localhost:5001/login', user, { withCredentials: true })
      .then((res) => {
        alert(res.data.message);
        if (res.data.success) {
          navigate('/home'); // Navigate to the Home page
        }
      })
      .catch((err) => console.error('Error during login: ', err));
  };

  const goToRegister = () => {
    navigate('/signup');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={user.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={user.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <div
          onClick={login}
          className="w-full bg-indigo-600 text-white py-2 rounded-md text-center cursor-pointer hover:bg-indigo-700 transition-colors mb-4"
        >
          Login
        </div>
        <div className="text-center mb-4">or</div>
        <div
          onClick={goToRegister}
          className="w-full bg-gray-200 text-gray-700 py-2 rounded-md text-center cursor-pointer hover:bg-gray-300 transition-colors"
        >
          Register
        </div>
      </div>
    </div>
  );
};

export default Login;


