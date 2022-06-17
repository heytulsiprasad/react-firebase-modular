import { useState } from "react"
import logo from './logo.svg';
import './App.css';
import { addDoc, deleteDoc, doc } from "firebase/firestore"
import { colRef, db } from "./firebase"

function App() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [documentId, setDocumentId] = useState("")

  // add document
  const addSubmit = (e) => {
    e.preventDefault();

    // 2nd object is the doc that's to be added
    addDoc(colRef, {
      title: title,
      author: author
    })
    // .then(() => {})
    
    setTitle("");
    setAuthor("")
  }

  // delete document
  const deleteSubmit = (e) => {
    e.preventDefault();

    // To delete we need a reference
    // doc method gets the reference to the particular document of id
    const docRef = doc(db, 'books', documentId);

    deleteDoc(docRef)
      .then((ref) => console.log(ref));

    setDocumentId("")
  }

  return (
    <div className="App">
      <h1>Contact details</h1>
      <form className='add' onSubmit={addSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name='title'  value={title} onChange={(e) => setTitle(e.target.value)}required />
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" name="author"  value={author} onChange={(e) => setAuthor(e.target.value)}required />
        </div>

        <div>
          <button type='submit'>Add new book</button>
        </div>
      </form>

      <form className='delete' style={{ marginTop: 40 }} onSubmit={deleteSubmit}>
        <div>
          <label htmlFor="id">Document id:</label>
          <input type="text" name='id' value={documentId} onChange={(e) => setDocumentId(e.target.value)}required />
        </div>

        <div>
          <button type="submit">Delete book</button>
        </div>
      </form>
    </div>
  );
}

export default App;
