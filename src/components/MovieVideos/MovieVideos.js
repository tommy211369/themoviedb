import "./MovieVideos.css";
import YouTube from "react-youtube";

function MovieVideos({ movie, allVideos, setAllVideos }) {
  //VARIABLES
  const videoConfig = {
    height: "240",
    width: "426",
  };

  let movieTrailers = [];
  let otherVideos = [];
  let allMovieVideos = [];
  let shortTrailersArray = [];

  if (
    movie.videos &&
    movie.videos.results &&
    movie.videos.results.length !== 0
  ) {
    for (let i = 0; i < movie.videos.results.length; i++) {
      if (movie.videos.results[i].type === "Trailer") {
        movieTrailers.push(movie.videos.results[i]);
      } else {
        otherVideos.push(movie.videos.results[i]);
      }
    }
    allMovieVideos = movieTrailers.concat(otherVideos);
    shortTrailersArray = movieTrailers.splice(0, 3);
  }

  return (
    <div className="MovieVideos">
      <h1>Videos</h1>
      <div>
        {!allVideos
          ? shortTrailersArray.map((video) => {
              return (
                <div key={video.id} className="video">
                  <YouTube videoId={video.key} opts={videoConfig} />
                  <h4>
                    {video.name} - {video.type}
                  </h4>
                </div>
              );
            })
          : allMovieVideos.map((video) => {
              return (
                <div key={video.id} className="video">
                  <YouTube videoId={video.id} opts={videoConfig} />
                  <h4>
                    {video.name} - {video.type}
                  </h4>
                </div>
              );
            })}
      </div>

      {!allVideos && movie.videos.results.length > 3 ? (
        <button onClick={() => setAllVideos(!allVideos)}>
          voir plus de videos
        </button>
      ) : !allVideos && movie.videos.results.length <= 3 ? null : (
        <button onClick={() => setAllVideos(!allVideos)}>
          voir moins de videos
        </button>
      )}
    </div>
  );
}

export default MovieVideos;
