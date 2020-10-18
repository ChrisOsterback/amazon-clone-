import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC1Ua9UUtQni0B5wQ0bl68onnbOrFQzaus",
    authDomain: "fir-da692.firebaseapp.com",
    databaseURL: "https://fir-da692.firebaseio.com",
    projectId: "fir-da692",
    storageBucket: "fir-da692.appspot.com",
    messagingSenderId: "1028222533023",
    appId: "1:1028222533023:web:d3d19f067b838b25a011aa",
    measurementId: "G-GDC8G26BEG"
};






const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };