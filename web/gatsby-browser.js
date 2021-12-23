import React from 'react';
import { initializeApp } from 'firebase/app';
import { AppContext } from './src/context/AppContext';

const firebaseConfig = {
    apiKey: "AIzaSyDj6ZkAW630JJbFjGcLcM1o2nMVRf5IK58",
    authDomain: "kbingogen.firebaseapp.com",
    projectId: "kbingogen",
    storageBucket: "kbingogen.appspot.com",
    messagingSenderId: "525325676999",
    appId: "1:525325676999:web:b758eb903f4a375c95e9e2"
};  

const app = initializeApp(firebaseConfig);

export const wrapRootElement = ({element}) => {
    return (
        <AppContext.Provider value={app}>
            {element}
        </AppContext.Provider>
    )
}
