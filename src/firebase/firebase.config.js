// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH-P9zwSG3PM0qICvpIcGeOicDVJryRVs",
  authDomain: "nekos-island.firebaseapp.com",
  projectId: "nekos-island",
  storageBucket: "nekos-island.appspot.com",
  messagingSenderId: "402803422547",
  appId: "1:402803422547:web:9425449b7054e03d48dda6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;