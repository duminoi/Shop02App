import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

export const initialState = {
  isLoading: false,
  productList: [],
  details: {},
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  count: 0,
  toastContent: "idle",
  totalPrice: 0,
  totalPages: 0,
  page: 1,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: action.payload };
    case "products/get":
      return { ...state, productList: action.payload };
    case "details/get":
      return { ...state, details: action.payload };
    case "cart/add":
      return { ...state, cart: [...state.cart, action.payload] };
    case "cart/update":
      return { ...state, cart: action.payload };
    case "count/plus":
      return { ...state, count: state.count + 1 };
    case "count/minus":
      return { ...state, count: state.count - 1 };
    case "toast":
      return { ...state, toastContent: action.payload };
    case "totalPrice":
      return { ...state, totalPrice: state.totalPrice + action.payload };
    case "totalPages":
      return { ...state, totalPages: action.payload };
    case "page":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
