"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { dataGeneralMenuPoliticas } from "./MenuPoliticasRoutes.data";

export default function MenuPoliticas() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Menú de Políticas</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataGeneralMenuPoliticas.map((item, index) => (
          <Link key={index} href={item.href}>
            <Card className="p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
              <item.icon className="w-10 h-10 text-blue-600" />
              <CardContent>
                <h3 className="text-lg font-semibold">{item.label}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
