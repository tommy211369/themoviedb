// Libraries
import "./MovieCard.css";
import mvdbImage from "../../assets/img/mvdb.jpeg";
import { genreFinder } from "../../assets/functionsFile";

const MovieCard = ({ movie }) => {
  // VARIABLES
  let image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return `${dd} / ${mm} / ${yy}`;
  };

  return (
    <div className="MovieCard">
      <img src={movie.poster_path ? image : mvdbImage} alt={movie.title} />
      <div>
        <div className="details">
          <h4>{movie.title}</h4>
          {movie.release_date ? (
            <p>Sorti le : {dateFormater(movie.release_date)}</p>
          ) : null}
          <p>⭐ Note : {movie.vote_average} / 10</p>
          <ul>{genreFinder(movie.genre_ids)}</ul>
        </div>
        {movie.overview ? <p className="synopsis">{movie.overview}</p> : null}
      </div>
    </div>
  );
};

export default MovieCard;
