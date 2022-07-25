// Libraries
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ActorPage.css";
import data from "../../assets/data";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

// Components
import Input from "../../components/Input/Input";
import ActorDetails from "../../components/ActorDetails/ActorDetails";
import ActorMovies from "../../components/ActorMovies/ActorMovies";

function ActorPage({ handleSubmit, handleSearch, inputSearch }) {
  const { id } = useParams();

  // STATES
  const [actor, setActor] = useState();
  const [movies, setMovies] = useState([]);
  const [allActorMovies, setAllActorMovies] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);

    fetchActor();
    fetchActorMovies();
  }, []);

  // FONCTIONS
  const fetchActor = async () => {
    try {
      const response = await axios.get(
        data.baseUrl +
          `person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
      );
      setActor(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const fetchActorMovies = async () => {
    try {
      const response = await axios.get(
        data.baseUrl +
          `person/${id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
      );
      setMovies(response.data.cast);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="ActorPage">
          <Input
            handleSubmit={handleSubmit}
            handleSearch={handleSearch}
            inputSearch={inputSearch}
          />
          <ActorDetails actor={actor} />
          {movies ? (
            <ActorMovies
              actor={actor}
              movies={movies}
              allActorMovies={allActorMovies}
              setAllActorMovies={setAllActorMovies}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}

export default ActorPage;
