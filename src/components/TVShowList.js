import React from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow";

function TVShowList({ shows, selectShow, searchTerm }) {
  function mapAllShows() {
    if (!!searchTerm) {
      return shows.map((s) => {
        if (s.name.toLowerCase().startsWith(searchTerm)) {
          return (
            <TVShow
              show={s}
              key={s.id}
              selectShow={selectShow}
              image={s.image}
            />
          );
        }
      });
    } else {
      return shows.map((s) => {
        return (
          <TVShow show={s} key={s.id} selectShow={selectShow} image={s.image} />
        );
      });
    }
  }

  return (
    <div className="TVShowList">
      <Grid>{mapAllShows()}</Grid>
    </div>
  );
}

export default TVShowList;
