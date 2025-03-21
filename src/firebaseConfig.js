import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCywAMCCpN5LHNBqsLPWUlbay_WfXGPkE4",
	authDomain: "proyecto-coder-react-3114b.firebaseapp.com",
	projectId: "proyecto-coder-react-3114b",
	storageBucket: "proyecto-coder-react-3114b.firebasestorage.app",
	messagingSenderId: "736707968067",
	appId: "1:736707968067:web:a782ec2f7e5f21b4a128f6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
