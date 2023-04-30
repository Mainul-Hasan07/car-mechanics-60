import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const AuthInitialization = () =>{
    return initializeApp(firebaseConfig);
}

export default AuthInitialization;