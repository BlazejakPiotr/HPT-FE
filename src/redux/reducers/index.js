import {
  GET_TOURNAMENTS,
  GET_TOURNAMENTS_LOADING,
  GET_TOURNAMENTS_ERROR,
  GET_TOURNAMENT,
  ADD_ROUND,
  REMOVE_ROUND,
  ADD_PLAYER,
} from "../actions";
import { initialState } from "../store";

const appReducer = (state = initialState, action) => {
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
    case GET_TOURNAMENT:
      return {
        ...state,
        tournaments: {
          ...state.tournaments,
          current: action.payload,
        },
      };

    case ADD_ROUND:
      return {
        ...state,
        tournaments: {
          ...state.tournaments,
          current: {
            ...state.tournaments.current,
            rounds: [...state.tournaments.current.rounds, action.payload],
          },
        },
      };

    case REMOVE_ROUND:
      return {
        ...state,
        tournaments: {
          ...state.tournaments,
          current: {
            ...state.tournaments.current,
            rounds: state.tournaments.current.rounds.filter(
              (item, index) => index !== action.payload
            ),
          },
        },
      };
    case ADD_PLAYER:
      return {
        ...state,

        tournaments: {
          ...state.tournaments,
          current: {
            ...state.tournaments.current,
            players: [...state.tournaments.current.players, action.payload],
          },
        },
      };

    default:
      return state;
  }
};

export default appReducer;
