import axios from "axios";
import config from "../../../config.js";
export const fetchProducts = () => {
  return async (dispatch) => {
    const { apiUrl } = config;
    // console.log(apiUrl);
    try {
      dispatch({ type: "loading", payload: true });
      const response = await axios.get(`${apiUrl}/products`);
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
