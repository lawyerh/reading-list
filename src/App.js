import { useState } from "react";

// Imported components
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  // Backend server will typically generate unique id's
  // Using this method to create a typically random number
  const createRandomID = () => {
    const newID = Math.floor(Math.random() * 99999);
    return newID;
  };

  // Passed to BookCreate to add new entry to books state
  const handleCreateBook = (bookTitle) => {
    const updatedBooks = [...books, { id: createRandomID(), title: bookTitle }];
    setBooks(updatedBooks);
  };

  // Passed to BookShow to allow deletion of books from books state
  const deleteBookByID = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  // Passed to BookShow to allow editing book titles
  const editBookTitleByID = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) return { id: id, title: newTitle };
      else return book;
    });

    console.log(updatedBooks);
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <BookList
        books={books}
        deleteBook={deleteBookByID}
        updateBook={editBookTitleByID}
      />
      <BookCreate onSubmitBookTitle={handleCreateBook} />
    </div>
  );
}

export default App;
