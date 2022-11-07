import { Countrie } from "../../redux/types/countriesType"
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import CountrieHeader from "./CountrieHeader";
import CountrieInfo from "./CountrieInfo";
import React from 'react'
import { ActionCountries } from "../../redux/actions/countriesAction";
import './countries.css'
type Props = {
    countrie:Countrie
}
export default function Countries({ countrie }: Props) {
    return (
      <Link className="countrie" href={countrie.alpha3Code.toLowerCase()} underline="none">
        <Paper >
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
              <CountrieHeader name={countrie.name} flag={countrie.flag} />
              <CountrieInfo region={countrie.subregion } capital={countrie.capital} population={countrie.population} />
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
        </Paper>
        </Link>
    )
}