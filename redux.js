const redux = require("redux");
const createStore = redux.createStore; // Pemanggilan fungsi store yang dipanggil di store

const initialState = {
  value: 1,
  age: 16,
};

// reducer
const routeReducer = (state = initialState, action) => {
  // Discpatch pertama
  if (action.type === "ADD_AGE") {
    return {
      ...state,
      age: state.age + 1,
    };
  }

  // Discpatch kedua
  if (action.type === "CHANGE_VALUE") {
    return {
      ...state,
      value: state.value + action.newValue,
    };
  }
  return state;
};

// store
const store = createStore(routeReducer);
console.log(store.getState(), "First");

// Subcription
store.subscribe(() => {
  console.log("Change Store : ", store.getState());
});

// Dispatching Action
store.dispatch({ type: "ADD_AGE" }); // Tyoe untuk menambahkan age
store.dispatch({ type: "CHANGE_VALUE", newValue: 14 }); // Type untuk menambahkan value
console.log(store.getState(), "Two And Three");
