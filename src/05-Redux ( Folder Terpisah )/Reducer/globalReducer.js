import ActionType from "./globalActionType"; // Global Action

// State
const globalState = {
  totalOrder: 0,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  // Handle Plus
  if (action.type === ActionType.PLUS_HANDLE) {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }
  // Handle Minus
  if (action.type === ActionType.MINUS_HANDLE) {
    let batas = 0;
    if (state.totalOrder > 0) {
      batas = state.totalOrder - 1;
    }
    return {
      ...state,
      totalOrder: batas,
    };
  }
  return state;
};

export default rootReducer;
