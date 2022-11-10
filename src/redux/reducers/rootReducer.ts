import { combineReducers } from "redux";
import { formSelectReducer } from "./formSelect";
import { getApiCountriesReducer } from "./getApiCountries";
import { getCountrieReducer } from "./getCountrieID";
import { searchReducer } from "./searchCountrie";
import { themeChangeReducer } from "./themeChange";

export const rootReducer = combineReducers({
    apiCountries: getApiCountriesReducer,
    getCountrie: getCountrieReducer,
    changeTheme:themeChangeReducer,
    regionSelect:formSelectReducer,
    search:searchReducer
})