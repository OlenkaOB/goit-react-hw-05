import {
  Outlet,
  useParams,
  NavLink,
  useLocation,
  Link,
} from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import { fetchMoviesDetails } from "../../services/api";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");

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
    <section className={s.section}>
      <Link to={backLink.current}>
        <button className={s.goBackBtn}>Go back</button>
      </Link>
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
            <div className={s.link}>
              <h2>{movie.title}</h2>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map((genre) => {
                  <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
            <nav className={s.nav}>
              <NavLink className={s.NavLink} to="cast">
                Cast
              </NavLink>
              <NavLink className={s.NavLink} to="reviews">
                Reviews
              </NavLink>
            </nav>

            <Outlet />
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieDetailsPage;
