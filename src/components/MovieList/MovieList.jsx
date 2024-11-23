import s from "../MovieList/MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className={s.div}>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link className={s.link} to={`/movies/${movie.id.toString()}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
