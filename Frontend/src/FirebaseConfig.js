import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDtEGWIkLoA1mozHd9DZwzV4DZv13xyxuo",
  authDomain: "video-sharing-app-f1f97.firebaseapp.com",
  projectId: "video-sharing-app-f1f97",
  storageBucket: "video-sharing-app-f1f97.appspot.com",
  messagingSenderId: "1050959839953",
  appId: "1:1050959839953:web:0aca6dafaa5af72d757bf0",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export default app;
