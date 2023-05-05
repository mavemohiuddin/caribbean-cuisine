/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './Firebase/firebase.config.js';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider()

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const gitSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser)
            setLoading(false)
        });

        return () => {
            return unsubscribe()
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        updateUser,
        googleSignIn,
        gitSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;