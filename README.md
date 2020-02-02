# ninja-smoothies

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Firebase and Firestore Setup

1. Install Firebase

```
npm install firebase --save
```

2. In a Firebase file (ex: firebase.js, or firebase/init.js)

```js
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

```

3. Get the Firebase config object online in the project configuration

```js
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
```

4. Initialize Firebase and export it

```js
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()
```
