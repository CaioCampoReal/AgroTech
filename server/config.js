import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // apiKey: "AIzaSyByt915hyHRgoGCNvdI8OR8oRh3cWrASRg",
  // authDomain: "nome-86071.firebaseapp.com",
  // projectId: "nome-86071",
  // storageBucket: "nome-86071.appspot.com",
  // messagingSenderId: "27194429538",
  // appId: "1:27194429538:web:491449c53a7b9796bb013b" 
  
  //MEU
  apiKey: "AIzaSyDup6e1LB-m181x9Vcgav6VopWiJIKWNQQ",
  authDomain: "agro-43b39.firebaseapp.com",
  projectId: "agro-43b39",
  storageBucket: "agro-43b39.appspot.com",
  messagingSenderId: "88195611214",
  appId: "1:88195611214:web:04f6742160c1d6aaa4611f"
};

  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export default{ firebaseConfig, auth, db };