import React from "react";
import "../.././css/collectionArticle.css";
import DownloadData from "../Icons/DownloadData";
import Cuboid from "../Icons/Cuboid";
import Trash from "../Icons/Trash";

function CollectionArticle({ id, title, body, handleDeleteClick }) {
  return (
    <article className="collection-article">
      <CollectionArticleHeader
        handleDeleteClick={() => handleDeleteClick(id)}
      />
      <h6 className="collection-article--title">{title}</h6>
      <p className="collection-article--description">{body}</p>
    </article>
  );
}

function CollectionArticleHeader({ handleDeleteClick }) {
  return (
    <div className="collection-article--header">
      <button className="collection-article--btn-download">
        <span>Download data</span>
        <DownloadData />
      </button>
      <div className="collection-article--header-icons">
        <span>87</span>
        <Cuboid />
        <Trash handleDeleteClick={handleDeleteClick} />
      </div>
    </div>
  );
}

export default CollectionArticle;
