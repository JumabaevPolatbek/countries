import { ActionSearch } from "../reducers/searchCountrie"



export const search=(text:string)=>{
    return {
        type:ActionSearch.SEARCH,
        payload:text
    }
}