const initialState = {
  products: []
};

const countriesReducer = (state = initialState, action) => {
  if (action.type === "FETCH_COUNTRIES") {
    return {
      ...state,
      products: [...action.payload]
    };
  }
  return state;
};

export default countriesReducer;
