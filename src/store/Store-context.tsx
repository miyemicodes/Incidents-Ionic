import React, { useState, useContext, createContext, ReactNode } from 'react';
import { DUMMY_DATA } from '../DATA/dummy-data-store';
import { IncidentData } from '../model/incidence.interface';


interface StoreContextType {
  mainState: IncidentData[];
  setMainState: React.Dispatch<React.SetStateAction<IncidentData[]>>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

interface StoreContextProviderProps {
  children: ReactNode;
}

const StoreContextProvider: React.FC<StoreContextProviderProps> = ({ children }) => {
  const [mainState, setMainState] = useState<IncidentData[]>(DUMMY_DATA);

  return (
    <StoreContext.Provider value={{ mainState, setMainState }}>
      {children}
    </StoreContext.Provider>
  );
}

const useStoreContext = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStoreContext must be used within a StoreContextProvider');
  }
  return context;
}

export { StoreContextProvider, useStoreContext };
