import { updateProfile } from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../firebase/Credenciales";

export const loadIterinarioById = async (novuelo = "266/267") => {
  // if (!novuelo) throw new Error("El iterinario no existe");
  const collectionRef = collection(FirebaseDB, "itinerario");

  const docs = query(collectionRef, where("novuelo", "==", novuelo));
  const querySnapshot = await getDocs(docs);

  if (querySnapshot.empty) {
    console.log("No se encontraron documentos en la consulta.");
    return false; // o cualquier otra acción que desees tomar
  }
  const iterinarios = {};

  querySnapshot.forEach((doc) => {
    Object.assign(iterinarios, doc.data(), { id: doc.id });
  });
  return iterinarios;
};

/* Verficar si existe aerolinea con ese nombre y si no, nos deja crear dicha aerolinra */

/* export const createAerolineaById = async (nombreAerolinea = "MELVIN") => {
  const aerolineasRef = collection(FirebaseDB, "aerolineasprueba");

  try {
    const docs = query(aerolineasRef, where("nombre", "==", nombreAerolinea));
    const querySnapshot = await getDocs(docs);
    if (querySnapshot.empty) {
      // No existe una aerolínea con el mismo nombre, se puede agregar una nueva entidad
      const docRef = await addDoc(aerolineasRef, { nombre: nombreAerolinea });
      console.log("Nueva aerolínea agregada con ID: ", docRef.id);
      return docRef.id;
    } else {
      // Ya existe una aerolínea con el mismo nombre
      console.log("Ya existe una aerolínea con el nombre ", nombreAerolinea);
      return null;
    }
  } catch (error) {
    console.error("Error al realizar consulta: ", error);
    return null;
  }
}; */

/* Codigo para actualizar usuarios */
/* 
const user = FirebaseAuth.currentUser;
  console.log(user);
  if (user) {
    await updateProfile(user, {
      displayName: "Eduardo Sanchez",
      photoURL:
        "https://imagenes.elpais.com/resizer/adIxKeNQ8anrk4s6WQIGj3sYimc=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/VYSE3MA34D4TJ5VF62SOOIHEQU.jpg",
    })
      .then(() => {
        console.log("Nombre de usuario actualizado correctamente");
      })
      .catch((error) => {
        console.error("Error al actualizar el nombre de usuario: ", error);
      });
  }
*/
