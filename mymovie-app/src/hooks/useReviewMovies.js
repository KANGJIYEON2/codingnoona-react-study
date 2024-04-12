import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieReviews = ({ detailId }) => {
  return api.get(`/movie/${detailId}/reviews`);
};

export const useMovieReviewsQuery = ({ detailId }) => {
  return useQuery({
    queryKey: ["movie-reviews", { detailId }],
    queryFn: () => fetchMovieReviews({ detailId }),
    select: (result) => result.data,
  });
};
