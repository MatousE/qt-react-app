import React ,{Component} from 'react';
import HomePage from './front/HomePage.js'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Route path={"/"} component={HomePage}/>

        </Router>

    )
}
export default App;
