import "./Casting.css";

import Cast from "./Cast/Cast";

function Casting({
  cast,
  allCast,
  setAllCast,
  setAllSimilarMovies,
  setAllVideos,
}) {
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
                  setAllVideos={setAllVideos}
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
                  setAllVideos={setAllVideos}
                />
              );
            })}
      </div>

      {!allCast && cast.length > 5 ? (
        <button onClick={() => setAllCast(!allCast)}> voir plus</button>
      ) : !allCast && cast.length <= 5 ? null : (
        <button onClick={() => setAllCast(!allCast)}> voir moins </button>
      )}
    </div>
  );
}

export default Casting;
