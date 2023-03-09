// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkl9qGf4iP71Vze4ThVm0TDuDk7EpV_I0",
  authDomain: "vanlife-f331d.firebaseapp.com",
  projectId: "vanlife-f331d",
  storageBucket: "vanlife-f331d.appspot.com",
  messagingSenderId: "941458631165",
  appId: "1:941458631165:web:b7fd96707f35d8c4bf5194",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getAllVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getVan(id) {
  const vanRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(vanRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}
