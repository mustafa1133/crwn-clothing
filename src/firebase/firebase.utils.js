import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyANX32uhcUPUbhYFk9EngvlwYog7xu2HXs",
    authDomain: "crwn-db-ee55d.firebaseapp.com",
    databaseURL: "https://crwn-db-ee55d.firebaseio.com",
    projectId: "crwn-db-ee55d",
    storageBucket: "crwn-db-ee55d.appspot.com",
    messagingSenderId: "482754219541",
    appId: "1:482754219541:web:3d82c9cb2275617f40c81c",
    measurementId: "G-R1G5BN8TJ8"
    
    
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth){
        return;
    }
    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt= new Date();
        
        try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData  
            });

        } catch (error) {
            console.log('error creating user' , error.message);
            
        }
    }
    return userRef;
  }
  

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;