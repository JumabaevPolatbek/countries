import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components';
import SelectCountrie from './components/SelectCountrie/SelectCountrie';
import CountriesLayout from './components/Countries/CountriesLayout';
import { useSelector } from 'react-redux';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { selectTheme } from './redux/reducers/selects';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const themeSelect = useSelector(selectTheme);

  const darkTheme = createTheme({
    palette: {
      mode: themeSelect.dark?'dark':'light'
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <BrowserRouter>
      <Routes>
          <Route element={<Layout />} >
          <Route path='/' element={<CountriesLayout/>}/>
          <Route path='/:id' element={<SelectCountrie />} />
        </Route>
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
