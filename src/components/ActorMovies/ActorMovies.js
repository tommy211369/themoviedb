import { Fragment } from "react";
import "./ActorMovies.css";

import ActorMovie from "./ActorMovie/ActorMovie";

function ActorMovies({ actor, movies, allActorMovies, setAllActorMovies }) {
  // VARIABLES
  let shortMovies = movies.slice(0, 5);

  return (
    <div className="ActorMovies">
      {movies.length !== 0 ? (
        <Fragment>
          <h1>Filmographie de {actor.name}</h1>
          <div>
            {!allActorMovies
              ? shortMovies.map((movie) => {
                  return (
                    <ActorMovie
                      movie={movie}
                      key={movie.id}
                      setAllActorMovies={setAllActorMovies}
                    />
                  );
                })
              : movies.map((movie) => {
                  return (
                    <ActorMovie
                      movie={movie}
                      key={movie.id}
                      setAllActorMovies={setAllActorMovies}
                    />
                  );
                })}
          </div>
          {!allActorMovies ? (
            <button onClick={() => setAllActorMovies(!allActorMovies)}>
              voir plus de films de {actor.name}
            </button>
          ) : (
            <button onClick={() => setAllActorMovies(!allActorMovies)}>
              voir moins de films {actor.name}
            </button>
          )}{" "}
        </Fragment>
      ) : null}
    </div>
  );
}

export default ActorMovies;
