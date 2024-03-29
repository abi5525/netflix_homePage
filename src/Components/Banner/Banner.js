import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/contsants";
import axios from "../../axios";

import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[2]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_btns">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="descreption">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
