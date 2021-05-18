import React from "react";

export const WebInterfaceContext = React.createContext();

const reducer = (value, action) => {
  switch (action.type) {
    case "basicInformation":
      return {
        ...value,
        basicInformation: action.value,
      };
    default:
      throw new Error();
  }
};

export const useWeb = () => React.useContext(WebInterfaceContext);

export default function WebInterface({
  basicInformation,
  categoryList,
  children,
}) {
  const [state, dispatch] = React.useReducer(reducer, {
    basicInformation,
    categoryList,
  });
  return (
    <WebInterfaceContext.Provider value={{ state, dispatch }}>
      {children}
    </WebInterfaceContext.Provider>
  );
}
