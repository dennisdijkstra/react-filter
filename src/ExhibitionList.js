import React, { Component } from 'react';
import Exhibition from './Exhibition';
import Filters from './Filters';


class ExhibitionList extends Component {
    state = {
        exhibitionObjects: [],
        search: '',
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

    updateList = (search) => {
        this.setState({
            search,
        });
        console.log(search);
    }

    render() {
        const { exhibitionObjects, search } = this.state;
        const filteredExhibitionObjects = exhibitionObjects.filter(exhibition => exhibition.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);

        return (
            <div>
                <div className="container">
                    <Filters updateList={this.updateList} search={search} />
                    <div className="exhibition-list-items content">
                        {filteredExhibitionObjects.map(exhibition => (
                            <Exhibition key={exhibition.id} exhibition={exhibition} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ExhibitionList;
