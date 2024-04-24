import React from "react";
import "../../css/modal.css";

function DeleteCollectionForm({ handleDelete, closeDeleteCollection }) {
  return (
    <>
      <h2 className="modal--title">Delete Collection</h2>
      <p className="modal--text">Are you sure you would like to do this?</p>
      <p className="modal--text">You won't be able to undo this.</p>
      <button
        className="delete-collection-modal--delete-btn"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        className="delete-collection-modalmodal--close-btn"
        onClick={closeDeleteCollection}
      >
        Close
      </button>
    </>
  );
}

export default DeleteCollectionForm;
