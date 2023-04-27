import axios from 'axios'
import React, {useEffect} from 'react'
import { useAuth } from '/context/user'

const Logout = () => {
  const { logout } = useAuth();
    
  try{
     useEffect(() => {
      const callLogout = () => logout();

      callLogout();
      }, []);
  
  } catch (err) { console.log(err)}
   

  return <p>Logging out</p>
}

export default Logout