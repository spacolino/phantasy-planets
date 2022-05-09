import React from "react";
import "./Content.css";

export default function Content(props) {
  return (
    <div className="content">
      <h1>{props.message}</h1>
    </div>
  );
}
