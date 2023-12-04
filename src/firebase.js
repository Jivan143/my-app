import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAsV6535zF54yhkjJkjrkjm0LcczGS05nQ",
  authDomain: "assigment1-45b2c.firebaseapp.com",
  projectId: "assigment1-45b2c",
  storageBucket: "assigment1-45b2c.appspot.com",
  messagingSenderId: "174383168857",
  appId: "1:174383168857:web:f9b9aefdbd687c0e282048",
  measurementId: "G-3GFWVC4RV8"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore=getFirestore(app);