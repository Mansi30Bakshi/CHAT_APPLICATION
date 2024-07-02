import axios from "axios";
import { UserContextProvider } from "./Components/UserContext";
import Routes from "./Routes";
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  axios.defaults.baseURL = "http://localhost:5001";
  axios.defaults.withCredentials = true;
  
  return (
    <UserContextProvider>
    <Routes/>
    </UserContextProvider>
  )
}

export default App
