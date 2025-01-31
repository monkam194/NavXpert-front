"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { useRoutineContext } from "@/contexts/routine-context"

const allLines = [
  { id: 1, name: "Ligne 1", status: "loading", info: "Chargement des données..." },
  { id: 2, name: "Ligne 2", status: "loading", info: "Chargement des données..." },
  { id: 3, name: "RER A", status: "normal", info: "Trafic normal sur l'ensemble de la ligne" },
  { id: 4, name: "RER B", status: "normal", info: "Trafic normal sur l'ensemble de la ligne" },
]

export function TransitLines() {
  const { selectedRoutine } = useRoutineContext()
  const [lines, setLines] = useState(allLines)

  useEffect(() => {
    const fetchDataForLine = async (lineId, url) => {
      try {
        const response = await fetch(url, {
          method: "GET",
        })

        if (response.ok) {
          const data = await response.json()

          // Met à jour l'état pour la ligne correspondante
          setLines((prevLines) =>
            prevLines.map((line) =>
              line.id === lineId
                ? {
                    ...line,
                    status: data.impactsUser ? "perturbé" : "normal",
                    info: data.justification,
                  }
                : line
            )
          )
        } else {
          console.error("Erreur lors de la récupération des données")
        }
      } catch (error) {
        console.error("Erreur réseau ou serveur :", error)
      }
    }

    // Requête pour Ligne 1
    fetchDataForLine(1, "https://localhost:7083/Disruption/check-impact/evry/ivry/C01384")

    // Délai de 20 secondes pour la Ligne 2
    const timeout = setTimeout(() => {
      fetchDataForLine(2, "https://localhost:7083/Disruption/check-impact/paris/versailles/C01384")
    }, 20 * 1000)

    // Nettoyer le timeout si le composant est démonté
    return () => clearTimeout(timeout)
  }, [])

  const filteredLines = lines.filter((line) =>
    selectedRoutine?.lines.includes(line.name)
  )

  return (
    <Card className="overflow-hidden">
      <div className="border-b bg-muted/50 p-4">
        <h2 className="text-lg font-semibold text-black">État du trafic en temps réel</h2>
        {selectedRoutine && (
          <p className="text-sm text-black text-muted-foreground mt-1">
            Routine : {selectedRoutine.name}
          </p>
        )}
      </div>
      <div className="divide-y">
        {filteredLines.map((line) => (
          <div key={line.id} className="p-4 transition-colors hover:bg-muted/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center text-black space-x-3">
                {line.status === "normal" ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : line.status === "perturbé" ? (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                ) : (
                  <span className="loader"></span> // Optionnel : spinner pour état "loading"
                )}
                <span className="font-medium">{line.name}</span>
              </div>
              <Badge 
                variant={line.status === "normal" ? "default" : "destructive"}
                className="capitalize"
              >
                {line.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground text-black pl-8">{line.info}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
