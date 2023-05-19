// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore,addDoc,getDoc,getDocs,deleteDoc,updateDoc,collection,doc} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyA9n4LXVfzZW6sFDNwl-nnvMimQYf46yIo",
authDomain: "super-tienda-deportiva-react.firebaseapp.com",
projectId: "super-tienda-deportiva-react",
storageBucket: "super-tienda-deportiva-react.appspot.com",
messagingSenderId: "79606244704",
appId: "1:79606244704:web:3823297ba8f3d7289f2a05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const bdd=getFirestore()


export const createProducts = async () => {
    const promise = await fetch('./JSON/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), { 
            nombre: prod.nombre,
            marca: prod.marca,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })

}