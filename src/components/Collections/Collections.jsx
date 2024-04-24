import React from "react";
import CollectionsHeader from "./CollectionsHeader";
import CollectionArticle from "./CollectionArticle";
import Plus from "../Icons/Plus";

function Collections({ collections, handleDeleteClick, showAddNewCollection }) {
  return (
    <section className="collection-section">
      <CollectionsHeader />
      <div className="collection-section--collections">
        {collections.map(({ id, title, body }) => {
          return (
            <CollectionArticle
              key={id}
              id={id}
              title={title}
              body={body}
              handleDeleteClick={handleDeleteClick}
            />
          );
        })}
        <article className="collection-article collection-article--add-new">
          <Plus showAddNewCollection={showAddNewCollection} />
        </article>
      </div>
    </section>
  );
}

export default Collections;
