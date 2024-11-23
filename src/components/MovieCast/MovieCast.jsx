import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast || []);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
        setCast([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadCast();
  }, [movieId]);

  if (isLoading) return <p>Loading cast information...</p>;

  if (cast.length === 0) return <p>Sorry, no cast information available.</p>;

  return (
    <ul>
      {cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={name}
            width="100"
          />
          <div>
            <p>{name}</p>
            <p>Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
