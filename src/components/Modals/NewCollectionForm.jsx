import { useState } from "react";
import "../../css/modal.css";
function NewCollectionForm({ closeAddNewCollection, addNewCollection }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    e.preventDefault();
    setBody(e.target.value);
  };
  return (
    <>
      <h2 className="modal--title">New Collection</h2>

      <label for="collection_name" className="modal--form-label">
        Collection Name
      </label>
      <input
        id="collection_name"
        className="modal--form-input"
        value={title}
        onChange={handleTitleChange}
        required
      ></input>
      <label for="collection_description" className="modal--form-label">
        Description
      </label>
      <textarea
        id="collection_description"
        className="modal--form-input"
        required
        value={body}
        onChange={handleDescriptionChange}
      ></textarea>
      <div className="new-collection-modal--btn-container">
        <button
          className="new-collection-modal--close"
          onClick={closeAddNewCollection}
        >
          Close
        </button>
        <button
          className={`new-collection-modal--create ${
            title && body ? "create-btn--active" : ""
          }`}
          onClick={() => addNewCollection(title, body)}
        >
          Create Collection
        </button>
      </div>
    </>
  );
}

export default NewCollectionForm;
