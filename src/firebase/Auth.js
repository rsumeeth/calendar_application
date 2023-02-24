// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState, createContext, useEffect, useContext } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtwdbjFfyeL8h9WK8FFBF7ZrvKocm5gLw",
  authDomain: "calendar-application-83b64.firebaseapp.com",
  projectId: "calendar-application-83b64",
  storageBucket: "calendar-application-83b64.appspot.com",
  messagingSenderId: "808461798550",
  appId: "1:808461798550:web:c07fdf3b31519ddade86b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

function useProviderAuth() {
  const [user, setUser] = useState();

  const signUp = (email, password, displayName) =>
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      updateProfile(user, { displayName });
      setUser(user);
      return user;
    });
  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      setUser(user);
      return user;
    });
  const signOutUser = () => signOut(auth).then(() => setUser(null));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    });

    return () => unsubscribe();
  });

  return { signIn, signUp, singOut: signOutUser, user };
}

export default AuthProvider;
