import { useSelector } from "react-redux"
import { selectCountries } from "../../redux/reducers/selects"
import Countries from "./Countries";
import React from 'react'
import { useDispatch } from "react-redux";
import { ActionCountries } from "../../redux/actions/countriesAction";
import CircularProgress from "@mui/material/CircularProgress";


export default function CountriesLayout() {

    const stateCountries = useSelector(selectCountries);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch({
            type: ActionCountries.FETCH,
            // payload:false
        })
    }, [])
    console.log(stateCountries.loadData)
    return (
        
            stateCountries.loadData ?
            <div className="countries">
            {stateCountries.countries.map((countrie, index) => {
            return <Countries countrie={countrie} key={index}/>
        })}
        </div>:<CircularProgress/>
        
        
    )
}