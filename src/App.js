import React from 'react';
import './sass/app.css';
import 'babel-polyfill';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import ExhibitionList from './ExhibitionList';
import ExhibitionDetail from './ExhibitionDetail';


const App = () => (
    <Router>
        <div className="app">
            <div className="header">
                <h1 className="exhibition-list-title">Cooper Hewitt Typography Objects</h1>
            </div>
            <Switch>
                <Route exact path="/" render={props => <ExhibitionList {...props} />} />
                <Route path="/:id" component={ExhibitionDetail} />
            </Switch>
        </div>
    </Router>
);

export default App;
