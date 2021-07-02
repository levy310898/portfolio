import actionTypes from '../constants/actionType';

export const changeTheme = () => {
  return{
    type: actionTypes.CHANGE_THEME
  }
}

export const setTheme = (isDarkTheme) => {
  return {
      type: actionTypes.SET_THEME,
        payload: { isDarkTheme }
  }
}