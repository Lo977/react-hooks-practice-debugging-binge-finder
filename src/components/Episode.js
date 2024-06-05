import React from "react";

function Episode({ eachEpisode }) {
  let { name, number } = eachEpisode;
  // console.log(myEpisode);

  return (
    <div>
      Episode {number} - {name}
    </div>
  );
}

export default Episode;
