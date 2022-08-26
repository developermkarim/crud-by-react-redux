import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddBooks from '../features/books/Add-books';
import ShowBooks from '../features/books/Show-books';
import Navbar from '../layouts/Navbar';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Index = () => {
    return (
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='add-books' element={<AddBooks></AddBooks>}></Route>
            <Route path='show-books' element={<ShowBooks></ShowBooks>}></Route>
            <Route path='*' element={<Error></Error>}></Route>
        </Routes>
        </BrowserRouter>
    );
};

export default Index;