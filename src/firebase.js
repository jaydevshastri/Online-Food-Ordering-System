import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC205sbGEtbXiMPe92j4AEWc-rwSy1UNWo",
  authDomain: "online-order-taking-system.firebaseapp.com",
  projectId: "online-order-taking-system",
  storageBucket: "online-order-taking-system.appspot.com",
  messagingSenderId: "47502493181",
  appId: "1:47502493181:web:49f9294423f1507bef8594",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { analytics, db, storage };
export const auth = getAuth(app);

export default app;
