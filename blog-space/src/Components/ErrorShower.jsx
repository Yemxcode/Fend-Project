import React from "react";

export default function ErrorShower({ error }) {
  const { status, msg } = error;

  return (
    <>
      <h2>{status}</h2>
      <h2>{msg}</h2>
    </>
  );
}
