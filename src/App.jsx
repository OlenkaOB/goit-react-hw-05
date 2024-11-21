// import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { lazy } from "react";
import Navigation from "./components/Navigation/Navigation";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";

// import FetchMovies from './services/api';

// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
// const MovieDetailsPage = lazy(() =>
//   import("./pages/MovieDetailsPage/MovieDetailsPage")
// );
// const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
// const MovieReviews = lazy(() =>
//   import("./components/MovieReviews/MovieReviews")
// );

function App() {
  // const [movies, setMovies] = useState([]);
  return (
    <>
      <Navigation />
      <div>
        {/* <Suspense fallback={<h2>Loading...</h2>}> */}
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
          <Route />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* </Suspense> */}
      </div>
    </>
  );
}

export default App;
