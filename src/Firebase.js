// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD1NQFUatBF0wl0hcsVhnq1FN3Q9w0r31s",
	authDomain: "messenger-cf12a.firebaseapp.com",
	projectId: "messenger-cf12a",
	storageBucket: "messenger-cf12a.appspot.com",
	messagingSenderId: "383154787222",
	appId: "1:383154787222:web:43df6a72450e5be58e43b7",
	measurementId: "G-834Y5GKJJP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
