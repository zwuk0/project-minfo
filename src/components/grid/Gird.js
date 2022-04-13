import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";
import "./Grid.css";

function Grid(props) {
  const [data, setData] = useState([]);
  const imgBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios
      .get(`${props.url}`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, [props.url]);

  return (
    <div className="grid">
      <h2 className="grid__title"> {props.title}</h2>
      <div className="grid__content">
        {data.slice(0, 18).map((i) => (
          <div key={i.id + "g"} className="grid-items">
            <Link className="grid__link" to={`${props.link}/${i.id}`}>
              <div>
                <img
                  className="grid__img"
                  src={imgBaseUrl + `${i.poster_path}`}
                  alt={i.title}
                />
                <h5 className="grid__title">{i.title || i.name}</h5>
                <span className="grid__date">{i.release_date}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="view__more">
        <Link className="view__link" to={"/2"}>
          View More
        </Link>
      </div>
    </div>
  );
}

export default Grid;
