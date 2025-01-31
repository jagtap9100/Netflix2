import React from "react";
import "../style/Homescreen.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";
import Footer from "./Footer";
import requests from "../redux/Request";
export default function Homwscreen() {
  return (
    <>
      <div className="homescreen">
        <Navbar />
        <Banner
          text={
            "  You can use the substring or slice method in JavaScript to cut a  string and print the first 10 letters"
          }
          maxLength="75"
        />
        <Row title="Netflix originals" url={requests.fetchNetflixoriginals} />
        <Row title="Actions Movies" url={requests.fetchActionMovies} />
        <Row title="Comedy Movies " url={requests.fetchComedyMovies} />
        <Row title="Horror Movies " url={requests.fetchHorrorMovies} />
        <Row title="Romance Movies " url={requests.fetchRomanceMovies} />
        <Row title="Documentiers " url={requests.fetchDocumentiers} />
        <Row title="Top Rated " url={requests.fetchTopRated} />
        <Footer />
      </div>
    </>
  );
}
