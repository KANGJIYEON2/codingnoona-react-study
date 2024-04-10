import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRatedMovies = () => {
  return api.get(`/movie/top_rated?language=ko-KR`);
};

export const useRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-top_rated"],
    queryFn: fetchRatedMovies,
    select: (result) => result.data,
  });
};
