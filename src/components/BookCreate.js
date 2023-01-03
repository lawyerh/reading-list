import { useState } from "react";

export default function BookCreate({ onSubmitBookTitle }) {
  const [bookTitle, setBookTitle] = useState("");

  const handleChange = (event) => {
    setBookTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitBookTitle(bookTitle);
  };

  return (
    <section className="add-book">
      <h2 className="add-book__heading">Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <label className="add-book__input-label">Title</label>
        <input
          value={bookTitle}
          onChange={handleChange}
          className="add-book__input"
          placeholder="Book title.."
        />
        <button onSubmit={handleSubmit} className="button add-book__submit">
          Submit
        </button>
      </form>
    </section>
  );
}