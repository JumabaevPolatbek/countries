import { combineReducers } from "redux";
import { getApiCountriesReducer } from "./getApiCountries";
import { getCountrieReducer } from "./getCountrieID";

export const rootReducer = combineReducers({
    apiCountries: getApiCountriesReducer,
    getCountrie:getCountrieReducer
})