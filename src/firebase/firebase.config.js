import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";

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
const auth = getAuth(app)
export default auth