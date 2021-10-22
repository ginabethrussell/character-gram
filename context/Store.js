import { createContext, useContext, useReducer } from 'react';

const Store = createContext();

export function useStore() {
  return useContext(Store);
}

export function StoreProvider({ children, initialState, reducer }) {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={[globalState, dispatch]}>
      {children}
    </Store.Provider>
  );
}


