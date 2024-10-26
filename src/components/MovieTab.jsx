import React from "react";
import "../assets/styles/Styles.css"

const MovieTab = ({ length, fact }) => {
  return (
    <div className="movieContainer">
      <h2>{length}</h2>
      <div className="movieInnerContainer">
        <span>{fact}</span>
      </div>
    </div>
  );
};

export default MovieTab;
