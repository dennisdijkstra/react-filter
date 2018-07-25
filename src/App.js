import React, { Component } from 'react';
import './sass/app.css';
import 'babel-polyfill';
import Exhibition from './Exhibition';


class App extends Component {
    state = {
        exhibitions: [],
    }

    async componentDidMount() {
        try {
            this.res = await fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=dbb5dbb3ac11def3ddd372de708e9893');
            const results = await this.res.json();
            this.setState({
                exhibitions: results.exhibitions,
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { exhibitions } = this.state;
        return (
            <div className="App">
                {exhibitions.map(exhibition => <Exhibition key={exhibition.id} exhibition={exhibition} />)}
            </div>
        );
    }
}

export default App;
