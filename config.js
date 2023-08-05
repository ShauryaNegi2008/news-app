import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7keTm3gRX0rgirBSiWO_bes8bR4BM2MU",
  authDomain: "class-93-9d9b1.firebaseapp.com",
  projectId: "class-93-9d9b1",
  storageBucket: "class-93-9d9b1.appspot.com",
  messagingSenderId: "998515395226",
  appId: "1:998515395226:web:0ceb639253812293582d23"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();