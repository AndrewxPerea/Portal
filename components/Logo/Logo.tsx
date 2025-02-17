"use client"
import Image from "next/image"
import {useRouter} from "next/navigation"

export function Logo(){
    const router = useRouter()
    return(
        <div className="min-h-20 h-20 flex items-center px-6 border-b  cursor-pointergap-2"
            onClick = {() => router.push("/")}>
                <Image src ="/logo.png " alt ="logo"  width={130} height={100} priority/> 
    </div>
    )
}