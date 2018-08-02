import React, { Component } from 'react';
import Exhibition from './Exhibition';
import Filters from './Filters';


class ExhibitionList extends Component {
    state = {
        exhibitionObjects: [],
    }

    async componentDidMount() {
        try {
            this.res = await fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=dbb5dbb3ac11def3ddd372de708e9893&medium=digital&has_images=1&per_page=100');
            const results = await this.res.json();
            this.setState({
                exhibitionObjects: results.objects.filter(result => result.images[0]),
            });
        } catch (e) {
            console.log(e);
        }
    }

    updateList = () => {
        console.log('Update list items');
    }

    render() {
        const { exhibitionObjects } = this.state;

        return (
            <div>
                <div className="header">
                    <h1 className="exhibition-list-title">Cooper Hewitt Exhibitions</h1>
                </div>
                <div className="container">
                    <Filters updateList={this.updateList} />
                    <div className="exhibition-list-items">
                        {exhibitionObjects.map(exhibition => (
                            <Exhibition key={exhibition.id} exhibition={exhibition} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ExhibitionList;
