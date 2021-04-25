import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';

function App(props) {
    return (
        <>
        <Navbar />
        <ProductsContainer />
        </>
    )
}


export default App;
