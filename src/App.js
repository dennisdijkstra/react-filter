import React from 'react';
import { Provider } from 'react-redux';
import './css/app.css';
import '@babel/polyfill';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './datamodel/store';
import CollectionItemListContainer from './containers/CollectionItemListContainer';
import CollectionItemDetailContainer from './containers/CollectionItemDetailContainer';
import Header from './components/Header';
import Login from './components/Login';

const App = () => (
    <Provider store={store}>
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/" render={props => <CollectionItemListContainer {...props} />} />
                    <Route path="/item/:id" component={CollectionItemDetailContainer} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default App;
