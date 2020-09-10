import React, { createContext, useContext, useReducer } from "react";

type StateProviderProps = {
  reducer: any;
  initialState: {};
};
// @ts-ignore
export const StateContext = createContext();

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  initialState,
  children,
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
