import { Fragment } from "react";
import "./SimilarMovies.css";

import SimilarMovie from "../SimilarMovies/SimilarMovie/SimilarMovie";

function Similarmovies({
  similarMovies,
  allSimilarMovies,
  setAllSimilarMovies,
  setAllCast,
  setAllVideos,
}) {
  // VARIABLES
  let shortSimilarMoviesArray = similarMovies.slice(0, 5);
  let similarMoviesArray = similarMovies.slice(0, 15);
  console.log(similarMovies);

  return (
    <div className="SimilarMovies">
      {similarMovies.length !== 0 ? (
        <Fragment>
          {" "}
          <h1>Films recommandés</h1>
          <div>
            {!allSimilarMovies
              ? shortSimilarMoviesArray.map((movie) => {
                  return (
                    <SimilarMovie
                      key={movie.id}
                      movie={movie}
                      setAllSimilarMovies={setAllSimilarMovies}
                      setAllCast={setAllCast}
                      setAllVideos={setAllVideos}
                    />
                  );
                })
              : similarMoviesArray.map((movie) => {
                  return (
                    <SimilarMovie
                      key={movie.id}
                      movie={movie}
                      setAllSimilarMovies={setAllSimilarMovies}
                      setAllCast={setAllCast}
                      setAllVideos={setAllVideos}
                    />
                  );
                })}
          </div>
          {!allSimilarMovies && similarMovies.length > 5 ? (
            <button onClick={() => setAllSimilarMovies(!allSimilarMovies)}>
              voir plus de films{" "}
            </button>
          ) : !allSimilarMovies && similarMovies.length <= 5 ? null : (
            <button onClick={() => setAllSimilarMovies(!allSimilarMovies)}>
              voir moins de films
            </button>
          )}
        </Fragment>
      ) : null}
    </div>
  );
}

export default Similarmovies;
