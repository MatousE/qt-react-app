import React ,{Component} from 'react';
import HomePage from './front/HomePage.js'
import UserInput from './front/UserInput.js'
import View from './front/View.js';
import Contact from './front/Contact.js'
import GenISO from "./front/GenISO";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

// Function to encapsulate the total website
function App() {
    return (
        // Router showing what component to load based on the web path
        <Router>
            <div className="App">
                <Switch>
                    <Route path={"/"} exact component={HomePage}/>
                    <Route path={"/UserInput"} component={UserInput}/>
                    <Route path={"/View"} component={View}/>
                    <Route path={"/Contact"} component={Contact}/>
                    <Route path={"/ISO"} component={GenISO}/>
                </Switch>
            </div>

        </Router>

    )
}
export default App;
