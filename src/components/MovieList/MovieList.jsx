// import s from "../MovieList/MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to="/movies/${movie.id}">{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
