// Librairies
import "./App.css";
import { useState } from "react";
import mvdbSVG from "../assets/img/mvdb.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import data from "../assets/data.js";

// Components
import Home from "../containers/Home/Home";
import MoviePage from "../containers/MoviePage/MoviePage";
import ActorPage from "../containers/ActorPage/ActorPage";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer/Footer";

function App() {
  //STATES
  const [inputSearch, setInputSearch] = useState("");
  const [moviesList, setMovieslist] = useState([]);
  // FONCTIONS

  const handleSearch = async (e) => {
    setInputSearch(e.target.value);
    try {
      const response = await axios.get(data.baseUrl + moviesUrl);
      setMovieslist(response.data.results);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSubmit = async (e, func) => {
    e.preventDefault();
    try {
      const movieResponse = await axios.get(data.baseUrl + moviesUrl);
      const configResponse = await axios.get(configUrl);
      console.log(configResponse.data.images);
      console.log(movieResponse.data.results);
      setMovieslist(movieResponse.data.results);
      func("/");
      setInputSearch("");
    } catch (error) {
      console.log(error.response);
    }
  };

  // VARIABLES

  const configUrl = data.baseUrl + "configuration?api_key=" + data.apiKey;
  let moviesUrl = `search/movie?api_key=${data.apiKey}&query=${inputSearch}&language=fr-FR`;

  return (
    <div className="App">
      <img src={mvdbSVG} alt="mvdbSVG" />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setMovieslist={setMovieslist}
                handleSubmit={handleSubmit}
                handleSearch={handleSearch}
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
                moviesList={moviesList}
                data={data}
              />
            }
          />
          <Route
            path="/movie/:id"
            element={
              <MoviePage
                handleSubmit={handleSubmit}
                handleSearch={handleSearch}
                inputSearch={inputSearch}
              />
            }
          />
          <Route
            path="/actor/:id"
            element={
              <ActorPage
                handleSubmit={handleSubmit}
                handleSearch={handleSearch}
                inputSearch={inputSearch}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
