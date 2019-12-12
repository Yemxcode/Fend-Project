import React from "react";
import ErrorShower from "./ErrorDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Layouts/Main.css";
export default function DeleteButton({
  id,
  deleteFunc,
  error
}) {
  const handleClick = () => {
    deleteFunc(id);
  };

  return (
    <div className="delete_container">
      {error && <ErrorShower error={error} />}
      <button className="btn_delete" onClick={handleClick}>
        Delete <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
