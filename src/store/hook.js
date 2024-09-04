// export const useSomething = () => {
//   const [value] = useState("ahihi");
//   return value;
// };
import { useContext, useReducer } from "react";
import { ProviderContext } from "./Provider";
export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};

export const useSelector = (callback) => {
  if (typeof callback !== "function") {
    throw new Error("Selector phải là function");
  }
  const { state } = useContext(ProviderContext);
  return callback(state);
};

export const useReducerWithMiddleware = (reducer, initialState, middleware) => {
  //middleware là 1 function
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchWithMiddleware = (action) => {
    const store = {
      getState: () => state,
      dispatch,
    };
    if (typeof middleware === "function") {
      const middlewareFn = middleware(store);
      if (typeof middlewareFn !== "function") {
        throw new Error("Middleware sai cấu trúc");
      }
      middlewareFn(action);
    }

    dispatch(action);
  };
  return [state, dispatchWithMiddleware];
};
