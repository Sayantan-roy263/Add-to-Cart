import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../ShareModule/Header/Header';
import Footer from '../ShareModule/Footer/Footer';
import Home from '../Component/Home/Home';
import Cart from '../Component/Cart/Cart';


export default function Rout() {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}
