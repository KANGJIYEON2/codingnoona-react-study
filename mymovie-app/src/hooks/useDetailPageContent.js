import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchDetailMovies = ({ detailId }) => {
  return api.get(`/movie/${detailId}?language=ko-KR`);
};

export const useFetchDetailMoviesQuery = ({ detailId }) => {
  return useQuery({
    queryKey: ["movie-detail", { detailId }],
    queryFn: () => fetchDetailMovies({ detailId }),
    select: (result) => result.data,
  });
};
