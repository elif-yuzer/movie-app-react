import React, { useContext } from 'react'
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import MovieProvider from './context/MovieProvider';
import { ToastContainer } from 'react-toastify';
 

function App() {

  


  return (
   
    <AuthProvider>
    <MovieProvider>
      <AppRouter />
      <ToastContainer/>
      </MovieProvider>
      
    </AuthProvider>
  );
}

export default App;
