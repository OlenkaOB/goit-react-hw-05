import s from "../HomePage/HomePage.module.css";
import { fetchTrendingMovies } from "../../services/api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    loadMovies();
  }, []);

  return (
    <div className={s.div}>
      <h1 className={s.title}>Top films</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
