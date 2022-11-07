import { Countrie } from "../types/countriesType";

export enum ActionCountries{
    FETCH = "FETCH",
    SET_FETCH="SET_FETCH"
}

type FetchApi = {
    type: ActionCountries.FETCH
}
type SetApi = {
    type: ActionCountries.SET_FETCH,
    payload:Countrie
}

export type ActionsCountries = FetchApi | SetApi;

export const fetchApi = () => {
    return {
        type: ActionCountries.FETCH,
    }
}

export const setFetchApi = (data:Countrie) => {
    return {
        type: ActionCountries.SET_FETCH,
        payload:data
    }
}