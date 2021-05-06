import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import 'firebase/firestore';

import './index.css';
import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyBUjSr0RQUWjeQdrtIadYShK65gaf6aVvE',
  authDomain: 'shopping-cart-24584.firebaseapp.com',
  projectId: 'shopping-cart-24584',
  storageBucket: 'shopping-cart-24584.appspot.com',
  messagingSenderId: '785397294241',
  appId: '1:785397294241:web:ab4ec81763be4df0b6bce0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
