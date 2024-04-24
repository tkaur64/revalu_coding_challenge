import React from "react";
import "../.././css/collectionsHeader.css";

function CollectionsHeader() {
  return (
    <div className="collection-section--header">
      <div className="collection-section--main-header">
        <h1 className="collection-section--title">My Collections</h1>
        <p className="collection-section--sub-heading">
          Introducing collections: the ability to organise your materials, your
          way.
        </p>
      </div>

      <p className="collection-section--result-count">Showing 118 results</p>
    </div>
  );
}

export default CollectionsHeader;
