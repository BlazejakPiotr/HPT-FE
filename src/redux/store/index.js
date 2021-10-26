import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import tournamentReducer from "../reducers";
import thunk from "redux-thunk";

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  tournaments: {
    list: [],
    isLoading: false,
    isError: false,
  },
};

const configureStore = createStore(
  tournamentReducer,
  initialState,
  composeEnchancers(applyMiddleware(thunk))
);

export default configureStore;
