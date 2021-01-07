import firebase from 'firebase/app';
import "firebase/auth";

const app=firebase.initializeApp({
    apiKey: "AIzaSyDBkr_kp1GYYWecO1gN5eoXaAN-X7NpMUA",
    authDomain: "fir-auth-development-7d45f.firebaseapp.com",
    projectId: "fir-auth-development-7d45f",
    storageBucket: "fir-auth-development-7d45f.appspot.com",
    messagingSenderId: "514442341484",
    appId: "1:514442341484:web:e024d06411393cd78f7c49"
});

const auth=app.auth();
export {auth};

export default app;
