import React from 'react';
import { useSelector } from 'react-redux';
import Countries from './components/Countries/Countries';
import { selectCountries } from './redux/reducers/selectCountries';



function App() {
  const state = useSelector(selectCountries);
  
  return (
    <div className="App">
      <header>
        <button>Светлый</button>
      </header>
      <main>
        <div className='main-container'>
          <div>
            <input type="search" placeholder='Искать'/>
          </div>
          <div>
            <select name="filter" id="" >
                <option value="filter">Филтьр</option>
            </select>
          </div>
        </div>
        <div className='countries'>
          {state.map((countrie, index) => {
              return <Countries countrie={countrie} key={index}/>
            })}
        </div>
      </main>
    </div>
  );
}

export default App;
