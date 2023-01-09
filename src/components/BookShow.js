import { useState } from "react";

import useBooksContext from "../hooks/use-books-context";

export default function BookShow({ book }) {
  const [newTitle, setNewTitle] = useState(book.title);
  const [editMode, setEditMode] = useState(false);

  const { deleteBookByID, editBookTitleByID } = useBooksContext();

  const handleDelete = () => {
    deleteBookByID(book.id);
  };

  const handleEdit = () => {
    editBookTitleByID(book.id, newTitle);
  };

  const handleInputChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    handleEdit();
    changeEditMode();
  };

  // Not neccesary at all to use a switch here but I like them!
  const changeEditMode = () => {
    switch (editMode) {
      case true:
        setEditMode(false);
        break;
      case false:
        setEditMode(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="book-show">
      <button onClick={changeEditMode} className="icon book-show__edit">
        &Xi;
      </button>
      <button onClick={handleDelete} className="icon book-show__delete">
        &Chi;
      </button>
      {editMode === true ? (
        <form onSubmit={handleInputSubmit}>
          <input
            onChange={handleInputChange}
            className="book-show__change-title"
            value={newTitle}
          />
        </form>
      ) : (
        <h2 className="book-show__title">{book.title}</h2>
      )}
    </div>
  );
}
