import {  StateSagas } from "../types/countriesType"


export const selectCountries = (state: StateSagas) => state.apiCountries

export const selectCountrie = (state: StateSagas) => state.getCountrie

export const selectTheme= (state:StateSagas)=>state.changeTheme

export const selectRegion=(state:StateSagas)=>state.regionSelect

export const searchCountrie=(state:StateSagas)=>state.search