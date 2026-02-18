import { auth } from "../auth/Firebase";
import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toastError, toastSuccess, toastWarn } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  //*firebase den gelen veri nesne o yuzden null
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if(user){
        const {email,photoURL,displayName}=user
        setCurrentUser({
          email:email,
          photoURL:photoURL,
          displayName:displayName
        })
      }else {
        setCurrentUser(false)
      }
      
    });
  }, []);

  const register = async (email, password) => {
    //*firebase metodunu cagırıp auth email ve password bılgısını ekledım
    try {
      setLoading(true);

      await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser(auth.currentUser)
      toastSuccess("Registered Successfully");
        await updateProfile(auth?.currentUser, { displayName: email.split("@")[0] });
      navigate("/");
    } catch (error) {
     /*  console.log("Şifre veya kullanıcı adı hatalı", error); */
    }
    setLoading(false);
  };

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(auth.currentUser)
      toastSuccess("Logged in")
       await updateProfile(auth?.currentUser, { displayName: email.split("@")[0] });
       navigate("/");
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

  const handleLogOut =  () => {
     signOut(auth)
      .then(() => {
        /* console.log("logout basarılı"); */
        toastSuccess("Logged Out")
      })
      .catch((error) => {
        console.log("logout basarısz", error);
      });
  };

  
  const handleResetPass = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      if(!email) {
        toastWarn("Please enter your email")
      }else if (email){
        toastSuccess("Password reset request sent.")
      }
      

      
    } catch(error){ 
        
        toastWarn("Could not send reset email.");
    }
   
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
       
    
      }}
    >
      {children}
      
    </AuthContext.Provider>
  );
};

export default AuthProvider;
