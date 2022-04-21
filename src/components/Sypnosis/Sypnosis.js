import "./Sypnosis.css";

function Sypnosis({ movie }) {
  return <p className="Sypnosis">{movie.overview}</p>;
}

export default Sypnosis;
