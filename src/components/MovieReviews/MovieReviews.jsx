import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieRewiews } from "../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const { results } = await fetchMovieRewiews(movieId);
        setReviews(results || []);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews();
  }, [movieId]);

  if (isLoading) return <p>Loading reviews...</p>;

  if (reviews.length === 0) return <p>No reviews available for this movie.</p>;

  return (
    <ul className={s.link}>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
