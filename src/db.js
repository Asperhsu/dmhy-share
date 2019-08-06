import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyB7NGEEKP0eaGjcGN0QG_YHUGi7oDMnpug",
    authDomain: "asper-learning.firebaseapp.com",
    databaseURL: "https://asper-learning.firebaseio.com",
    projectId: "asper-learning",
    storageBucket: "asper-learning.appspot.com",
    messagingSenderId: "344662505891",
    appId: "1:344662505891:web:ac55edd0033e9f60"
});

export const db = app.firestore();