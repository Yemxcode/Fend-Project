import React from "react";
import ErrorShower from "./ErrorShower";

export default function DeleteComment({
  comment_id,
  deleteComment,
  error
}) {
  const handleClick = () => {
    deleteComment(comment_id);
  };

  return (
    <>
      {error && <ErrorShower error={error} />}
      <button onClick={handleClick}>Delete</button>
    </>
  );
}
