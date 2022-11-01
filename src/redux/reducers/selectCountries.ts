import { Countrie } from "../types/countriesType"

type State = {
    apiCountries:Countrie[]
}
export const selectCountries = (state: State) => state.apiCountries

export const selectCountrie = (state:Countrie)=>state