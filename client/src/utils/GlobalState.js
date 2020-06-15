import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      state.cart = action.payload;
      return {
        ...state
      }
    default:
      return state;
  }
}

const StoreProvider = ({...props}) => {
  const [state, dispatch] = useReducer(reducer , {
    //default state here
    cart: null
  });
  return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };