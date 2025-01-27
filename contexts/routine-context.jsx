"use client";

import React, { createContext, useContext, useState } from "react";

// Définir un contexte vide au départ
const RoutineContext = createContext(undefined);

export function RoutineProvider({ children }) {
  // État pour gérer la routine sélectionnée
  const [selectedRoutine, setSelectedRoutine] = useState({
    id: 1,
    name: "Trajet travail",
    lines: ["Ligne 1", "RER A"],
  });

  return (
    <RoutineContext.Provider value={{ selectedRoutine, setSelectedRoutine }}>
      {children}
    </RoutineContext.Provider>
  );
}

export function useRoutineContext() {
  // Accéder au contexte
  const context = useContext(RoutineContext);

  // Lever une erreur si le contexte est utilisé hors d'un RoutineProvider
  if (context === undefined) {
    throw new Error("useRoutineContext must be used within a RoutineProvider");
  }

  return context;
}
