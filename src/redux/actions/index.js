export const GET_TOURNAMENTS = "GET_TOURNAMENTS";
export const GET_TOURNAMENTS_LOADING = "GET_TOURNAMENTS_LOADING";
export const GET_TOURNAMENTS_ERROR = "GET_TOURNAMENTS_ERROR";

export const GET_TOURNAMENT = "GET_TOURNAMENT";

export const ADD_ROUND = "ADD_ROUND";
export const REMOVE_ROUND = "REMOVE_ROUND";

export const ADD_PLAYER = "ADD_PLAYER";

const apiUrl = "http://localhost:3001/tournaments/";

export const getTournamentList = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_TOURNAMENTS_LOADING,
      payload: true,
    });
    try {
      let res = await fetch(apiUrl);
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
export const getTournament = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_TOURNAMENTS_LOADING,
      payload: true,
    });
    try {
      let res = await fetch(apiUrl + id);
      if (res.ok) {
        let tournament = await res.json();

        console.log(tournament);
        dispatch({
          type: GET_TOURNAMENT,
          payload: tournament,
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
export const saveTournament = (id, tournament) => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_TOURNAMENTS_LOADING,
      payload: true,
    });
    try {
      let res = await fetch(apiUrl + id, {
        method: "PUT",
        body: JSON.stringify(tournament),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        alert("saved");
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

export const addRound = (round) => ({
  type: ADD_ROUND,
  payload: round,
});

export const removeRound = (index) => ({
  type: REMOVE_ROUND,
  payload: index,
});

export const addPlayer = (player) => ({
  type: ADD_PLAYER,
  payload: player,
});
