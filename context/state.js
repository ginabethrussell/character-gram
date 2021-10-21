import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const initialState = {
  profiles: [],
  names: [],
  films: [],
  species: [],
  starships: [],
  vehicles: [],
}

export function AppWrapper({ children }) {
  const [state, setState] = useState(initialState);
  let sharedState = {
    state,
    setState
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
