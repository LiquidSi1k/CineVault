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
          <h1 className="text-3xl font-bold text-center m-3">CineVault</h1>
        </a>
        <div className="border-2 rounded w-9/12 m-auto my-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <div className="flex justify-center">
            <input
              className=" p-1 m-1 w-full rounded-md"
              type="text"
              placeholder=" Search your movie"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
            <img
              className="cursor-pointer w-[5vmin] p-1"
              src="/public/search.gif"
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
