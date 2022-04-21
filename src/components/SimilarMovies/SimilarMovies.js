import { Fragment } from "react";
import "./SimilarMovies.css";

import SimilarMovie from "../SimilarMovies/SimilarMovie/SimilarMovie";

function Similarmovies({
  similarMovies,
  allSimilarMovies,
  setAllSimilarMovies,
  setAllCast,
}) {
  // VARIABLES
  let shortSimilarMoviesArray = similarMovies.slice(0, 5);
  let similarMoviesArray = similarMovies.slice(0, 15);

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
                    />
                  );
                })}
          </div>
          {!allSimilarMovies ? (
            <button onClick={() => setAllSimilarMovies(!allSimilarMovies)}>
              voir plus de films{" "}
            </button>
          ) : (
            <button onClick={() => setAllSimilarMovies(!allSimilarMovies)}>
              voir moins de films
            </button>
          )}{" "}
        </Fragment>
      ) : null}
    </div>
  );
}

export default Similarmovies;
