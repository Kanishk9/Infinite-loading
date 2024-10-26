import React from "react";
import "../assets/styles/Styles.css"

const MovieTab = ({ id, title, body }) => {
  return (
    <div className="movieContainer">
      <h2>{title}</h2>
      <div className="movieInnerContainer">
        <span><b>ID:</b> {id}</span>
        <span><b>Body:</b> {body}</span>
      </div>
    </div>
  );
};

export default MovieTab;
