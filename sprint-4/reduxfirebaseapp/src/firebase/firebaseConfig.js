import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAhPOxs6hKuoddn-V7Bmt2KIW2gjqMI_Hg",
  authDomain: "fir-test-2-b1fa2.firebaseapp.com",
  projectId: "fir-test-2-b1fa2",
  storageBucket: "fir-test-2-b1fa2.appspot.com",
  messagingSenderId: "1027407705065",
  appId: "1:1027407705065:web:9d80c360e10859b14f9178"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);