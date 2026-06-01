import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constant";
import { useEffect } from "react";
import { addPopularMovies, addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const GetTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_Options,
    );
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    GetTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
