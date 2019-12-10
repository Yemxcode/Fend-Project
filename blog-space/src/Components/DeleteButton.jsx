import React from "react";
import ErrorShower from "./ErrorShower";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeleteButton({
  id,
  deleteFunc,
  error
}) {
  const handleClick = () => {
    deleteFunc(id);
  };

  return (
    <>
      {error && <ErrorShower error={error} />}
      <button onClick={handleClick}>
        Delete <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  );
}
