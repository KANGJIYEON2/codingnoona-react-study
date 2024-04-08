import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlice from "./components/PopularMovieSlice/PopularMovieSlice";
import "./Homepage.style.css";
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlice />
    </div>
  );
};

export default Homepage;
