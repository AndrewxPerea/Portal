
import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, icons, UserRound, Waypoints } from "lucide-react";


export const dataCardsSummary = [
  {
      icon :UserRound,
      total: "12.450",
      average :12 ,
      title : "Companies Created",
      tooltipText: "See all of companies created",
  },
  {
    icon : Waypoints,
    total: "86.5%",
    average : 80 ,
    title : "Total Revenue",
    tooltipText: "see all of the summary",
  },
  {
    icon :BookOpenCheck,
    total: "363.95",
    average : 30 ,
    title : "Bounce Rate",
    tooltipText: "see all of Bounce Rate",
  }
]

export default function Home() {
  return (
    <div>
    <h2 className="text-2xl nb-4"> Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg: gap-x-20">
      {dataCardsSummary.map(({icon, total, average, title, tooltipText})=>(
      <CardSummary
      key ={title}
        icon={icon}
        total={total}
        average={average}
        title={title}
        tooltipText={tooltipText}
    
       />
      ))}


    </div>
    </div>
  );
}
