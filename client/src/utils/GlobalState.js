import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        cart: [action.payload, ...state.cart]
      }
    case 'set-display':
      return {
        ...state,
        displayItems: action.payload,
      }
    default:
      return state;
  }
}

const StoreProvider = ({...props}) => {
  const [state, dispatch] = useReducer(reducer , {
    //default state here
    cart: [],
    displayItems: null
  });
  return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };