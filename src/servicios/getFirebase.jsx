import firebase from "firebase"
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDg5Cv4RLYdQ85R4XHznIJRnJNEnqIYqxk",
    authDomain: "prueba-a77dd.firebaseapp.com",
    projectId: "prueba-a77dd",
    storageBucket: "prueba-a77dd.appspot.com",
    messagingSenderId: "161035248258",
    appId: "1:161035248258:web:27fc4ca3c403686c3c0a9b"
}
const app= firebase.initializeApp(firebaseConfig)

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}