import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Switch } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/reducers/selects';
import { useDispatch } from 'react-redux';
import {  changeTheme } from '../../redux/actions/themeActions';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function Header() {

    const dispatch = useDispatch();
    const themeSelect = useSelector(selectTheme);

  return (
    <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Switch {...label} onChange={(e) => {
                        dispatch(changeTheme(e.currentTarget.checked))} } />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {themeSelect.dark===true?'Свелтый':'Темный'}
                        </Typography>
                </Toolbar>
            </AppBar>
    </Box>
  );
}
