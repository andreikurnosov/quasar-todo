import * as firebase from "firebase/app";

import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCeABHGY3Ifh0qwkeszJ3AUN61DhtwHY4s",
  authDomain: "awesome-todo-85c35.firebaseapp.com",
  databaseURL: "https://awesome-todo-85c35.firebaseio.com",
  projectId: "awesome-todo-85c35",
  storageBucket: "awesome-todo-85c35.appspot.com",
  messagingSenderId: "472316994397",
  appId: "1:472316994397:web:27e3443ec56824ac9e7eb4"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();

export { firebaseAuth };
