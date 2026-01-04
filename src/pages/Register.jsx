import { AuthContext } from "../context/AuthProvider";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/denise-jans-Lq6rcifGjOU-unsplash.jpg";

const Register = () => {
  const { register, handleWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(email, password);

    navigate("/home");
  };

  const googleSignUp = async () => {
    await handleWithGoogle();
    navigate("/home");
  };
  return (
    <div className="flex min-h-screen w-full bg-zinc-300">
    
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="relative w-full max-w-sm rounded-xl bg-white/10 backdrop-blur-xl shadow-2xl p-8 ring-1 ring-white/10">
          <h2 className="text-3xl font-semibold text-red-500 mb-8 text-center">
            Sign up
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              className="w-full bg-transparent border-b border-red-500/60 py-2 text-gray-900 placeholder-slate-500 outline-none focus:border-red-500"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full bg-transparent border-b border-red-500/60 py-2 text-gray-900 placeholder-slate-500 outline-none focus:border-red-500"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex flex-col gap-4">
              <button className="w-full rounded-md bg-red-500 py-3 font-semibold text-lime-50 hover:bg-red-600 transition-all">
                Register
              </button>

              <button
                type="button"
                onClick={googleSignUp}
                className="relative w-full rounded-md bg-red-600 py-3 font-semibold text-lime-50 hover:bg-red-700 transition-all"
              >
                Continue with Google
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold">G</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      
      <div
        className="hidden md:block md:w-1/2 h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
  
        <div className="w-full h-full bg-black/10"></div>
      </div>
    </div>
  );
};

export default Register;
