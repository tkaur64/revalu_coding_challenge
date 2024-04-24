import "./App.css";
import Collections from "./components/Collections/Collections";
import DeleteCollectionForm from "./components/Modals/DeleteCollectionForm";
import Modal from "./components/Modals/Modal";
import NewCollectionForm from "./components/Modals/NewCollectionForm";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import { COLLECTIONS_INITIAL } from "./data/collections";
import { useState } from "react";

function App() {
  const [collections, setCollections] = useState(COLLECTIONS_INITIAL);
  const [showNewCollection, setShowNewCollection] = useState(false);
  const [showDeleteCollection, setShowDeleteCollection] = useState(false);
  const [activeCollection, setActiveCollection] = useState(null);

  const isModalVisible = showNewCollection || showDeleteCollection;

  const addNewCollection = (title, body) => {
    setCollections([...collections, { id: Math.random(), body, title }]);
    setShowNewCollection(false);
  };

  const deleteCollection = () => {
    setCollections(
      collections.filter((collection) => collection.id !== activeCollection)
    );
    setShowDeleteCollection(false);
  };

  const handleDeleteClick = (collection_id) => {
    setActiveCollection(collection_id);
    setShowDeleteCollection(true);
  };
  return (
    <>
      <header className={`header ${isModalVisible ? "transparent" : ""} `}>
        <Navigation />
      </header>
      <section
        className={`main-section ${isModalVisible ? "transparent" : ""} `}
      >
        <SideBar showAddNewCollection={() => setShowNewCollection(true)} />
        <Collections
          collections={collections}
          handleDeleteClick={handleDeleteClick}
          showAddNewCollection={() => setShowNewCollection(true)}
        />
      </section>
      {isModalVisible ? (
        <Modal>
          {showNewCollection && (
            <NewCollectionForm
              closeAddNewCollection={() => setShowNewCollection(false)}
              addNewCollection={(title, body) => addNewCollection(title, body)}
            />
          )}
          {showDeleteCollection && (
            <DeleteCollectionForm
              handleDelete={deleteCollection}
              closeDeleteCollection={() => setShowDeleteCollection(false)}
            />
          )}
        </Modal>
      ) : null}
    </>
  );
}

export default App;
