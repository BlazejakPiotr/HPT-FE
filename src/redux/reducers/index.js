import {
  GET_TOURNAMENTS,
  GET_TOURNAMENTS_LOADING,
  GET_TOURNAMENTS_ERROR,
  SET_SELECTED_TOURNAMENT,
} from "../actions";
import { initialState } from "../store";

const tournamentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOURNAMENTS:
      return {
        ...state,
        tournaments: {
          ...state.tournaments,
          list: action.payload,
        },
      };
    case GET_TOURNAMENTS_LOADING:
      return {
        ...state,
        tournaments: {
          ...state.tournaments,
          isLoading: action.payload,
        },
      };
    case GET_TOURNAMENTS_ERROR:
      return {
        ...state,
        tournaments: {
          ...state.tournaments,
          isError: action.payload,
        },
      };
    case SET_SELECTED_TOURNAMENT:
      return {
        ...state,
        tournaments: {
          ...state.tournaments,
          selected: action.payload,
        },
      };
    default:
      return state;
  }
};

export default tournamentReducer;
