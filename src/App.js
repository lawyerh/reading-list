import { useState } from "react";

// Imported components
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (bookTitle) => {
    const updatedBooks = [...books, { id: 1, title: bookTitle }];
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <BookList books={books} />
      <BookCreate onSubmitBookTitle={handleCreateBook} />
    </div>
  );
}

export default App;
