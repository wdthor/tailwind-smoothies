/* See Readme to configure Firebase */
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBg51LnG3K3g3NnTBtqlCqpt1DQM2lgETY",
    authDomain: "vue-tailwind-smoothies.firebaseapp.com",
    databaseURL: "https://vue-tailwind-smoothies.firebaseio.com",
    projectId: "vue-tailwind-smoothies",
    storageBucket: "vue-tailwind-smoothies.appspot.com",
    messagingSenderId: "694157555423",
    appId: "1:694157555423:web:cc939a819f5743c8771b6a"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()