import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth, FirebaseDB } from "./Credenciales";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore/lite";
import { timeStampToDate } from "../bitacoras/helpers/DateFunctions";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult( result );
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // User info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};

export const getBitacorasProvider = async () => {
  const collectionRef = collection(FirebaseDB, "Bitacoras");
  const docs = await getDocs(collectionRef);
  const bitacoras = [];
  docs.forEach((doc) => {
    let datos = { ...doc.data() };
    datos.fecha = timeStampToDate(datos.fecha);
    bitacoras.push({ id: doc.id, ...datos });
  });

  console.log(bitacoras);
  return bitacoras;
};

export const getBitacoraByIdProvider = async (id) => {
  const docRef = doc(FirebaseDB, "Bitacoras", id);

  return await getDoc(docRef)
    .then((doc) => {
      if (doc.exists()) {
        // El documento existe, haz algo con él
        console.log("se encontro el documento: ", doc.data());
        return doc.data();
      } else {
        // El documento no existe
        console.log("El documento no existe");
        return "El documento no existe";
      }
    })
    .catch((error) => {
      console.log("Error al obtener el documento:", error);
      return "Error al obtener el documento:" + error;
    });
};

export const addBitacoraProvider = async (bitacora) => {
  // Obtener una referencia a la colección "miColeccion"

  const miColeccion = collection(FirebaseDB, "Bitacoras");

  // Agregar el nuevo documento a la colección
  return await addDoc(miColeccion, bitacora)
    .then((docRef) => {
      console.log("Documento agregado con ID: ", docRef.id);
      return docRef.id;
    })
    .catch((error) => {
      console.error("Error al agregar documento: ", error);
      return false;
    });
};

export const editBitacoraProvider = async (id, newData) => {
  // Obtener una referencia a la colección "miColeccion"

  const bitacora = doc(FirebaseDB, "Bitacoras", id);

  // Agregar el nuevo documento a la colección
  return await updateDoc(bitacora, newData)
    .then((docRef) => {
      console.log("Documento actualizado correctamente");
    })
    .catch((error) => {
      console.error("Error al agregar documento: ", error);
    });
};
