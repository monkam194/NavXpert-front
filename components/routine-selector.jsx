"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const routines = [
  {
    id: 1,
    name: "Trajet travail",
    lines: ["Ligne 1", "RER A"],
  },
  {
    id: 2,
    name: "Trajet université",
    lines: ["Ligne 2", "RER B"],
  },
  {
    id: 3,
    name: "Weekend",
    lines: ["Ligne 1"],
  },
];

export function RoutineSelector() {
  const [selectedRoutine, setSelectedRoutine] = useState(1);

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-black flex items-center gap-2">
          <Compass className="h-5 w-5" />
          Mes routines
        </h2>
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4 text-black" />
        </Button>
      </div>

      <div className="space-y-2">
        {routines.map((routine) => (
          <Button
            key={routine.id}
            variant="ghost"
            className={cn(
              "w-full justify-start hover:bg-gray-200 transition-colors",
              selectedRoutine === routine.id && "bg-muted"
            )}
            onClick={() => setSelectedRoutine(routine.id)}
          >
            <div className="text-left">
              <div className="font-medium text-black">{routine.name}</div>
              <div className="text-xs text-[#7e7e7e] text-muted-foreground">
                {routine.lines.join(" • ")}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
}
