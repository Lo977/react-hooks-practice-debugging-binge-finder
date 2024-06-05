import React from "react";

function TVShow({ show, selectShow, image }) {
  return (
    <div>
      <br />
      <img src={image.medium} onClick={() => selectShow(show)} alt="" />
    </div>
  );
}

export default TVShow;
