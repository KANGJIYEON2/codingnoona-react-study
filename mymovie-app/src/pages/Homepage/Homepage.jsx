import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlice from "./components/PopularMovieSlice/PopularMovieSlice";
import "./Homepage.style.css";
import RatedMovieSlice from "./components/RatedMovieSlice/RatedMovieSlice";
import UpcomingMovieSlice from "./components/UpComingMovieSlice/UpComingMovieSlice";
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlice />
      <RatedMovieSlice />
      <UpcomingMovieSlice />
    </div>
  );
};

export default Homepage;
