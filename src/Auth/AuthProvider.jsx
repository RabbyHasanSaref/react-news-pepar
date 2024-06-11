import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(auth);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const provider = new GoogleAuthProvider();

    // Create a new accoun
    const createNewUser = (email, password) => {
        setLoader(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const createGoogle = () => {
        setLoader(true)
      return signInWithPopup(auth, provider)
    }

    // user signs in
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign out a user
    const signOutUser = () => {
        setLoader(true)
        return signOut(auth);
    }

    // observer on the Auth change 
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observer on the Auth change ', currentUser);
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createNewUser,
        loginUser,
        signOutUser,
        createGoogle,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;