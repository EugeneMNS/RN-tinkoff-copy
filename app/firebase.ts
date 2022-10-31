import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBYYr8SmdhHr07riBnsLsO6YHQ5fuqY56w",
    authDomain: "tinkoff-8238e.firebaseapp.com",
    projectId: "tinkoff-8238e",
    storageBucket: "tinkoff-8238e.appspot.com",
    messagingSenderId: "77427473633",
    appId: "1:77427473633:web:4adecbc348dff642f64ba0",
    measurementId: "G-9578CMZWL9"
};

initializeApp(firebaseConfig)

export const auth = getAuth()

export const register = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

export const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()

