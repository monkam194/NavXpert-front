"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Routine = {
  id: number
  name: string
  lines: string[]
}

type RoutineContextType = {
  selectedRoutine: Routine | null
  setSelectedRoutine: (routine: Routine) => void
}

const RoutineContext = createContext<RoutineContextType | undefined>(undefined)

export function RoutineProvider({ children }: { children: ReactNode }) {
  const [selectedRoutine, setSelectedRoutine] = useState<Routine>({
    id: 1,
    name: "Trajet travail",
    lines: ["Ligne 1", "Ligne 2"]
  })

  return (
    <RoutineContext.Provider value={{ selectedRoutine, setSelectedRoutine }}>
      {children}
    </RoutineContext.Provider>
  )
}

export function useRoutineContext() {
  const context = useContext(RoutineContext)
  if (context === undefined) {
    throw new Error("useRoutineContext must be used within a RoutineProvider")
  }
  return context
}