import { auth, db, storage } from "./firebase";
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  setDoc,
  getDoc,
  doc,
  getFirestore,
  deleteDoc,
} from "firebase/firestore";



export const saveHistory = async (id, payload) => {
    const ref = doc(db, "transactionHistory", id);
  
    return setDoc(ref, payload);
  };
  