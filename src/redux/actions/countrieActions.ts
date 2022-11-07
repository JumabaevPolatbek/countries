import { Countrie } from "../types/countriesType";

export enum ActionsCountrie{
    FETCH_COUNTRIE = "FETCH_COUNTRIE",
    SET_COUNTRIE="SET_COUNTRIE"
}

export type FetchCountrieID = {
    type: ActionsCountrie.FETCH_COUNTRIE
}
export type SetCountrie = {
    type: ActionsCountrie.SET_COUNTRIE,
    payload:Countrie
}
export type ActionsCountrieID = FetchCountrieID|SetCountrie;


export const getCountrie = (payload:Countrie) => {
    return {
        type: ActionsCountrie.FETCH_COUNTRIE,
        payload
    }
}