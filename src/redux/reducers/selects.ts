import {  StateSagas } from "../types/countriesType"


export const selectCountries = (state: StateSagas) => state.apiCountries

export const selectCountrie = (state: StateSagas) => state.getCountrie

export const selectTheme= (state:StateSagas)=>state.changeTheme