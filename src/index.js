import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBPW85YuwNHu_bIvg4BG1-c3cOFN1cuLYs",
  authDomain: "chat-react-7a32a.firebaseapp.com",
  projectId: "chat-react-7a32a",
  storageBucket: "chat-react-7a32a.appspot.com",
  messagingSenderId: "1084989245328",
  appId: "1:1084989245328:web:044819715f56cc41151515",
  measurementId: "G-8535E59GJT"
}
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

