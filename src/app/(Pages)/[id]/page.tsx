"use client"
import { useGetMovieQuery } from "@/redux/services/movieApi";
import { usePathname } from "next/navigation";
import Details from "../Details/Details";


export default function PageDetails() {
  const idFilm = usePathname().slice(1);
  const { data, isLoading, error } = useGetMovieQuery(idFilm);

  return (
    <Details filmDetails={data} idFilm={idFilm} />
  );
    

}