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
            producto: prod.producto,
            marca: prod.marca,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })

}
export const getProducts = async () => {
    const prods = await getDocs(collection(bdd, "productos"))
    const items = prods.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProduct = async (id) => {
    const prod = await getDoc(doc(bdd, "productos", id))
    const item = { ...prod.data(), id: prod.id }
    return item
}
//1 o 0
//Tanto Update como Delete no devuelven un estado
export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

// CREATE y READ OrdenCompra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}

export const deleteOrdenCompra = async (id) => {
    await deleteDoc(doc(bdd, "ordenCompra", id))
}
