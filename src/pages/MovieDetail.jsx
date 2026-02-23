import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/bgimage.jpg";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const { handleRegister, currentUser } = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleRegister(firstName, lastName, email, password);
  };

  return (
    <div
      className=" bg-cover bg-center bg-no-repeat min-h-screen w-full flex items-center fixed justify-center bg-zinc-300 "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className=" md:w-1/2 ">
        <div className=" bg-gray-900/70 max-w-md rounded-2xl backdrop-blur-xl shadow-2xl p-10 border border-slate-700 text-slate-100">
          <h2 className="text-4xl font-bold text-white mb-4">Register</h2>

          <form className="flex flex-col gap-5 h-auto" onSubmit={handleSubmit}>
            <div>
              <input
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition-all"
                placeholder="FirstName"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition-all"
                placeholder="LastName"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

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

            <div className="mt-4 space-y-3">
              <button
                type="submit"
                className="w-full rounded-lg bg-gray-400 py-3 font-bold text-white hover:bg-gray-700  shadow-lg shadow-red-900/20 transition-all active:scale-[0.98]"
              >
                Sign Up
              </button>

              <div></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
