import React ,{Component} from 'react';
import HomePage from './front/HomePage.js'
import UserInput from './front/UserInput.js'
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

                </Switch>
            </div>

        </Router>

    )
}
export default App;
