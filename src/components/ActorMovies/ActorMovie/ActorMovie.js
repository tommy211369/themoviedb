import "./ActorMovie.css";
import { Link } from "react-router-dom";
import mvdbImage from "../../../assets/img/mvdb.jpeg";

function ActorMovie({ movie, setAllActorMovies }) {
  let image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div className="ActorMovie">
      <Link
        to={`/movie/${movie.id}`}
        onClick={() => {
          setAllActorMovies(false);
        }}
      >
        <img src={movie.poster_path ? image : mvdbImage} alt={movie.title} />
        <h4>{movie.title}</h4>
      </Link>
    </div>
  );
}

export default ActorMovie;
