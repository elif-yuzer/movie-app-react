import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Main from "../pages/Main";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import MovieDetail from "../pages/MovieDetail";
import MyNavbar from "../companents/MyNavbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
     <MyNavbar />

      <Routes>  
      <Route path="/" element={<Main/>}/>

         
             <Route path="/home" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRouter />}>
          <Route path="/details/:id" element={<MovieDetail/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
