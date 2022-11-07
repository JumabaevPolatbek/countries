import { CircularProgress } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { border } from "@mui/system";
import { Countrie } from "../../redux/types/countriesType";
import BordersCountrie from "./BorderCountrie";


export default function CountrieInfo({ name, population, capital, region, topLevelDomain, nativeName, borders, currencies,languages }: Countrie) {
    return (
        <div className="content">
        <CardContent className="countries-content">
            <Typography  variant="h3" color="text.primary" gutterBottom>
                {name}
            </Typography>
            <Typography variant="h5" component="div" sx={{display:"flex",alignItems:"center"}}>
                <Typography variant="h5" >
                    Название:
                </Typography>
                <Typography variant="body1" sx={{ml:2,fontSize:20}}>
                    {nativeName}
                </Typography>
            </Typography>
            <Typography variant="h5" component="div" sx={{display:"flex",alignItems:"center",mt:1}}>
                <Typography variant="h5" >
                    Население:
                </Typography>
                <Typography variant="body1" sx={{ml:2,fontSize:20}}>
                    {population}
                </Typography>
            </Typography>
            <Typography variant="h5" component="div" sx={{display:"flex",alignItems:"center",mt:1}}>
                <Typography variant="h5" >
                    Регион:
                </Typography>
                <Typography variant="body1" sx={{ml:2,fontSize:20}}>
                    {region}
                </Typography>
            </Typography>
            <Typography variant="h5" component="div" sx={{display:"flex",alignItems:"center",mt:1}}>
                <Typography variant="h5" >
                    Столица:
                </Typography>
                <Typography variant="body1" sx={{ml:2,fontSize:20}}>
                    {capital}
                </Typography>
            </Typography>
            <Typography variant="h5" component="div" sx={{display:"flex",alignItems:"center",mt:1}}>
                <Typography variant="h5" >
                    Пограничные страны:
                </Typography>
                <Typography variant="body1" sx={{ml:2,fontSize:20}}>
                        {borders?borders.map((countrie, index) => {
                            return <BordersCountrie border={countrie} key={index}/>
                        }):'None'}
                </Typography>
            </Typography>
            </CardContent>
            <CardContent className="countries-content">
                <Typography component="div" sx={{display:"flex",alignItems:"center"}}>
                    <Typography variant="h5">
                        Домен верхнего уровня:
                    </Typography>
                    <Typography variant="body1" sx={{fontSize:18,ml:2}}>
                        {topLevelDomain}
                    </Typography>
                    </Typography>
                <Typography component="div" sx={{display:"flex",alignItems:"center"}}>
                    <Typography variant="h5">
                        Валюты:
                    </Typography>
                    <Typography variant="body1" sx={{fontSize:18,ml:2}}>
                        {currencies[0].name}
                    </Typography>
                    </Typography>
                <Typography component="div" sx={{display:"flex",alignItems:"center"}}>
                    <Typography variant="h5">
                        Язык:
                    </Typography>
                    <Typography variant="body1" sx={{fontSize:18,ml:2}}>
                        {languages[0].name}
                    </Typography>
                    </Typography>
            </CardContent>
        </div>
    )
}