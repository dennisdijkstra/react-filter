import React, { Component } from 'react';
import './sass/app.css';
import 'babel-polyfill';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import ExhibitionList from './ExhibitionList';
import ExhibitionDetail from './ExhibitionDetail';


class App extends Component {
    state = {
        exhibitionObjects: [],
    }

    async componentDidMount() {
        try {
            this.res = await fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=dbb5dbb3ac11def3ddd372de708e9893&medium=photography&page=1&per_page=100');
            const results = await this.res.json();
            console.log(results.objects);
            this.setState({
                exhibitionObjects: results.objects,
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
                        <Route path="/:id" component={ExhibitionDetail} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
