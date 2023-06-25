"use client"
import { usePathname } from "next/navigation";
import Details from "../Details/Details";


export default function PageDetails() {
  const idFilm = usePathname().slice(1);
  


  return <Details idFilm={idFilm} />
}