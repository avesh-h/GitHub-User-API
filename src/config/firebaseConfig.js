import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBGMZmp_SpULQd7moTnvuQno0Cp1MT0NQk",
    authDomain: "fir-landingform.firebaseapp.com",
    projectId: "fir-landingform",
    storageBucket: "fir-landingform.appspot.com",
    messagingSenderId: "956099599246",
    appId: "1:956099599246:web:909a4ca0ae8f39f985e2df"
  };

  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)

  