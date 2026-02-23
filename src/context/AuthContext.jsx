import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess, toastWarn } from "../helpers/ToastNotify";
import { auth } from "../auth/firebase";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        setCurrentUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        });
      } else {
        setCurrentUser(false);
      }
    });
  }, []);

  const handleRegister = async (firstName, lastName, email, password) => {
    try {
      setLoading(true);

      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth?.currentUser, {
        displayName: `${firstName} ${lastName}`,
      });

      setCurrentUser({
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        displayName: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
      });
      toastSuccess("Registered Successful");
      navigate("/home");
    } catch (error) {
      toastError("Something went wrong");
    }
  };

  const handleSignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccess("Logged in Successfully");
      navigate("/");
    } catch (error) {
      toastError(error.message);
    }
  };
  const handleSignUpGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccess("Logged in with Google Successfully");
        console.log(result);

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth);
    toastSuccess("logout is successfully");
    navigate("/login");
  };

  const handleResetPass = async (email) => {
    if (!email) {
      toastWarn("Please enter your email");
    } else {
      try {
        await sendPasswordResetEmail(auth, email);
        toastSuccess("Password reset request sent.");
      } catch (error) {
        toastWarn("Could not send reset email.");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleRegister,
        handleSignIn,
        handleSignOut,
        currentUser,
        loading,
        handleSignUpGoogle,
        handleResetPass,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
