import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Home/Header';

function Layout() {
  
  
  return (
    // <div className="App">
    //   <header>
    //     <button>Светлый</button>
    //   </header>
    //   <main>
    //     <div className='main-container'>
    //       <div>
    //         <input type="search" placeholder='Искать'/>
    //       </div>
    //       <div>
    //         <select name="filter" id="" >
    //             <option value="filter">Филтьр</option>
    //         </select>
    //       </div>
    //     </div>
    //     <div className='countries'>
    //       {state.map((countrie, index) => {
    //           return <Countries countrie={countrie} key={index}/>
    //         })}
    //     </div>
    //   </main>
    // </div>
    <> 
        <Header/>
        <Outlet />
      </>
  );
}

export default Layout;
