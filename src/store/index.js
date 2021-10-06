import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers";

//store
export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//dispatch
store.subscribe(() => {
  console.log(store.getState());
});
