import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/Credenciales";

export const loadIterinarios = async () => {
  const collectionRef = collection(FirebaseDB, "itinerario");
  const docs = await getDocs(collectionRef);

  const iterinarios = [];
  docs.forEach((doc) => {
    iterinarios.push({ id: doc.id, ...doc.data() });
  });

  return iterinarios;
};
