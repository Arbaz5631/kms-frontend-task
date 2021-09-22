import React from 'react'
import { KmsAction } from "../store";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
function Dasboard() {
    const kmsStateEmail=useSelector(state=>state.kmsStore.isLoggedIn)
  const kmsStatePassword=useSelector(state=>state.kmsStore.password)
  
    return (
        <div>
        <h1>Email Id  is {kmsStateEmail}</h1>
        <h1>Password  is {kmsStatePassword}</h1>
        <p><Link to="login">Login</Link></p> 
        </div>
        
    )
}

export default Dasboard;
