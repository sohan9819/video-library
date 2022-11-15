// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCPR51e60_janPrX1tJiVe3HPvr3fyF9fc',
  authDomain: 'animetube-a420b.firebaseapp.com',
  projectId: 'animetube-a420b',
  storageBucket: 'animetube-a420b.appspot.com',
  messagingSenderId: '236992957820',
  appId: '1:236992957820:web:baaac55f21a16403c928f9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export default app
