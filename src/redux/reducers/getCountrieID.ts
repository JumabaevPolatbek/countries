import { ActionsCountrie, ActionsCountrieID } from "../actions/countrieActions";

export const getCountrie = (data:any) => {
    return {
        type: ActionsCountrie.FETCH_COUNTRIE,
        payload:data
    }
}

export const getCountrieReducer = (state={}, action:ActionsCountrieID) => {
    switch (action.type) {
        case ActionsCountrie.FETCH_COUNTRIE:
            return state = action.payload;
        default:
            return state
    }
}