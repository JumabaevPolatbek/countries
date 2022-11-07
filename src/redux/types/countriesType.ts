export type Countrie = {
    name: string,
    population: number,
    region: string,
    capital: string,
    flag: string,
    alpha3Code: string,
    borders: string[],
    subregion: string,
    nativeName: string,
    topLevelDomain: string,
    currencies: [
        {
            code: string,
            name: string,
            symbol:string
        }
    ],
    languages: [
        {
            name: string,
            nativeName:string
        }
    ]
}
export type StateTheme = {
    dark: boolean
}
export type GetCountrie = {
    countrie: Countrie,
    loading:boolean
}
export type GetCountriesApi = {
    countries: Countrie[],
    loadData:boolean
}
export type StateSagas = {
    apiCountries: GetCountriesApi,
    getCountrie: GetCountrie,
    changeTheme:StateTheme
}