import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, type User, type UserCredential } from "firebase/auth";
import { useEffect, useState, type ReactNode } from "react";
import AuthContext from "../Context/AuthContext";
import auth from "../../Firebase/Firebase.init";


const provider = new GoogleAuthProvider();

interface AuthProviderProps {
    children: ReactNode
}

const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // user login with firebase 
    const userLogin = (email: string, password: string): Promise<UserCredential> => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // user register with firebase 
    const userRegister = (email: string, password: string): Promise<UserCredential> => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user logout with firebase 
    const logout = (): Promise<void> => {
        setLoading(true);
        return signOut(auth);
    }


    const creteUserWithGoogle = (): Promise<UserCredential> => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);


    const authInfo = {
        user,
        loading,
        userLogin,
        userRegister,
        logout,
        creteUserWithGoogle,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;