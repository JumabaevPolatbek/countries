import { ActionsTheme} from "../actions/themeActions"
import { StateTheme } from "../types/countriesType";



export const initState:StateTheme = {
    dark: false,
}

export const themeChangeReducer = (state = initState, action:any) => {
    switch (action.type) {
        case ActionsTheme.CHANGE:
            return {...state,dark:action.payload}
        default:
            return state
    }
}