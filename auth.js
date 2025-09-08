import { auth, db } from './firebase.js';
import {
  createUserWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

import {
  doc,
  setDoc
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Get the signup form
const signupForm = document.getElementById("signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;

    try {
      // Sign up the user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user details to Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        uid: user.uid
      });

      console.log("Signup successful. Redirecting to login.html");

      // ✅ Redirect to login.html
      window.location.href = "login.html";

    } catch (error) {
      console.error("Signup failed:", error.message);
      alert("Signup failed: " + error.message);
    }
  });
}
