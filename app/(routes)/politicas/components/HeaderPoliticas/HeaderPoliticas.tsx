"use client"
import Link from "next/link";
import{Vote} from "lucide-react"


export function HeaderPoliticas() {
  return (
    <section className="p-12 items-center">
      <Vote size={40} />
      <Link href="/politicas" className="text-lg font-bold mb-2 items-center">Políticas</Link>
    </section>
  )
}

