"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { useRoutineContext } from "@/contexts/routine-context"

const allLines = [
  { id: 1, name: "Ligne 1", status: "normal", info: "Trafic fluide" },
  { id: 2, name: "Ligne 2", status: "perturbé", info: "Travaux en cours entre Nation et Étoile" },
  { id: 3, name: "RER A", status: "normal", info: "Trafic normal sur l'ensemble de la ligne" },
  { id: 4, name: "RER B", status: "normal", info: "Trafic normal sur l'ensemble de la ligne" },
]

export function TransitLines() {
  const { selectedRoutine } = useRoutineContext()
  
  const lines = allLines.filter(line => 
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
        {lines.map((line) => (
          <div key={line.id} className="p-4 transition-colors hover:bg-muted/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center text-black space-x-3">
                {line.status === "normal" ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500" />
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