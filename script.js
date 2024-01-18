// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseConfig } from "./config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// establish analytical tracking
const analytics = getAnalytics(app);
// define auth
const auth = getAuth();
// define google auth provider
const googleProvider = new GoogleAuthProvider();

// define github auth provider
const githubProvider = new GithubAuthProvider();

// Email and Password Sign Up
let btn = document.querySelector("#sign-up");
btn.addEventListener("click", (Event) => {
  let form = document.querySelector("form");
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  console.log(typeof password);
  let resultBox = document.querySelector("#result-box");
  Event.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      alert("registered Successfully!");
      // resultBox.value = 'Yayy! Sign Up Successful!'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`${errorMessage}, ${errorCode}`);
      // form.style.display = 'none'
      // resultBox.value = 'Something Went Wrong! Your sign up is failed. Please try again by reloding the page and please also check your input before submitting.'
    });
});

// Google sign Up
let googleBtn = document.querySelector("#google-sign-up");
googleBtn.addEventListener("click", () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});

// GitHub Sign Up
let githubBtn = document.querySelector("#github-sign-up");
githubBtn.addEventListener("click", () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
});

console.log("App Here!");
