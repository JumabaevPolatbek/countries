import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams ,Link} from "react-router-dom"
import {ActionsCountrie} from '../../redux/actions/countrieActions'
import { useSelector } from "react-redux";
import { selectCountrie } from "../../redux/reducers/selects";
import './selectCountrie.css'
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from "@mui/material/Card";

import { CardMedia, CircularProgress } from "@mui/material";
import BordersCountrie from "./BorderCountrie";
import CountrieInfo from "./SelectCountrieInfo";

export default function SelectCountrie() {
    const param = useParams();
    const dispatch = useDispatch();
    const codeAlpha: string | undefined = param.id;
    
    
    useEffect(() => {
        dispatch({
            type: ActionsCountrie.FETCH_COUNTRIE,
            page:codeAlpha
        })
    }, [])
    const countrie = useSelector(selectCountrie);
    console.log(countrie)
    // if (countrie!==undefined) {
    //     return (
    //         <div className="container">
    //             <div className="select-countrie">
    //                 <Link to='/' className="btn-back">
    //                     <Button variant="outlined">
    //                     <ArrowBackIcon/>
    //                     </Button>
    //                 </Link>
    //                 <Card sx={{ minWidth: 200 }} className="countrie-info">
    //                     <CardMedia
    //                         component="img"
    //                         height="200"
    //                         image={`${countrie.flag}`}
    //                         alt={countrie.name}
    //                         sx={{width:300,height:200}}
    //                     />
    //                     <CountrieInfo {...countrie} />
    //                 </Card>
    //             </div>
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div>
    //             <CircularProgress/>
    //         </div>
    //     )
    // }
    // if (Object.keys(countrie)) {
    //     return (
    //                 <div className="container">
    //                     <div className="select-countrie">
    //                         <Link to='/' className="btn-back">
    //                             <Button variant="outlined">
    //                             <ArrowBackIcon/>
    //                             </Button>
    //                         </Link>
    //                         <Card sx={{ minWidth: 200 }} className="countrie-info">
    //                             <CardMedia
    //                                 component="img"
    //                                 height="200"
    //                                 image={`${countrie.flag}`}
    //                                 alt={countrie.name}
    //                                 sx={{width:300,height:200}}
    //                             />
    //                             <CountrieInfo {...countrie} />
    //                         </Card>
    //                     </div>
    //                 </div>
    //             )
    // } else {
    //     return <CircularProgress/>
    // }
    return (
        
            countrie.loading ?
             <div className="container">
                        <div className="select-countrie">
                            <Link to='/' className="btn-back">
                                <Button variant="outlined">
                              <ArrowBackIcon/>
                                </Button>
                            </Link>
                           <Card sx={{ minWidth: 200 }} className="countrie-info">
                                <CardMedia
                                   component="img"
                                  height="200"
                                   image={`${countrie.countrie.flag}`}
                                 alt={countrie.countrie.name}
                                   sx={{width:300,height:200}}
                               />
                                <CountrieInfo {...countrie.countrie} />
                             </Card>
                        </div>
            </div>
            :
            <CircularProgress />
    )
}