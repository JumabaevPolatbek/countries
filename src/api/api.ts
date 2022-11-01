const url = 'https://restcountries.com/v2/all';
async function getCountriesApi() {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}
// function getCountriesApi() {
//     const json = fetch(url).then(res => res.json());
//     console.log(json)
//     return json
// }
export default getCountriesApi