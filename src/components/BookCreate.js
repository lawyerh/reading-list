import { useState } from "react";

export default function BookCreate({ onSubmitBookTitle }) {
  const [bookTitle, setBookTitle] = useState("");

  const handleChange = (event) => {
    setBookTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitBookTitle(bookTitle);
    setBookTitle("");
  };

  return (
    <section className="add-book">
      <h2 className="add-book__heading">Add a Book</h2>
      <form onSubmit={handleSubmit}>
        {/* wrapped in div to send button down a line */}
        <div>
          <input
            value={bookTitle}
            onChange={handleChange}
            className="add-book__input"
            placeholder="Book Title.."
          />
          <p className="add-book__arrow">&larr;</p>
        </div>
        <button onSubmit={handleSubmit} className="button">
          Submit
        </button>
      </form>
    </section>
  );
}
