
// const getCountries = () => {
//     return fetch('https://restcountries.com/#api-endpoints-v2-all').then(response=>response.json()).then(json=>json)
// }

import Countries from "../../components/Countries/Countries";
import { ActionCountries } from "../actions/countriesAction";
import { Countrie } from "../types/countriesType";

const defaultState = {
    countries: [],
    loadData:false
}

export const getApiCountriesReducer = (state=defaultState, action: any) => {
    switch (action.type) {
        case ActionCountries.FETCH:
            return { ...state, loadData: action.payload ? true : false }
        case ActionCountries.SET_FETCH:
            return { ...state, countries: action.payload, loadData: true };
        default:
            return state
    }
}