import React from "react";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRouter";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import Watchlist from "../pages/Watchlist";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/private" element={<PrivateRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="details/:id" element={<MovieDetail />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="new" element={<Home />} />
          <Route path="popular" element={<Home />} />
          <Route path="imdb" element={<Home />} />
          
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
