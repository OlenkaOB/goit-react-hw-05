import { Outlet, useLocation, useNavigate } from "react-router-dom";

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from ?? "/movies";
  return (
    <div>
      <button onClick={() => navigate(backLink)}>Go back</button>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
