import React from "react";
import ErrorShower from "./ErrorShower";

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
      <button onClick={handleClick}>Delete</button>
    </>
  );
}
