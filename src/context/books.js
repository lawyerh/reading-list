import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  // Setting initial books state
  const [books, setBooks] = useState([]);

  const URL = "http://localhost:3001/books/";

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
  const deleteBookByID = async (id) => {
    const targetURL = String(URL + id);

    await axios.delete(targetURL);

    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  // Passed to BookShow to allow editing book titles
  const editBookTitleByID = async (id, newTitle) => {
    const targetURL = String(URL + id);

    const response = await axios.put(targetURL, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) return response.data;
      else return book;
    });

    setBooks(updatedBooks);
  };

  const sharedContext = {
    books,
    retrieveBooks,
    handleCreateBook,
    deleteBookByID,
    editBookTitleByID,
  };

  return (
    <BooksContext.Provider value={sharedContext}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
