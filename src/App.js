import { useEffect, useContext } from "react";

// Improted Context
import BooksContext from "./context/books";

// Imported components
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const { retrieveBooks } = useContext(BooksContext);

  // React command that can run once or a number of times on rerender.
  // Useful for an intial data retrieval
  useEffect(() => {
    retrieveBooks();
    console.clear();
  }, []);

  return (
    <div className="App">
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
