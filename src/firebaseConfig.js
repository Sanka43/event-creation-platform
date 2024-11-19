// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnQuPjpAnBMSKUl6hV39Ui-y-vgOCIeSU",
  authDomain: "create-event-e0919.firebaseapp.com",
  databaseURL: "https://create-event-e0919-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "create-event-e0919",
  storageBucket: "create-event-e0919.firebasestorage.app",
  messagingSenderId: "273976451615",
  appId: "1:273976451615:web:5aac200e93aacb8d8d6b2a",
  measurementId: "G-MSRTSRWFS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;