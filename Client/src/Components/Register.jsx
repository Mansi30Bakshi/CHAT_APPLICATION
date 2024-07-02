import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Login from "./Login";

const Register = () => {
  const [username, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const[isLoginorregister,setisLoginorregister] = useState("Register");
  const { setUsername, setId } = useContext(UserContext);
  const [logsigntext,setlogsigntext] = useState("Already a member? Login");

  async function handleSubmit(e) {
    e.preventDefault();
    const url =isLoginorregister === 'Register' ? 'Register' : 'Login';
    try {
      const { data } = await axios.post(url, { username, password });
      setUsername(username); // Call the setter function
      setId(data.id); // Call the setter function
      setSuccessMessage("Registration successful!"); // Set success message
      setErrorMessage(""); // Clear any previous error message
      console.log(data); // Handle success response as needed
    } catch (error) {
      setErrorMessage("Failed to register: " + error.message); // Set error message
      setSuccessMessage(""); // Clear any previous success message
      console.error("Failed to register:", error.message);
    }
  }

  const YourComponent = () => {
    const navigate = useNavigate();
  
    const handleLoginRedirect = () => {
      navigate("/login");
    };
  }
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
        USER's GATEWAY
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {successMessage && (
                <div
                  className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg text-center"
                  role="alert"
                >
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg text-center"
                  role="alert"
                >
                  {errorMessage}
                </div>
              )}
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
               {isLoginorregister}
              </button>
              {/* <button onClick={handleLoginRedirect} */}
              {/* <button
              type="submit"
                onClick={() =>{
                  setisLoginorregister('Login');
                  setlogsigntext('Not having an account? Register');
                }}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
              {isLoginorregister === 'Register' ? 'Already a member? Login' : 'Not having an account? Register'}

              </button> */}
              <button
  type="button"
  onClick={() => {
    setisLoginorregister(prevState => prevState === 'Register' ? 'Login' : 'Register');
  }}
  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
>
  {isLoginorregister === 'Register' ? 'Already a member? Login' : 'Not having an account? Register'}
</button>


            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
