import "./Synopsis.css";

function Synopsis({ movie }) {
  return <p className="Synopsis">{movie.overview}</p>;
}

export default Synopsis;
