import { Separator } from "@/components/ui/separator"
import { HeaderPoliticas } from "./components/HeaderPoliticas";
import { MenuPoliticas } from "./components/MenuPoliticas";
import{ } from "./components/MenuPoliticasRoutes"

export default function PoliticasPages(){
    return(
        <div>
           <HeaderPoliticas/>
           <Separator/>
           <MenuPoliticas/>
            </div>
    )
}