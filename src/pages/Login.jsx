import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import bgImage from '../assets/denise-jans-Lq6rcifGjOU-unsplash.jpg'
import { toastError, toastSuccess } from "../helpers/ToastNotify";


const Login = () => {

  const { handleLogin, currentUser, handleResetPass, handleWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);
      toastSuccess("Logged in successfully");
      currentUser && navigate("/main");
      
    } catch (error) {
     toastError("Login failed", error.message); 
      
    }
  
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/main");
    }
  }, [currentUser, navigate]);

  return (
    <div className="flex min-h-screen w-full bg-zinc-300"  >
    <div className="w-full md:w-1/2 flex items-center justify-center p-4 " >
  
    <div className="relative bg-gray-900 w-full max-w-md rounded-2xl backdrop-blur-xl shadow-2xl p-10 border border-slate-700 text-slate-100">
    
  
  <h2 className="text-4xl font-bold text-white mb-2">Welcome</h2>
  <p className="text-slate-400 mb-8 text-sm">Please log in with your account details.</p>

  <form className="flex flex-col gap-5 h-auto" onSubmit={handleSubmit}>
    <input
      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition-all"
      placeholder="E-mail adress"
      type="email"
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition-all"
      placeholder="Password"
      type="password"
      onChange={(e) => setPassword(e.target.value)}
    />
 
    <div className="flex items-center justify-between text-xs font-medium">
      <button type="button" onClick={() => handleResetPass(email)} className="text-slate-400 hover:text-red-400 transition-colors">
        Forgot Password
      </button>
     
 

      <button type="button" onClick={() => navigate("/register")} className="text-red-500 hover:text-red-400">
       Create a New Account
      </button>
    </div>

    <div className="mt-4 space-y-3">
      <button type="submit" className="w-full rounded-lg bg-red-600 py-3 font-bold text-white hover:bg-red-700 shadow-lg shadow-red-900/20 transition-all active:scale-[0.98]">
        Sign In
      </button>

      <div className="divider text-xs text-slate-500">or</div>

      <button onClick={()=>{handleWithGoogle(); navigate("/main")}} className="w-full flex items-center justify-center gap-3 rounded-lg bg-slate-100 py-3 font-bold text-slate-900 hover:bg-white transition-all active:scale-[0.98]">
        <span className="text-xl">G</span>
       Continue with Google
      </button>
    </div>
  </form>
  <div>
   
  </div>
</div>

</div>

 <div
        className="hidden md:block md:w-1/2 h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
</div>
  );
};

export default Login;
