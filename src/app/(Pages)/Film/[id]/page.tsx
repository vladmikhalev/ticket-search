"use client"
import { useGetMovieQuery } from "@/redux/services/movieApi";
import Details from "../../Details/Details";


export default function PageDetails({ params }: { params: { id: string } }) {
  const { data, isLoading, error } = useGetMovieQuery(params.id);

  return (
    <Details filmDetails={data} idFilm={params.id} />
  );
    

}