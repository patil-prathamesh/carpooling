import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCO8GvM_gSHGhwqfNNviIJfiA7hrPcCgnM",
    authDomain: "carpool-6536b.firebaseapp.com",
    projectId: "carpool-6536b",
    storageBucket: "carpool-6536b.appspot.com",
    messagingSenderId: "694869126935",
    appId: "1:694869126935:web:c0239dc012bc8a3fea1152",
    measurementId: "G-TDYETCTJPP"
};



const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db,  storage };