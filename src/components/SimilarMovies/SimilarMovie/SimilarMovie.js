import "./SimilarMovie.css";
import { Link } from "react-router-dom";
import mvdbImage from "../../../assets/img/mvdb.jpeg";

function SimilarMovie({
  movie,
  setAllSimilarMovies,
  setAllCast,
  setAllVideos,
}) {
  let image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div className="SimilarMovie">
      <Link
        to={`/movie/${movie.id}`}
        onClick={() => {
          setAllSimilarMovies(false);
          setAllCast(false);
          setAllVideos(false);
        }}
      >
        <img src={movie.poster_path ? image : mvdbImage} alt={movie.title} />
        <h4>{movie.title}</h4>
      </Link>
    </div>
  );
}

export default SimilarMovie;
