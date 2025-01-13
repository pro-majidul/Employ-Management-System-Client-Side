import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = async () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const authinfo = {
        user, setUser, loading, googleLogin,
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            } else {
                setUser(null);
                setLoading(false)
            }
        })
        return () => {
            unsubscribe()
        }
    })
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;