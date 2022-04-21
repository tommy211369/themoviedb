import "./ActorDetails.css";
import mvdbImage from "../../assets/img/mvdb.jpeg";
import { dateFormater } from "../../assets/functionsFile";

function ActorDetails({ actor }) {
  return (
    <div className="ActorDetails">
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : mvdbImage
        }
        alt={actor.name}
      />
      <div className="infos">
        <h1>{actor.name}</h1>
        <p>
          Né(e) le {dateFormater(actor.birthday)} à {actor.place_of_birth}
        </p>
        {actor.deathday ? (
          <p>Décédé(e) le {dateFormater(actor.deathday)}</p>
        ) : null}
        {actor.biography ? (
          <p className="biography">{actor.biography}</p>
        ) : null}
      </div>
    </div>
  );
}

export default ActorDetails;
