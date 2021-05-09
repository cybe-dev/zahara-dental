import React from "react";

export const WebInterfaceContext = React.createContext();

const reducer = (value, action) => {
  switch (action.type) {
    case "transparentFirst":
      return {
        ...value,
        transparentFirst: action.value,
      };
    default:
      throw new Error();
  }
};

export default function WebInterface({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    transparentFirst: false,
  });
  return (
    <WebInterfaceContext.Provider value={{ state, dispatch }}>
      {children}
    </WebInterfaceContext.Provider>
  );
}
