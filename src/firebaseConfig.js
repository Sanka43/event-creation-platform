import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBnQuPjpAnBMSKUl6hV39Ui-y-vgOCIeSU",
  authDomain: "create-event-e0919.firebaseapp.com",
  databaseURL: "https://create-event-e0919-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "create-event-e0919",
  storageBucket: "create-event-e0919.firebasestorage.app",
  messagingSenderId: "273976451615",
  appId: "1:273976451615:web:5aac200e93aacb8d8d6b2a",
  measurementId: "G-MSRTSRWFS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database }; // Named export for `database`
export default app; // Default export for `app`