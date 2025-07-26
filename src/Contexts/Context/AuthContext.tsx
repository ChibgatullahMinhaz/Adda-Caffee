import type { User, UserCredential } from "firebase/auth";
import { createContext } from "react";


export interface AuthContextType {
    loading: boolean;
    user: User | null
    userLogin: (email: string, password: string) => Promise<UserCredential>,
    userRegister: (email: string, password: string) => Promise<UserCredential>,
    logout: () => Promise<void>,
    creteUserWithGoogle: () => Promise<UserCredential>,
}

const AuthContext = createContext<AuthContextType | null>(null)
export default AuthContext;