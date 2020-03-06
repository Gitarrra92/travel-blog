import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChsSrkugmaRLygKR8IzGGFjT1EiaJmfFs",
  authDomain: "travel-website-2fd73.firebaseapp.com",
  databaseURL: "https://travel-website-2fd73.firebaseio.com",
  projectId: "travel-website-2fd73",
  storageBucket: "travel-website-2fd73.appspot.com",
  messagingSenderId: "725745572723",
  appId: "1:725745572723:web:1ae8d99d1f1da9e6"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
