import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieRecomand = ({ detailId }) => {
  return api.get(`/movie/${detailId}/recommendations?language=ko-KR`);
};

export const useMovieRecomandQuery = ({ detailId }) => {
  return useQuery({
    queryKey: ["movie-recomand", { detailId }],
    queryFn: () => fetchMovieRecomand({ detailId }),
    select: (result) => result.data,
  });
};
