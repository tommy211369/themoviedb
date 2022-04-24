import "./Cast.css";
import { Link } from "react-router-dom";
import mvdbImage from "../../../assets/img/mvdb.jpeg";

function Cast({ cast, setAllSimilarMovies, setAllCast, setAllVideos }) {
  let image = `https://image.tmdb.org/t/p/w300/${cast.profile_path}`;
  return (
    <div className="Cast">
      <Link
        to={`/actor/${cast.id}`}
        onClick={() => {
          setAllSimilarMovies(false);
          setAllCast(false);
          setAllVideos(false);
        }}
      >
        <img
          src={cast.profile_path ? image : mvdbImage}
          alt={cast.original_name}
        />
        <h4>{cast.name}</h4>
        <span>{cast.character}</span>
      </Link>
    </div>
  );
}

export default Cast;
