import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action) {
    default:
      return state;
  }
}

const StoreProvider = ({...props}) => {
  const [state, dispatch] = useReducer(reducer , {
    //default state here
  });
  return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };