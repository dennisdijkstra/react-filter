import React, { Component } from 'react';
import './sass/app.css';
import 'babel-polyfill';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import ExhibitionList from './ExhibitionList';


class App extends Component {
    state = {
        exhibitionObjects: [],
    }

    async componentDidMount() {
        try {
            this.res = await fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=dbb5dbb3ac11def3ddd372de708e9893');
            const results = await this.res.json();
            this.setState({
                exhibitionObjects: results.exhibitions,
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { exhibitionObjects } = this.state;
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" render={props => <ExhibitionList {...props} exhibitionObjects={exhibitionObjects} />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
