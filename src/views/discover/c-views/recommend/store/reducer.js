import * as actionTypes from "./constants";

const defaultState = {
  topBanner: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return { ...state, topBanner: [] };
    default:
      return state;
  }
}

export default reducer;
