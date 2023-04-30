import { useState } from "react";
import { GoogleAuthProvider,getAuth,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import AuthInitialization from "../Pages/Login/Firebase/firebase.init";


AuthInitialization();

const useFirebase =() =>{
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const auth = getAuth();

    const signInUsingGoogle = (navigate,from) =>{
        setIsLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .then(error=>{
            setError(error.message)
        })
        .finally(()=>setIsLoading(false))
        navigate(from)
    }

    useEffect(()=>{
        const unsubcribed = onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
        }
        else{
            setUser({});
        }
        setIsLoading(false)
    })
        return ()=> unsubcribed;
    },[])

    const logOut = () =>{
        setIsLoading(false)
        signOut(auth)
        .then(result=>{
            setUser({})
        })
        .finally(()=>setIsLoading(false))
    }

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        logOut
    }

}


export default useFirebase;