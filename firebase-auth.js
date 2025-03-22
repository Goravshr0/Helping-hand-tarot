// Firebase SDK import karo
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Firebase Config (sahi config yahan paste karo)
const firebaseConfig = {
  apiKey: "Tumhara API Key",
  authDomain: "helping-hand-tarot.firebaseapp.com",
  projectId: "helping-hand-tarot",
  storageBucket: "helping-hand-tarot.appspot.com",
  messagingSenderId: "790794149976",
  appId: "1:790794149976:web:20014462146857ee7b2a2d"
};

// Firebase Initialize karo
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 SIGNUP FUNCTION (Naya user banane ke liye)
function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User Signup Success:", userCredential.user);
      alert("Signup Successful! Login Now.");
    })
    .catch((error) => {
      console.error("Signup Error:", error);
      alert(error.message);
    });
}

// 🔹 LOGIN FUNCTION (Existing user ke liye)
function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Login Success:", userCredential.user);
      alert("Login Successful!");
    })
    .catch((error) => {
      console.error("Login Error:", error);
      alert(error.message);
    });
}

// 🔹 LOGOUT FUNCTION
function logout() {
  signOut(auth)
    .then(() => {
      console.log("User Logged Out");
      alert("Logged Out Successfully!");
    })
    .catch((error) => {
      console.error("Logout Error:", error);
      alert(error.message);
    });
}

// Export karo functions ko
export { signUp, login, logout };

// Firebase SDK import karo
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Tumhara Firebase Config (yahan apni Firebase ki details daalo)
const firebaseConfig = {
    apiKey: "TUMHARA_API_KEY",
    authDomain: "helping-hand-tarot.firebaseapp.com",
    projectId: "helping-hand-tarot",
    storageBucket: "helping-hand-tarot.appspot.com",
    messagingSenderId: "790794149976",
    appId: "1:790794149976:web:20014462146857ee7b2a2d"
};

// Firebase Initialize karo
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup Function
export function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Signup Successful!");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}

// Login Function
export function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}

// Logout Function
export function logout() {
    signOut(auth)
        .then(() => {
            alert("Logout Successful!");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}
