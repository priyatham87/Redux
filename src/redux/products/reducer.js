const initalState = {
  productData: [],
  error: false,
  loading: true,
};

export const productsReducer = (state = initalState, action) => {
  switch (action.type) {
    case "PRODUCTS_LOADING":
      return { ...state, loading: true };
    case "PRODUCTS_SUCCESS":
      return { ...state, productData: action.payload,loading:false,error:false };
    case "PRODUCTS_ERROR":
      return { ...state, error: true };
    default:
      return state;
  }
};
