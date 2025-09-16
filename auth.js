console.log("✅ auth.js is loaded");

import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const loginForm = document.getElementById("login-form");

if (loginForm) {
  console.log("✅ login form found");

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    console.log("🔑 Attempting login with:", email);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("🎉 Login successful! Redirecting...");
      window.location.href = "home.html";
    } catch (error) {
      console.error("❌ Login failed:", error.message);
      alert("Login failed: " + error.message);
    }
  });
} else {
  console.error("⚠️ Login form not found in DOM");
}
