import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './../Firebase/firebase.config';




export const AuthContext = createContext(null)

const googleProviders = new GoogleAuthProvider()
const githubProviders = new GithubAuthProvider()
const ContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createGoogleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProviders)
    }
    const createGithubUser = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProviders)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleUpdateProfile = (name , img) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name , 
            photoURL: img
        })
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = { user, createGoogleUser, loading ,createGithubUser, createUser, signIn, logOut  ,handleUpdateProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
ContextProvider.propTypes = {
    children: PropTypes.node
}

export default ContextProvider;