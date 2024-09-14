import axios from "axios";
export const fetchProducts = (page) => {
  return async (dispatch) => {
    // const { apiUrl } = config;
    // console.log(apiUrl);
    try {
      dispatch({ type: "loading", payload: true });
      const response = await axios.get(
        `https://api-exercise-sopi.vercel.app/api/v1/products?limit=20&page=${page}
        `
      );
      if (response.data.status_code != "SUCCESS") {
        throw new Error();
      }
      const { data } = response.data;
      const { listProduct } = data;
      // console.log(data);
      dispatch({ type: "totalPages", payload: data.totalPage });
      dispatch({ type: "loading", payload: false });
      dispatch({ type: "products/get", payload: listProduct });
    } catch (e) {
      //   console.log(e);
    }
  };
};
