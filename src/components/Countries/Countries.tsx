import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { selectCountries } from "../../redux/reducers/selectCountries"
import { Countrie } from "../../redux/types/countriesType"
import './countries.css'
type Props = {
    countrie:Countrie
}
export default function Countries({ countrie }: Props) {
    
    const dispatch = useDispatch();
    const countries = useSelector(selectCountries)
    
    return (
        <a className="countrie" href={countrie.name}>
            <div className="countrie-flag">
                <img src={countrie.flag} alt={countrie.name} />
            </div>
            <div className="countrie-info">
                <p>{ countrie.name}</p>
                <span>Population:  {countrie.population }</span>
                <span>Region: { countrie.region}</span>
                <span>Capital:  { countrie.capital}</span>
            </div>
        </a>
    )
}