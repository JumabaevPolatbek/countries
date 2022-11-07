import { Typography } from "@mui/material"
import CardMedia from "@mui/material/CardMedia"

type Props = {
    name: string,
    flag:string
}

export default function CountrieHeader({name,flag}:Props) {
    return (
        <>
        <CardMedia
                component="img"
                height="140"
                width="243"
                image={`${flag}`}
                alt={`${name}`}
              />
                <Typography variant="h5" component="div" textAlign="center" sx={{mt:2}}>
                  {name}
                </Typography>
        </>
    )
}