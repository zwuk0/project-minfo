import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../axios";
import "./movie.css";

function Movie() {
  let params = useParams();
  const [movie, setMovie] = useState([]);
  const [getVideos, setGetVideos] = useState([]);
  const imgBaseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    // Get trailers
    axios
      .get(`/api/movie/${params.id}/video`)
      .then((res) => setGetVideos(res.data.results))
      .catch((err) => console.log(err));
    // Get Details
    axios
      .get(`/api/movie/${params.id}/`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);
  console.log(movie);
  return (
    <div className="movie">
      {getVideos
        .filter((t) => t.type === "Trailer")
        .slice(0, 1)
        .map((i) => (
          <div className="movie__trailer">
            <iframe
              title="trailer-video"
              src={`https://www.youtube.com/embed/${i.key}`}
              frameBorder="0"
              width="100%"
              height="720"
              className="youtube__video"
            ></iframe>
          </div>
        ))}
      <div className="movie__content">
        <div className="movie__content--left">
          <h4 className="movie__title">{movie.title}</h4>
          <ul className="movie__subtitle">
            <li className="movie-subtitle__item">{movie.vote_average}</li>
            <li className="movie-subtitle__item">{movie.runtime}</li>
            <li className="movie-subtitle__item">{movie.runtime}</li>
          </ul>
          <p className="movie__overview">{movie.overview}</p>
        </div>
        <div className="movie__content--right">
          <img
            src={`${imgBaseUrl}${movie.poster_path}`}
            alt={movie.title}
            className="movie__poster"
          />
        </div>
      </div>
      <div className="similar"></div>
      <div className="recommended"></div>
    </div>
  );
}

export default Movie;
