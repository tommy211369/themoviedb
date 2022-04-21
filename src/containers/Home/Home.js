// Librairies
import { useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "./Home.css";

// Components
import MovieCard from "../../components/MovieCard/MovieCard";
import Input from "../../components/Input/Input";

const Home = ({
  setMovieslist,
  handleSubmit,
  handleSearch,
  inputSearch,
  setInputSearch,
  moviesList,
  data,
}) => {
  // USEEFFECT
  useEffect(() => {
    fetchMovies();
  }, []);

  // FONCTIONS
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${data.apiKey}&query=${inputSearch}&language=fr-FR`
      );
      setMovieslist(response.data.results);
    } catch (error) {
      console.log(error.response);
    }
  };

  const deleteInputSearch = () => {
    setInputSearch("");
  };

  // VARIABLES
  const movies = moviesList.map((movie) => {
    return (
      <Link
        key={movie.id}
        to={`/movie/${movie.id}`}
        onClick={deleteInputSearch}
      >
        <MovieCard movie={movie} />
      </Link>
    );
  });
  return (
    <div className="Home">
      <Input
        handleSubmit={handleSubmit}
        handleSearch={handleSearch}
        inputSearch={inputSearch}
      />
      {moviesList ? <div className="movies-list">{movies}</div> : null}
    </div>
  );
};

export default Home;
