import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import bgImage from '../assets/denise-jans-Lq6rcifGjOU-unsplash.jpg'


const Login = () => {

  const { handleLogin, loading, setLoading, currentUser, handleResetPass,togglemesaj } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(email, password);
    currentUser ? navigate("/home") : navigate("/login");
  };

  return (
    <div className="flex min-h-screen w-full bg-zinc-300"  >
    <div className="w-full md:w-1/2 flex items-center justify-center p-4" >
    
    <div className="relative w-full max-w-md rounded-2xl backdrop-blur-xl shadow-2xl p-10 border border-slate-700 bg-slate-900/90 text-slate-100">
  

  {togglemesaj && (
    <div className="fixed top- right-5 z-100 animate-bounce">
      <div className="alert alert-success shadow-lg">
        <span>Giriş bağlantısı gönderildi!</span>
      </div>
    </div>
  )}

  <h2 className="text-4xl font-bold text-white mb-2">Hoş Geldiniz</h2>
  <p className="text-slate-400 mb-8 text-sm">Lütfen hesap bilgilerinizle giriş yapın.</p>

  <form className="flex flex-col gap-5 h-auto" onSubmit={handleSubmit}>
    <input
      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition-all"
      placeholder="E-posta adresi"
      type="email"
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-red-500 transition-all"
      placeholder="Şifre"
      type="password"
      onChange={(e) => setPassword(e.target.value)}
    />

    <div className="flex items-center justify-between text-xs font-medium">
      <button type="button" onClick={() => handleResetPass(email)} className="text-slate-400 hover:text-red-400 transition-colors">
        Şifremi Unuttum
      </button>
      <button type="button" onClick={() => navigate("/register")} className="text-red-500 hover:text-red-400">
        Yeni Hesap Oluştur
      </button>
    </div>

    <div className="mt-4 space-y-3">
      <button type="submit" className="w-full rounded-lg bg-red-600 py-3 font-bold text-white hover:bg-red-700 shadow-lg shadow-red-900/20 transition-all active:scale-[0.98]">
        Giriş Yap
      </button>

      <div className="divider text-xs text-slate-500">veya</div>

      <button className="w-full flex items-center justify-center gap-3 rounded-lg bg-slate-100 py-3 font-bold text-slate-900 hover:bg-white transition-all active:scale-[0.98]">
        <span className="text-xl">G</span>
        Google ile Devam Et
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
