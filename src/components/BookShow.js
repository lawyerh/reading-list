export default function BookShow({ book }) {
  return (
    <div className="book-show">
      <button className="icon book-show__edit">&Xi;</button>
      <button className="icon book-show__delete">&Chi;</button>
      <h2 className="book-show__title">{book}</h2>
    </div>
  );
}
