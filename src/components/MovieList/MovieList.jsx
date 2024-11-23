import s from "../MovieList/MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={s.div}>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              className={s.link}
              to={`/movies/${movie.id.toString()}`}
              state={location}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
