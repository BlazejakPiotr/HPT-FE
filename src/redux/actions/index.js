export const GET_TOURNAMENTS = "GET_TOURNAMENTS";
export const GET_TOURNAMENTS_LOADING = "GET_TOURNAMENTS_LOADING";
export const GET_TOURNAMENTS_ERROR = "GET_TOURNAMENTS_ERROR";

export const SET_SELECTED_TOURNAMENT = "SET_SELECTED_TOURNAMENT";

export const getTournamentList = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_TOURNAMENTS_LOADING,
      payload: true,
    });
    try {
      let res = await fetch("http://localhost:3001/tournaments/");
      if (res.ok) {
        let tournaments = await res.json();
        dispatch({
          type: GET_TOURNAMENTS,
          payload: tournaments,
        });
        dispatch({
          type: GET_TOURNAMENTS_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_TOURNAMENTS_ERROR,
          payload: true,
        });
        dispatch({
          type: GET_TOURNAMENTS_LOADING,
          payload: false,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_TOURNAMENTS_ERROR,
        payload: true,
      });
      dispatch({
        type: GET_TOURNAMENTS_LOADING,
        payload: false,
      });
    }
  };
};

export const setSelectedTournament = (tournament) => ({
  type: SET_SELECTED_TOURNAMENT,
  payload: tournament,
});
