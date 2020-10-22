import React from 'react'
import ReactDOM from 'react-dom'
import firebase from "firebase"
import { BrowserRouter } from "react-router-dom"

import { FirebaseContext } from "./context"
import App from './App'

const firebaseConfig = {
  apiKey: "AIzaSyCebOn1BqxmTprrHyJWJaHT84JZjz2WXVY",
  authDomain: "royal-cruise.firebaseapp.com",
  databaseURL: "https://royal-cruise.firebaseio.com",
  projectId: "royal-cruise",
  storageBucket: "royal-cruise.appspot.com",
  messagingSenderId: "426474886061",
  appId: "1:426474886061:web:07ef29d209268d0ac40724",
  measurementId: "G-LQ1K9ZTG44"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, db: firebase.firestore, rdb: firebase.database }} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById('root')
)