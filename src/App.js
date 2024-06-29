import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './pages/Homescreen';
import Navbar from './components/navigation/Navbar';
import Header from './components/Layout/Header';

import { navScroll } from './helper';
import Details from './pages/Details';
import Browse from './pages/Browse';
import BrowseByGenres from './pages/BrowseByGenres';
import Search from './pages/Search';

function App() {
  useEffect(() => {
    navScroll();
  }, [])
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Homescreen/>}></Route>
      <Route path='/details/:platform/:id' element={<Details/>}></Route>
      <Route path='/browse/:platform' element={<Browse/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/browsebygenre/:platform/:genreid' element={<BrowseByGenres/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
