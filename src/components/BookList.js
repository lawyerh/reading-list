import BookShow from "./BookShow";

import useBooksContext from "../hooks/use-books-context";

export default function BookList() {
  const { books } = useBooksContext();

  const mapBooks = () => {
    const bookCards = books.map((book) => {
      return <BookShow key={book.id} book={book} />;
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
