// Librairies
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MoviePage.css";
import data from "../../assets/data";
import axios from "axios";
import mvdbImage from "../../assets/img/mvdb.jpeg";

// Components
import Input from "../../components/Input/Input";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Synopsis from "../../components/Synopsis/Synopsis";
import MovieVideos from "../../components/MovieVideos/MovieVideos";
import Casting from "../../components/Casting/Casting";
import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";
import Loading from "../../components/Loading/Loading";

const MoviePage = ({ handleSubmit, handleSearch, inputSearch }) => {
  const { id } = useParams();

  // STATES
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [allSimilarMovies, setAllSimilarMovies] = useState(false);
  const [allCast, setAllCast] = useState(false);
  const [allVideos, setAllVideos] = useState(false);
  const [loading, setLoading] = useState(true);

  // USEEFFECT
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);

    fetchMovie();
    fetchCast();
    fetchSimilarMovies();
  }, [id]);

  // FONCTIONS
  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        data.baseUrl +
          `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,images&language=fr-FR`
      );
      setMovie(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const fetchCast = async () => {
    try {
      const response = await axios.get(
        data.baseUrl +
          `movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
      );
      setCast(response.data.cast);
      setCrew(response.data.crew);
    } catch (error) {
      console.log(error.response);
    }
  };

  const fetchSimilarMovies = async () => {
    try {
      const response = await axios.get(
        data.baseUrl +
          `movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
      );
      setSimilarMovies(response.data.results);
    } catch (error) {
      console.log(error.response);
    }
  };

  // VARIABLES
  let image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="MoviePage">
          <Input
            handleSubmit={handleSubmit}
            handleSearch={handleSearch}
            inputSearch={inputSearch}
          />
          <MovieDetails
            movie={movie}
            image={image}
            mvdbImage={mvdbImage}
            crew={crew}
            cast={cast}
          />
          <Synopsis movie={movie} />

          {movie.videos ? (
            movie.videos.results ? (
              movie.videos.results.length !== 0 ? (
                <MovieVideos
                  movie={movie}
                  allVideos={allVideos}
                  setAllVideos={setAllVideos}
                />
              ) : null
            ) : null
          ) : null}

          {cast ? (
            <Casting
              cast={cast}
              allCast={allCast}
              setAllCast={setAllCast}
              setAllSimilarMovies={setAllSimilarMovies}
              setAllVideos={setAllVideos}
            />
          ) : null}

          {similarMovies ? (
            <SimilarMovies
              similarMovies={similarMovies}
              allSimilarMovies={allSimilarMovies}
              setAllSimilarMovies={setAllSimilarMovies}
              setAllCast={setAllCast}
              setAllVideos={setAllVideos}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default MoviePage;
