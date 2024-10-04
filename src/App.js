import React from 'react'
import Pages from './mainpage/Pages';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './GlobalState';


function App() {
  return (
    <DataProvider>
    <BrowserRouter>
    <div className='App'>
     <Header/>
     <Pages/>
     </div>
     </BrowserRouter>
     </DataProvider>
  );
}

export default App;
