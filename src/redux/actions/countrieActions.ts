export enum ActionsCountrie{
    FETCH_COUNTRIE = "FETCH_COUNTRIE"
}

export type FetchCountrieID = {
    type: ActionsCountrie.FETCH_COUNTRIE,
    payload:any
}

export type ActionsCountrieID = FetchCountrieID;