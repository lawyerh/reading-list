import { useState, useEffect } from "react";
import axios from "axios";

// Imported components
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const URL = "http://localhost:3001/books";

  const retrieveBooks = async () => {
    const response = await axios.get(URL);

    setBooks(response.data);
  };

  // Passed to BookCreate to add new entry to books state
  const handleCreateBook = async (bookTitle) => {
    const response = await axios.post(URL, {
      title: bookTitle,
    });

    const updatedBooks = [...books, response.data];
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

  useEffect(() => {
    retrieveBooks();
  }, []);

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
