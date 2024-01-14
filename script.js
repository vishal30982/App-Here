// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseConfig } from "./config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
let btn = document.querySelector('#sign-up');
btn.addEventListener('click', (Event)=>{
    let form = document.querySelector('form')
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let resultBox = document.querySelector('#result-box');
    Event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        alert('registered Successfully!');
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

console.log('App Here!')
