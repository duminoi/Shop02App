export const initialState = {
  isLoading: false,
  productList: [],
  details: {},
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  count: 0,
  toastContent: "idle",
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
    default:
      return state;
  }
};
