import React from "react";
import "../../css/icons.css";

function Plus({ showAddNewCollection }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="icon--cursor"
      onClick={showAddNewCollection}
    >
      <rect width="48" height="48" rx="24" fill="#E5E5E1" />
      <path
        d="M24 20.4998V27.4998"
        stroke="#2B2B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 24H27.5"
        stroke="#2B2B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Plus;
