import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import { Field, Form, Formik } from "formik";
import Loader from "../../components/Loader/Loader";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const initialValues = { query: "" };
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query");

  const handleSearchSubmit = (values, actions) => {
    const searchQuery = values.query.trim().toLowerCase();
    if (searchQuery === query) return;
    setQuery(searchQuery);
    setSearchParams({ query: searchQuery });
    setMovies([]);
    actions.resetForm();
  };

  useEffect(() => {
    if (!queryParam) return;

    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { results } = await searchMovies(queryParam);
        setMovies(results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [queryParam]);

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSearchSubmit}>
        <Form className={s.form}>
          <Field
            type="text"
            placeholder="Search movies..."
            name="query"
            className={s.field}
          />
          <button type="submit" className={s.btn}>
            Search
          </button>
        </Form>
      </Formik>

      {isLoading && <Loader />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!isLoading && movies.length === 0 && queryParam && (
        <p>No movies found for {queryParam}.</p>
      )}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
