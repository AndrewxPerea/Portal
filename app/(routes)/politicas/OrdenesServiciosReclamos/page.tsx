

"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {Paginado}from "./components/Paginado"

export default function OrdenesServiciosReclamos() {

  <Paginado/>
  const [page, setPage] = useState(1);

  return (
    <div className="container mx-auto p-6">
      {/* Paginado */}
      <div className="flex justify-between items-center mb-4">
        <Button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className={`px-4 py-2 ${page === 1 ? "opacity-50" : ""}`}
        >
          Soporte Técnico
        </Button>
        <Button
          onClick={() => setPage(2)}
          disabled={page === 2}
          className={`px-4 py-2 ${page === 2 ? "opacity-50" : ""}`}
        >
          Gestión en Sistema
        </Button>
      </div>
      <div className="flex justify-center mt-6">
              <Link href="/politicas ">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  📞 Politicas
                </Button>
              </Link>
            </div>
      {/* Contenido según la página */}
      {page === 1 && (
        <div className="container mx-auto p-6 flex justify-center">
        <Card className="max-w-4xl w-full shadow-lg">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            POLÍTICA DE ÓRDENES DE SERVICIO CON RECLAMACIONES Y FILTROS A REALIZAR AL MOMENTO DE LA SOLICITUD
            </h1>
            <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
            SOPORET TÉCNICO
            </h2>
            <p className="mb-4">
              El soporte técnico es un servicio gratuito para los usuarios de TuCable, salvo que se detecte manipulación por parte del usuario. En estos casos, se cobrará un valor de <strong>$30.000 M/cte.</strong>
            </p>
  
            <h2 className="text-2xl font-semibold mt-6">1.1. Requisitos para Solicitar Soporte Técnico</h2>
            <ul className="list-disc ml-6">
              <li>La solicitud debe realizarse a través de los canales autorizados.</li>
              <li>El usuario debe estar al día en pagos.</li>
              <li>Solo pueden solicitarlo:
                <ul className="list-disc ml-6">
                  <li>El titular de la cuenta.</li>
                  <li>Familiar de primer grado (padres o hijos) o segundo de afinidad (hermanos, abuelos, nietos).</li>
                  <li>Usuarios que gestionan el servicio.</li>
                </ul>
              </li>
              <li>Actualizar datos de contacto (teléfonos, puntos adicionales y correo).</li>
              <li>Para atención presencial, el titular debe presentar cédula.</li>
            </ul>
  
            <h2 className="text-2xl font-semibold mt-6">1.2. Proceso de Registro de Órdenes de Servicio</h2>
            <ul className="list-disc ml-6">
              <li>Consultar solicitudes pendientes en el sistema antes de registrar una nueva.</li>
              <li>Si hay un registro en SOPORTE REMOTO mayor a 3 meses, volver a ingresarlo.</li>
              <li>Si es inferior a 3 meses, generar orden en SAE PLUS para atención en terreno.</li>
            </ul>
  
            <h2 className="text-2xl font-semibold mt-6">1.3. Criterios para Determinar el Tipo de Soporte</h2>
            <h3 className="text-xl font-semibold mt-4">1.3.1 Sin Internet</h3>
            <ul className="list-disc ml-6">
              <li>Si el bombillo del módem alumbra rojo, hay daño en la fibra. Se reporta en WorkDrive.</li>
              <li>Si la red desaparece, puede ser por restauración o desactivación del Wi-Fi.</li>
            </ul>
  
            <h3 className="text-xl font-semibold mt-4">1.3.2 Lentitud, Intermitencia o Problemas de Configuración</h3>
            <ul className="list-disc ml-6">
              <li>Verificar número de dispositivos conectados y procesos en ejecución.</li>
              <li>Revisar caídas generales del servicio.</li>
              <li>Evaluar ubicación del módem y posibles soluciones como repetidores.</li>
            </ul>
  
            <h2 className="text-2xl font-semibold mt-6">2. FALLAS EN EL SERVICIO DE TELEVISIÓN</h2>
            <p>Se requiere atención en terreno para:</p>
            <ul className="list-disc ml-6">
              <li>Canales pixelados.</li>
              <li>Intermitencia en la señal.</li>
              <li>Fantasmas o rayas en la imagen.</li>
            </ul>
  
            <h2 className="text-2xl font-semibold mt-6">3. CATEGORIZACIÓN DE ÓRDENES DE SERVICIO</h2>
            <ul className="list-disc ml-6">
              <li><strong>CABLE CAÍDO:</strong> Falla en TV por caída de cable.</li>
              <li><strong>CAÍDA DE SISTEMA:</strong> Ausencia de internet y/o televisión.</li>
              <li><strong>OTROS:</strong> Servicios con ejecución de 8 a 10 días hábiles.</li>
            </ul>
  
            {/* Botón de contacto */}

          </CardContent>
        </Card>
      </div>
      )}

      {page === 2 && (
        <div className="container mx-auto p-6 flex justify-center">
        <Card className="max-w-4xl w-full shadow-lg">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
              GESTIÓN EN SISTEMA Y COSTOS DE SERVICIOS
            </h1>
  
            {/* Sección 4.1: Valores de Servicios */}
            <h2 className="text-2xl font-semibold mt-6">4.1 Valores de Servicios con Costo para el Usuario</h2>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-300 text-left">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-2 border">Servicio</th>
                    <th className="p-2 border">Valor ($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border">Manipulación del usuario</td><td className="p-2 border">30.000</td></tr>
                  <tr><td className="p-2 border">Punto adicional antes de la instalación</td><td className="p-2 border">20.000</td></tr>
                  <tr><td className="p-2 border">Punto adicional después de la instalación</td><td className="p-2 border">30.000</td></tr>
                  <tr><td className="p-2 border">Reconexión de Internet y TV</td><td className="p-2 border">30.000</td></tr>
                  <tr><td className="p-2 border">Traslado de Internet y TV</td><td className="p-2 border">30.000</td></tr>
                  <tr><td className="p-2 border">Reubicación de acometida</td><td className="p-2 border">30.000</td></tr>
                  <tr><td className="p-2 border">Metro adicional de cable</td><td className="p-2 border">2.000</td></tr>
                </tbody>
              </table>
            </div>
  
            {/* Sección 4.2: Registro de Órdenes */}
            <h2 className="text-2xl font-semibold mt-6">4.2 Registro de Órdenes en SAE PLUS</h2>
            
            <h3 className="text-xl font-semibold mt-4">Módulo de Abonados</h3>
            <ul className="list-disc ml-6">
              <li>Consultar la cédula del titular para validar pagos.</li>
              <li>Actualizar datos de contacto.</li>
              <li>Generar la orden desde:
                <ul className="list-disc ml-6">
                  <li>Atajos (pantalla de abonados o cobranza).</li>
                  <li>Módulo de Operaciones.</li>
                </ul>
              </li>
            </ul>
  
            <h2 className="text-xl font-semibold mt-4">Módulo de Operaciones</h2>
            <ul className="list-disc ml-6">
              <li>Ingresar a &quot;Órdenes Técnicas&quot; {'>'} &quot;Crear Orden&quot;.</li>
              <li>Consultar por número de abonado, cédula o historial.</li>
              <li>Seleccionar &quot;Tipo de Orden: Orden de Reclamos&quot;.</li>
              <li>Registrar detalle y descripción de la falla.</li>
              <li>Guardar y registrar la orden.</li>
            </ul>
  
            <h3 className="text-xl font-semibold mt-4">Formato de Soporte Técnico Interno</h3>
            <ul className="list-disc ml-6">
              <li>Ingresar al correo de la oficina correspondiente.</li>
              <li>Acceder a Aplicaciones Zoho {'>'} Soporte Técnico Interno.</li>
              <li>Verificar que el cable coaxial esté correctamente conectado al puerto RF del televisor.</li>
            </ul>
  
          </CardContent>
        </Card>
      </div>
      )}
  

    </div>
  );
}






