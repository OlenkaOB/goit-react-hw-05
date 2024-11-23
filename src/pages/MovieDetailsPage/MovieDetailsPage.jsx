import { Outlet, useParams, NavLink } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import { fetchMoviesDetails } from "../../services/api";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const data = await fetchMoviesDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadMovie();
  }, [movieId]);
  return (
    <div className={s.films}>
      {!movie ? (
        <p>Loading...</p>
      ) : (
        <div className={s.backDiv}>
          <img
            src={
              movie && movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "notFoundImage"
            }
            alt={movie.title}
            width="200"
            height="250"
          />
          <h2>{movie.title}</h2>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map((genre) => {
              <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>

          <nav className={s.nav}>
            <p>Additional information</p>
            <NavLink className={s.NavLink} to="cast">
              Cast
            </NavLink>
            <NavLink to="reviews">Reviews</NavLink>
          </nav>

          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
