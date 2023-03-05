import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/Credenciales";

export const loadIterinarioById = async (novuelo = "266/267") => {
  if (!novuelo) throw new Error("El iterinario no existe");
  const collectionRef = collection(FirebaseDB, "itinerario");

  const docs = query(collectionRef, where("novuelo", "==", novuelo));
  const querySnapshot = await getDocs(docs);
  const iterinarios = {};
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    Object.assign(iterinarios, doc.data(), { id: doc.id });
  });

  console.log(iterinarios);
  return iterinarios;
};
