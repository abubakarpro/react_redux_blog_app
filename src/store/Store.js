import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import AllReducers from "./reducers/RootReducer";

// const appState = localStorage.getItem("appState");

// const initialStore = appState !== null ? JSON.parse(appState) : {};

const store = createStore(AllReducers, {}, applyMiddleware(Thunk));

// store.subscribe(() => {
//   console.log(store.getState());
//   localStorage.setItem("appState", JSON.stringify(store.getState()));
// });

export default store;
