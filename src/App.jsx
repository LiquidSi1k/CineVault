import "./App.css";
import Cards from "./Cards";
import { useState, useEffect } from "react";

const API_URL = "https://search.imdbot.workers.dev/?q=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}${title}`);
    const data = await response.json();

    setMovies(data.description);
  };

  useEffect(() => {
    searchMovie("superman");
  }, []);

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      searchMovie(searchTerm);
    }
  };

  return (
    <>
      <div className="app">
        <a href="#">
          <h1 className="text-3xl font-bold text-center">CineVault</h1>
        </a>
        <div className="border-2 rounded w-9/12 m-auto">
          <div className="flex justify-center">
            <input
              className=" p-1 m-1 w-full"
              type="text"
              placeholder="Search your movie"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
            <img
              className="cursor-pointer w-[4vmin] p-1"
              src="../public/search.gif"
              alt="search"
              onClick={() => searchMovie(searchTerm)}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center w-screen">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <div key={movie["#IMDB_ID"]} className="">
                <Cards movie={movie} />
              </div>
            ))
          ) : (
            <div>
              <p>No movies with such title</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
