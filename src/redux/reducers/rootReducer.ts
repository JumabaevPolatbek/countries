import { combineReducers } from "redux";
import { getApiCountriesReducer } from "./getApiCountries";
import { getCountrieReducer } from "./getCountrieID";
import { themeChangeReducer } from "./themeChange";

export const rootReducer = combineReducers({
    apiCountries: getApiCountriesReducer,
    getCountrie: getCountrieReducer,
    changeTheme:themeChangeReducer
})