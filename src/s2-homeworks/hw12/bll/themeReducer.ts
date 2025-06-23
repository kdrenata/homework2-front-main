import {restoreState} from "../../hw06/localStorage/localStorage";

const initState = {
    themeId: restoreState('App-Theme-Id', 1),
}
type Actions = changeThemeIdType

type changeThemeIdType = {
    type: 'SET_THEME_ID',
    themeId: number,
}

type ThemeStateType = typeof initState

export const themeReducer = (state = initState, action: Actions): ThemeStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return { ...state, themeId: action.themeId }
        }
        default:
            return state
    }
}

export const changeThemeId = (themeId: number): changeThemeIdType => ({ type: 'SET_THEME_ID', themeId }) // fix any

