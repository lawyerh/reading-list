import BookShow from "./BookShow";

export default function BookList({ books, deleteBook, updateBook }) {
  const mapBooks = () => {
    const bookCards = books.map((book) => {
      return (
        <BookShow
          key={book.id}
          book={book}
          deleteBook={deleteBook}
          updateBook={updateBook}
        />
      );
    });
    return bookCards;
  };

  return (
    <div className="book-list">
      <h1 className="book-list__title">Reading List</h1>
      {books.length > 0 ? mapBooks() : ""}
    </div>
  );
}
