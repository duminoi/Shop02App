import axios from "axios";
import config from "../../../config.js";
export const fetchProducts = () => {
  return async (dispatch) => {
    const { apiUrl } = config;
    // console.log(apiUrl);
    try {
      dispatch({ type: "loading", payload: true });
      const response = await axios.get(
        `https://api-exercise-sopi.vercel.app/api/v1/products`
      );
      if (response.data.status_code != "SUCCESS") {
        throw new Error();
      }
      const { data } = response.data;
      const { listProduct } = data;
      //   console.log(response);
      //   console.log(listProduct);
      dispatch({ type: "loading", payload: false });
      dispatch({ type: "products/get", payload: listProduct });
    } catch (e) {
      //   console.log(e);
    }
  };
};
