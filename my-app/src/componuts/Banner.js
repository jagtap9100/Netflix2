import React, { useEffect, useState } from "react";
import "../style/Banner.css";
import tmdbapi from "../redux/tmdbapi";
import requests from "../redux/Request";
import axios from "axios";
export default function Banner({ maxLength }) {
  const [readmore, setReadmore] = useState(false);
  const [movies, setMovies] = useState([]);

  const readmorehandle = () => {
    setReadmore(!readmore);
  };
  const fetchapidata = async () => {
    const data = await tmdbapi();
  };

  useEffect(() => {
    (async () => {
      await fetchapidata();
      const response = await axios.get(requests.fetchNetflixoriginals);
      setMovies(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    })();
  }, []);
  const trimmedText = movies?.overview
    ? movies?.overview.slice(0, maxLength)
    : movies?.overview;
  return (
    <>
      <div
        className="banner pl-9"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content container mx-auto text-black">
          <div className="banner_title">{movies?.original_name}</div>
          <div className="banner_btns mt-3">
            <button className="banner_btn">Play</button>
            <button className="banner_btn  ml-5 ">My List</button>
          </div>
          <div className="flex  items-end cursor-pointer">
            <h1 className="banner_descitpition">
              {readmore ? `${movies?.overview}` : trimmedText}
            </h1>
            <sub onClick={readmorehandle}>
              {readmore ? " Read Less " : "Read more"}
            </sub>
          </div>
        </div>
      </div>
    </>
  );
}
