import React from 'react';
import { Provider } from 'react-redux';
import './sass/app.css';
import 'babel-polyfill';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import store from './datamodel/store';
import CollectionItemListContainer from './containers/CollectionItemListContainer';
import CollectionItemDetailContainer from './containers/CollectionItemDetailContainer';


const App = () => (
    <Provider store={store}>
        <Router>
            <div className="app">
                <div className="header">
                    <h1 className="exhibition-list-title">Cooper Hewitt Typography Objects</h1>
                </div>
                <Switch>
                    <Route exact path="/" render={props => <CollectionItemListContainer {...props} />} />
                    <Route path="/:id" component={CollectionItemDetailContainer} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default App;
