import Register from "./Components/Register"
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:5001";
  axios.defaults.withCredentials = true;
  
  return (
    <>
     <Register/>
    </>
  )
}

export default App
