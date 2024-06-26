import React from "react";
import "../../css/icons.css";

function Trash({ handleDeleteClick }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleDeleteClick}
      className="icon--cursor"
    >
      <path
        d="M7.5 9.5H8.5H16.5"
        stroke="#2B2B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9.49976V8.49976C10 8.23454 10.1054 7.98019 10.2929 7.79265C10.4804 7.60511 10.7348 7.49976 11 7.49976H13C13.2652 7.49976 13.5196 7.60511 13.7071 7.79265C13.8946 7.98019 14 8.23454 14 8.49976V9.49976M15.5 9.49976V16.4998C15.5 16.765 15.3946 17.0193 15.2071 17.2069C15.0196 17.3944 14.7652 17.4998 14.5 17.4998H9.5C9.23478 17.4998 8.98043 17.3944 8.79289 17.2069C8.60536 17.0193 8.5 16.765 8.5 16.4998V9.49976H15.5Z"
        stroke="#2B2B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 11.9998V14.9998"
        stroke="#2B2B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11.9998V14.9998"
        stroke="#2B2B2B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Trash;
