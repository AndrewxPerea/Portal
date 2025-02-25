
import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react";
import { LastCustomers } from "./components/LastCustomers";
export const dataCardsSummary = [
  {
      icon :UserRound,
      total: "02 Abril 2025",
      average :12 ,
      title : "TuCable Champions League ",
      tooltipText: "Torneo de Futbol TuCable",
      imagenes : "/torneo.jpeg",
      altura: 100,
      ancho : 500,
      descripcion: "Torneo de Futbos Empleados TuCable",
      
  },
  {
    icon : Waypoints,
    total: "86.5%",
    average : 80 ,
    title : "TuCable Al Cine",
    tooltipText: "see all of the summary",
    imagenes : "/pelicula.jpeg",
    altura: 100,
    ancho : 500,
    descripcion : "Descripcion"
  },
  {
    icon :BookOpenCheck,
    total: "363.95",
    average : 30 ,
    title : "Dia de La Familia TuCable",
    tooltipText: "see all of Bounce Rate",
    imagenes : "next.svg",
    altura: 100,
    ancho : 500,
    descripcion : "Descripcion"
  }
]

export default function Home() {
  return (
    
    <div>
    <h1 className="text-3xl nb-4"> Noticias</h1>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg: gap-x-30">
      {dataCardsSummary.map(({icon, total, average, title, tooltipText, imagenes, altura, ancho, descripcion})=>(
      <CardSummary
         key ={title}
        icon={icon}
        total={total}
        average={average}
        title={title}
        tooltipText={tooltipText}
        imagenes={imagenes}
        altura={altura}
        ancho={ancho}
        descripcion={descripcion}
       />
      ))}
    </div>
    <div className="grid  grid-cols-1 mt-12 xl:grid-cols-2 gap-x-10">
      <LastCustomers/>
      <p>Sales Distributors</p>
    </div>
    </div>
  );
}
