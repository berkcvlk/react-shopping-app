import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';

function App(props) {
    return (
        <Navbar />
    )
}


export default App;
