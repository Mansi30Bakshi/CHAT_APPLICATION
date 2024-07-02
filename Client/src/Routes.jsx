import React, { useContext } from 'react'
// import register from './Components/Register';
import { UserContext } from './Components/UserContext'
import Register from './Components/Register';


const Routes = () => {
  const {username,id} = useContext(UserContext);
  if(username){
    return 'logged in'+username;
  }

  return (
    <>
     <Register/>
    </>
  )
}

export default Routes