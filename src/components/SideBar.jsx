import React from "react";
import "../css/sidebar.css";
import ChevronDown from "./Icons/ChevronDown";
import Folder from "./Icons/Folder";
import ChevronLeft from "./Icons/ChevronLeft";
import NewFolder from "./Icons/NewFolder";

function SideBar({ showAddNewCollection }) {
  return (
    <aside>
      <div className="side-bar-container">
        <div className="side-bar-container--header">
          <h5>My collections</h5>
          <ChevronDown />
        </div>
        <ul className="side-bar-container--list-collection">
          <li className="side-bar-container--list-collection-item">
            <Folder />
            <span>Collection 1</span>
            <ChevronLeft />
          </li>
          <li className="side-bar-container--list-collection-item">
            <Folder />
            <span>Collection 2</span>
            <ChevronLeft />
          </li>
          <li className="side-bar-container--list-collection-item">
            <Folder />
            <span>Collection 3</span>
            <ChevronLeft />
          </li>
        </ul>
        <button
          className="side-bar-container--new-collection"
          onClick={() => showAddNewCollection(true)}
        >
          <NewFolder />
          <span>New Collection</span>
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
