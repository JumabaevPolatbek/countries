import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {  getRegion } from "../../redux/actions/formSelectActions";
import { selectRegion } from "../../redux/reducers/selects";



export default function FormSelect(){
    const regionState = ['All','Asia','Europe','Americas','Oceania','Polar','Africa'];
    const selectedRegion = useSelector(selectRegion);
    const dispatch=useDispatch();
    return(
        <Box sx={{ minWidth: 120,color:"inherit"}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" color="secondary">Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedRegion.region}
            label="Region"
            color="secondary"
            onChange={(e)=>dispatch(getRegion(e.target.value))}
          >
            {regionState.map((regionValue,index)=>{
                return <MenuItem value={regionValue} key={index}>{regionValue}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Box>
    )
}