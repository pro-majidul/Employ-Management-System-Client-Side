import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";
import usePublicAxios from "../hooks/usePublicAxios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [darkMode, setDarkMode] = useState(false);
    const publicAxios = usePublicAxios()

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = async () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logoutUser = async () => {
        setLoading(true);
        return signOut(auth)
    }

    const userSignIn = async (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const UserSignUp = async (email, password) => {
        setLoading(true);
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userProfileUpdate = async (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(true)
            if (currentUser?.email) {
                // setUser(currentUser)
                publicAxios.post('/jwt', { email: currentUser.email })
                    .then(res => {
                        // console.log(res)
                        if (res?.data?.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setUser(currentUser)
                            setLoading(false)
                        }
                    })

            } else {
                setUser(null);
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        })

        return () => {
            unsubscribe()
        }
    })


    const authinfo = {
        user,
        setUser,
        loading,
        googleLogin,
        logoutUser,
        userSignIn,
        userProfileUpdate,
        UserSignUp,
        setLoading,
        setDarkMode,
        darkMode,
    }


    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;