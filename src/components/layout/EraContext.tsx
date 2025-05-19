"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Era } from "./EraContainer";

interface EraContextType {
  currentEra: Era;
  setCurrentEra: (era: Era) => void;
}

const EraContext = createContext<EraContextType | undefined>(undefined);

interface EraProviderProps {
  children: ReactNode;
  initialEra?: Era;
}

export function EraProvider({ children, initialEra = "present" }: EraProviderProps) {
  // Initialize with default era
  const [currentEra, setCurrentEra] = useState<Era>(initialEra);

  return (
    <EraContext.Provider value={{ currentEra, setCurrentEra }}>
      {children}
    </EraContext.Provider>
  );
}

export function useEra() {
  const context = useContext(EraContext);
  if (context === undefined) {
    throw new Error("useEra must be used within an EraProvider");
  }
  return context;
}
