import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAIQ0OrnCvidljVE8NJ-cBugCrMxWuXHio",
  authDomain: "devdeakinapp-2db02.firebaseapp.com",
  projectId: "devdeakinapp-2db02",
  storageBucket: "devdeakinapp-2db02.firebasestorage.app",
  messagingSenderId: "179167526859",
  appId: "1:179167526859:web:3e16f0ed33bda78dcf404e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
