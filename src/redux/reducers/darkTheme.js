import actionTypes from '../constants/actionType';
const initState = false;

const themeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_THEME:
      localStorage.setItem('darkTheme', !state);
      return !state;
    case actionTypes.SET_THEME:
      state = payload.isDarkTheme;
      return state;
    default:
      return state;
  }
}

export default themeReducer;