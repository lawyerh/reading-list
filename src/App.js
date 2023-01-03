import { useState } from "react";

// Imported components
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (bookTitle) => {
    console.log(bookTitle, 'wants to be added to book list!');
  }

  return (
    <div className="App">
      <BookCreate onSubmitBookTitle={handleCreateBook} />
    </div>
  );
}

export default App;
