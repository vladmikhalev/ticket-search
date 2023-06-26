import { movieApi } from "./movieApi";

// const getPostsWithAuthors = async () => {
//   const [movies, cinemas] = await Promise.all([
//     movieApi.endpoints.getMovies(),
//     movieApi.endpoints.getCinemas(),
//   ]);

//   return [movies, cinemas]
// };

// const customQueryFn = async (args, api, extraOptions) => {
//   const { data } = await getPostsWithAuthors();
//   return { data };
// };

// export const { useGetPostsWithAuthorsQuery } = postsApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getPostsWithAuthors: builder.query({
//       queryFn: customQueryFn,
//     }),
//   }),
// });
