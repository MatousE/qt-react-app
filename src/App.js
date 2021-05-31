import React ,{Component} from 'react';
import HomePage from './front/HomePage.js'
import UserInput from './front/UserInput.js'
import View from './front/View.js';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path={"/"} exact component={HomePage}/>
                    <Route path={"/UserInput"} component={UserInput}/>
                    <Route path={"/View"} component={View}/>
                </Switch>
            </div>

        </Router>

    )
}
export default App;
