import "./home.css";
import Carousel from "../../components/carousel/Carousel";
import Grid from "../../components/grid/Gird";
import { BarLoader } from "react-spinners";
// import axios from "../../axios";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="home">
      <div className="home__header">
        <Carousel />
      </div>
      <div className="home__body">
        <div className="home__nav">
          <Link className="home__link" to={"/"}>
            Trending
          </Link>
          <Link className="home__link" to={"popular"}>
            Popular
          </Link>
          <Link className="home__link" to={"upcoming"}>
            Upcomming
          </Link>
        </div>
        <Routes>
          <Route
            index
            element={
              <Grid
                title={"Trending Movies"}
                link={"/movie"}
                url={"/api/movie/trending"}
              />
            }
          />
          <Route
            path="/popular"
            element={
              <Grid
                title={"Popular Movies"}
                link={"/movie"}
                url={"/api/movie/popular"}
              />
            }
          />
          <Route
            path="/upcoming"
            element={
              <Grid
                title={"Upcoming Movies"}
                link={"/movie"}
                url={"/api/movie/upcoming"}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
