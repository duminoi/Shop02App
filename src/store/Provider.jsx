import { createContext } from "react";
import PropTypes from "prop-types";
import { initialState, reducer } from "./reducer";
import { useReducerWithMiddleware } from "./hook";
import { middleware } from "./middleware";
//Component này sẽ chứa global state và các logic truyền dữ liệu xuống các component của toàn bộ dự án
export const ProviderContext = createContext();
export default function Provider({ children }) {
  //Tạo state ở đây và truyền xuống children
  const [state, dispatch] = useReducerWithMiddleware(
    reducer,
    initialState,
    middleware
  );
  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node,
};
