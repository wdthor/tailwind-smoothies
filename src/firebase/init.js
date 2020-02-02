/* See Readme to configure Firebase */
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCoy_1w_kzmSbJr5-BdUKQlMSJfgy2oHsI",
    authDomain: "udemy-ninja-smoothies-7da11.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-7da11.firebaseio.com",
    projectId: "udemy-ninja-smoothies-7da11",
    storageBucket: "udemy-ninja-smoothies-7da11.appspot.com",
    messagingSenderId: "370548450430",
    appId: "1:370548450430:web:0749479adacec72c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()