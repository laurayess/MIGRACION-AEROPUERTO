// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDa4it-F_zTNhxOIH0wCQmHG5MPeUII6KU",
  authDomain: "bitacorasaeropuerto-e9543.firebaseapp.com",
  databaseURL: "https://bitacorasaeropuerto-e9543-default-rtdb.firebaseio.com",
  projectId: "bitacorasaeropuerto-e9543",
  storageBucket: "bitacorasaeropuerto-e9543.appspot.com",
  messagingSenderId: "1095838325319",
  appId: "1:1095838325319:web:36080292f16bee7801af62",
  measurementId: "G-X834BERBR5",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
