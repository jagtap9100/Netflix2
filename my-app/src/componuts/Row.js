import React, { useState, useEffect } from "react";
import "../style/Row.css";
import axios from "axios";
export default function Row({ title, url, isLargerow = "false" }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";
  const fetchapidata = async () => {
    const response = await axios.get(url);
    // const req = await response.json();
    setMovies(response.data.results);
  };
  useEffect(() => {
    (async () => {
      await fetchapidata();
    })();
  }, [url]);
  console.log("setMovies", movies);
  return (
    <>
      <div className="row pl-9">
        <h1 className="text-white text-2xl">{title}</h1>
        <div className="row_poster">
          {movies != null &&
            movies.length > 0 &&
            movies.map((item, index) => (
              <img
                className={` ${isLargerow && "row_posterLarge"}`}
                key={index}
                src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
                alt={item.title || item.name || "Movie Poster"}
              />
            ))}
        </div>
      </div>
    </>
  );
}
