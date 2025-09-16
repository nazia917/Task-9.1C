import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("Signed out successfully!");
    window.location.href = "login.html"; // redirect back to login
  } catch (error) {
    alert("Error signing out: " + error.message);
  }
});
