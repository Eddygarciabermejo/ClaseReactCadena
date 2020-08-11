import React from 'react';
import { BrowserRouter, Router} from 'react-router-dom';
import Home from '../containers/Home.jsx'
import Login from '../containers/Login.jsx'

const App = () => (

    <BrowserRouter>

        <Router exact path="/" component={Home} />
        <Router exact path="/login" component={Login} />
    
    
    </BrowserRouter>

);

export default App