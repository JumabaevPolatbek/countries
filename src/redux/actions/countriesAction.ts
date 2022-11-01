export enum ActionCountries{
    FETCH = "FETCH",
    SET_FETCH="SET_FETCH"
}

type FetchApi = {
    type: ActionCountries.FETCH
    payload:any
}
type SetFetchApi = {
    type: ActionCountries.SET_FETCH,
    payload:string
}

export type ActionsCountries = FetchApi | SetFetchApi;

export const fetchApi = (data:any) => {
    return {
        type: ActionCountries.FETCH,
        payload:data
    }
}

export const setFetchApi = (data:string) => {
    return {
        type: ActionCountries.SET_FETCH,
        payload:data
    }
}