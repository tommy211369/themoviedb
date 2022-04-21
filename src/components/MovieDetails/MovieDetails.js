import "./MovieDetails.css";
import {
  genresFormater,
  languagesFormater,
  sumFormater,
  directorFinder,
  producerFinder,
  companiesFinder,
  dateFormater,
} from "../../assets/functionsFile";

function MovieDetails({ movie, image, mvdbImage, crew, cast }) {
  // VARIABLES
  let newCast = "";

  if (cast) {
    cast.map((cast, index) => {
      if (index === 2) {
        newCast += cast.name;
      } else if (index === 0 || index === 1) {
        newCast += cast.name + ", ";
      }
    });
  }

  return (
    <div className="MovieDetails">
      <img src={movie.poster_path ? image : mvdbImage} alt={movie.title} />
      <div className="infos">
        <h1>{movie.title}</h1>
        {movie.tagline ? <p className="tagline">"{movie.tagline}"</p> : null}

        <p>
          Réalisé par : <span>{crew ? directorFinder(crew) : null}</span>
        </p>
        <p>
          Produit par : <span>{crew ? producerFinder(crew) : null}</span>
        </p>
        <p>
          Avec : <span>{cast ? newCast : null}</span>
        </p>

        {movie.genres ? (
          <p className="genres">
            Genres : <span>{genresFormater(movie.genres)}</span>
          </p>
        ) : null}

        <div>
          {movie.release_date ? (
            <p>
              Date de sortie : <span>{dateFormater(movie.release_date)}</span>
            </p>
          ) : null}

          {movie.vote_average ? (
            <p>
              ⭐ Note : <span>{movie.vote_average} / 10 </span>
            </p>
          ) : null}
        </div>

        <p>
          Sociétés de production :{" "}
          <span>
            {movie.production_companies
              ? companiesFinder(movie.production_companies)
              : null}
          </span>
        </p>

        <div>
          {movie.budget ? (
            <p>
              Budget : <span>{sumFormater(movie.budget)}</span>
            </p>
          ) : null}
          {movie.revenue ? (
            <p>
              Recettes : <span>{sumFormater(movie.revenue)}</span>
            </p>
          ) : null}
        </div>

        {movie.spoken_languages ? (
          <p>
            Langue(s) : <span>{languagesFormater(movie.spoken_languages)}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default MovieDetails;
