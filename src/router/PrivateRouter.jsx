import React, { useContext } from "react";
import AuthProvider, { AuthContext } from "../context/AuthProvider";

import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";


const PrivateRouter = () => {
  const {currentUser,loading}=useContext(AuthContext)

  if(loading){
    
  return <h1>Yükleniyor....</h1>;
  }




  return currentUser ? (
    <>
      
  
  
      <Outlet /> 
    
    </>
    
  ) : (
    <Navigate to="/login" replace />
  )
};

export default PrivateRouter;
