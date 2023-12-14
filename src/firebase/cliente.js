import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCt6WOio_wq6NCpM9xUP0FRzdxdWpeQ4ck",
    authDomain: "proyectoreact-9a98d.firebaseapp.com",
    projectId: "proyectoreact-9a98d",
    storageBucket: "proyectoreact-9a98d.appspot.com",
    messagingSenderId: "199528351351",
    appId: "1:199528351351:web:f43983d02c71e1812aa872"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  