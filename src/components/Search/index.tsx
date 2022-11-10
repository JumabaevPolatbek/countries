import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector,useDispatch } from "react-redux";
import { ActionSearch } from "../../redux/reducers/searchCountrie";
import { searchCountrie } from "../../redux/reducers/selects";


export default function Search(){

    const searchValue=useSelector(searchCountrie);
    const dispatch = useDispatch()
    return(
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic"
       label="Search "
        variant="outlined" 
        color='secondary'
        onChange={(e)=>e.currentTarget.textContent!==null?dispatch({
            type:ActionSearch.SEARCH,
            payload:e.currentTarget.textContent
        }):''}
        />
    </Box>
    )
}

function useDistpatch() {
    throw new Error("Function not implemented.");
}
