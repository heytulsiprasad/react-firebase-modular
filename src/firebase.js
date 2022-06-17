import { initializeApp } from "firebase/app"
import { collection, getFirestore, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAfwFELXR4az0v24V8h5JaFjwhal34cWn0",
  authDomain: "test-firebase-9-85e62.firebaseapp.com",
  projectId: "test-firebase-9-85e62",
  storageBucket: "test-firebase-9-85e62.appspot.com",
  messagingSenderId: "565868376774",
  appId: "1:565868376774:web:d8dc6a80e837b83145ddc7"
};

// init
initializeApp(firebaseConfig);

// services
const db = getFirestore();

// collection ref
// db is service, books is collection name
const colRef = collection(db, 'books')

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    console.log(snapshot.docs);

    let books = []
    snapshot.docs.forEach(doc => {
      books.push({
        ...doc.data(),
        id: doc.id
      })
    })

    console.log(books)
  })
  // Error handler goes here
  .catch(err => {
    console.error(err.message)
  })