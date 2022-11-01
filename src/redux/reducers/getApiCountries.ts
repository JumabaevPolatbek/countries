
// const getCountries = () => {
//     return fetch('https://restcountries.com/#api-endpoints-v2-all').then(response=>response.json()).then(json=>json)
// }

import { ActionCountries } from "../actions/countriesAction";
import { Countrie } from "../types/countriesType";

export const getApiCountriesReducer = (state:Countrie[] =[], action: any) => {
    switch (action.type) {
        case ActionCountries.FETCH:
            console.log(action.payload)
            return [...state, ...action.payload];
        default:
            return state
    }
}