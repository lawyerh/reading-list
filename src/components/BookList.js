import BookShow from "./BookShow";

export default function BookList({ books }) {
  console.log(books);
  const mapBooks = () => {
    const bookCards = books.map((book) => {
      return <BookShow book={book.title} key={book.id} />;
    });
    return bookCards;
  };

  return <div className="book-list">{books.length > 0 ? mapBooks() : ""}</div>;
}
