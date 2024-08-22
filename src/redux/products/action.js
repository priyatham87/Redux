import axios from "axios";

export const productDetails = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "PRODUCTS_LOADING" });
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        dispatch({ type: "PRODUCTS_SUCCESS", payload: response.data });
      }
    } catch (err) {
      dispatch({ type: "PRODUCTS_ERROR" });
      console.log(err);
    }
  };
};
