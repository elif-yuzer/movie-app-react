import React, { useContext } from 'react'
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import MovieProvider from './context/MovieProvider';
 // yolu senin proje yapına göre düzelt

function App() {

  


  return (
   
    <AuthProvider>
    <MovieProvider>
      <AppRouter />
      </MovieProvider>
      
    </AuthProvider>
  );
}

export default App;
