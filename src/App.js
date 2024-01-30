import React from 'react';
import './App.css';
import Main from './components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FiltredProducts from './components/filtredProducts/FiltredProducts';
import SingleProduct from './components/filtredProducts/SingleProduct';
import Login from './components/login/Login';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.user);
  const {authUser} = user;
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={authUser ? <Main></Main> : <Login></Login>}></Route>
        <Route path='/filteredProducts/:type' element={<FiltredProducts></FiltredProducts>}></Route>
        <Route path='/filteredProducts/:type/:id' element={<SingleProduct></SingleProduct>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
