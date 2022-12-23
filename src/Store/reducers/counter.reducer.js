const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "HANDLE_INCREMENT") {
    return {
      ...state,
      count: action.payload
    };
  }
  if (action.type === "HANDLE_DECREMENT") {
    return {
      ...state,
      count: action.payload
    };
  }
  if (action.type === "HANDLE_RESET") {
    return {
      ...state,
      count: action.payload
    };
  }
  return state;
};

export default counterReducer;
