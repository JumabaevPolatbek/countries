import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from '@mui/icons-material/People';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type Props = {
    population: number,
    region: string,
    capital:string
}

export default function CountrieInfo({population,region,capital}:Props) {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Население : " secondary={population} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SouthAmericaIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Регион : " secondary={region} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationOnIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Столица : " secondary={capital} />
      </ListItem>
    </List>
    )
}