import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface IFilm {
  description: string,
  director: string,
  genre: string,
  id: string,
  posterUrl: string,
  rating: number,
  releaseYear: number,
  reviewIds: string[],
  title: string,
}


export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<IFilm[], void>({ query: () => "movies" }),
    getMovie: builder.query({ query: (movieId: string) => `movie?movieId=${movieId}` }),
  })
});

export const { useGetMoviesQuery } = movieApi;