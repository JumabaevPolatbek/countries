import { ActionsCountrie, ActionsCountrieID } from "../actions/countrieActions";
import { Countrie } from "../types/countriesType";

const defaultState = {
    countrie: {},
    loading:false
}

export const getCountrieReducer = (state=defaultState, action: any) => {
    const {type,payload}=action
    switch (type) {
        case ActionsCountrie.FETCH_COUNTRIE:
            return { ...state, loading: payload?true:false }
        case ActionsCountrie.SET_COUNTRIE:
            return {...state,loading:true,countrie:payload}
        default:
            return state
    }
}