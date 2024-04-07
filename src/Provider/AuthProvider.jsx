import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //   register a user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login a user
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout a user
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state change", currentUser);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    logInUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
