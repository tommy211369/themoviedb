import { useState } from "react";
import "./Casting.css";

import Cast from "./Cast/Cast";

function Casting({ cast, allCast, setAllCast, setAllSimilarMovies }) {
  // VARIABLES
  let shortCastArray = cast.slice(0, 5);
  let castArray = cast.slice(0, 15);

  return (
    <div className="Casting">
      <h1>Casting</h1>
      <div>
        {!allCast
          ? shortCastArray.map((cast) => {
              return (
                <Cast
                  key={cast.id}
                  cast={cast}
                  setAllSimilarMovies={setAllSimilarMovies}
                  setAllCast={setAllCast}
                />
              );
            })
          : castArray.map((cast) => {
              return (
                <Cast
                  key={cast.id}
                  cast={cast}
                  setAllCast={setAllCast}
                  setAllSimilarMovies={setAllSimilarMovies}
                />
              );
            })}
      </div>

      {!allCast ? (
        <button onClick={() => setAllCast(!allCast)}> voir plus</button>
      ) : (
        <button onClick={() => setAllCast(!allCast)}> voir moins </button>
      )}
    </div>
  );
}

export default Casting;
