import React from 'react';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/molecules/Header';
import Login from './routes/login';
import Collection from './routes/collection';
import CollectionItem from './routes/collectionItem';
import store from './store';
import s from './App.css';

const App = () => (
    <Provider store={store}>
        <Router>
            <div className={s.app}>
                <Header />
                <Switch>
                    <Route exact path="/" render={props => <Collection {...props} />} />
                    <Route path="/item/:id" component={CollectionItem} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default App;
