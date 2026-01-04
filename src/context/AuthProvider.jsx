import { auth } from "../auth/Firebase";
import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //*firebase den gelen veri nesne o yuzden null
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [togglemesaj, setTogglemesaj] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const register = async (email, password) => {
    //*firebase metodunu cagırıp auth email ve password bılgısını ekledım
    try {
      setLoading(true);

      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Şifre veya kullanıcı adı hatalı", error);
    }
    setLoading(false);
  };

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Şifre veya kullanıcı adı hatalı", error.message);
    }
    setLoading(false);

    return true;
  };

  const handleWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleLogOut = async () => {
    await signOut(auth)
      .then(() => {
        console.log("logout basarılı");
      })
      .catch((error) => {
        console.log("logout basarısz", error);
      });
  };

  const handleResetPass = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      setTogglemesaj(true)
      setTimeout(()=>{

        setTogglemesaj(false)

      },3000)

      
    } catch(error){
        setTogglemesaj(false)
        
    }
   
setTogglemesaj(true)
    
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        setCurrentUser,
        handleWithGoogle,
        handleLogin,
        loading,
        setLoading,
        handleLogOut,
        handleResetPass,
        togglemesaj
      }}
    >
      {children}
      
    </AuthContext.Provider>
  );
};

export default AuthProvider;
