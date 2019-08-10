import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBoqlNynbeYZMlMhSejGG_NEEcdnbsC1s4",
    authDomain: "dmhy-share.firebaseapp.com",
    databaseURL: "https://dmhy-share.firebaseio.com",
    projectId: "dmhy-share",
    storageBucket: "",
    messagingSenderId: "282849500504",
    appId: "1:282849500504:web:c681fb63405904eb"
});

export const db = app.firestore();