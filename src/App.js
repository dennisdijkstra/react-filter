import React from 'react';
import './sass/app.css';
import 'babel-polyfill';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import ExhibitionListContainer from './containers/ExhibitionListContainer';
import ExhibitionDetailContainer from './containers/ExhibitionDetailContainer';


const App = () => (
    <Router>
        <div className="app">
            <div className="header">
                <h1 className="exhibition-list-title">Cooper Hewitt Typography Objects</h1>
            </div>
            <Switch>
                <Route exact path="/" render={props => <ExhibitionListContainer {...props} />} />
                <Route path="/:id" component={ExhibitionDetailContainer} />
            </Switch>
        </div>
    </Router>
);

export default App;
