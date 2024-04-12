import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchVideoMovies = ({ detailId }) => {
  return api.get(`/movie/${detailId}/videos`);
};

export const useMovieVideosQuery = ({ detailId }) => {
  return useQuery({
    queryKey: ["movie-video", { detailId }],
    queryFn: () => fetchVideoMovies({ detailId }),
    select: (result) => result.data,
  });
};
