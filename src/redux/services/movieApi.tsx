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

export interface IComment {
  id: string,
  name: string,
  rating: number,
  text: string,
}


export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<IFilm[], void>({
      query: () => "movies",
      transformResponse: (response: IFilm[]) => {
        return response.map((item: IFilm) => {
          if (item.genre === 'fantasy') {
            return { ...item, genre: "Фэнтези" };
          }
          if (item.genre === 'horror') {
            return { ...item, genre: "Ужасы" };
          }
          if (item.genre === 'action') {
            return { ...item, genre: "Боевик" };
          }
          if (item.genre === 'comedy') {
            return { ...item, genre: "Комедия" };
          }
          return item;
        });
      },
    }),
    getMovie: builder.query({
      query: (movieId: string) => `movie?movieId=${movieId}`,
      transformResponse: (response: IFilm) => {
        if (response.genre === 'fantasy') {
          return { ...response, genre: "Фэнтези" };
        }
        if (response.genre === 'horror') {
          return { ...response, genre: "Ужасы" };
        }
        if (response.genre === 'action') {
          return { ...response, genre: "Боевик" };
        }
        if (response.genre === 'comedy') {
          return { ...response, genre: "Комедия" };
        }
      },
    }),
    getComments: builder.query<IComment[], string>({
      query: (movieId: string) => `reviews?movieId=${movieId}`,
    }),
  })
});

export const { useGetMoviesQuery, useGetMovieQuery, useGetCommentsQuery } = movieApi;