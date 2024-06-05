import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import Adapter from "../Adapter";
import TVShowList from "./TVShowList";
import Nav from "./Nav";
import SelectedShowContainer from "./SelectedShowContainer";

function App() {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedShow, setSelectedShow] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const [filterByRating, setFilterByRating] = useState("");

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((shows) => setShows(shows));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  // console.log(shows);
  function handleSearch(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  function handleFilter(e) {
    e.target.value === "No Filter"
      ? setFilterByRating("")
      : setFilterByRating(e.target.value);
  }

  function selectShow(show) {
    fetch(`http://api.tvmaze.com/shows/${show.id}/episodes`)
      .then((r) => r.json())
      .then((episodes) => {
        setSelectedShow(show);
        setEpisodes(episodes);
      });
  }

  let displayShows = shows;
  if (filterByRating) {
    displayShows = displayShows.filter(
      (s) => s.rating.average >= filterByRating
    );
  }

  return (
    <div>
      <Nav
        handleFilter={handleFilter}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />
      <Grid celled>
        <Grid.Column width={5}>
          {!!selectedShow ? (
            <SelectedShowContainer
              selectedShow={selectedShow}
              allEpisodes={episodes}
            />
          ) : (
            <div />
          )}
        </Grid.Column>
        <Grid.Column width={11}>
          <TVShowList
            shows={displayShows}
            selectShow={selectShow}
            searchTerm={searchTerm}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
