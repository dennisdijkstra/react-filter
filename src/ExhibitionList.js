import React, { Component } from 'react';
import Exhibition from './Exhibition';
import Filters from './Filters';


class ExhibitionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exhibitionObjects: [],
            search: '',
        };

        this.types = [];
    }

    async componentDidMount() {
        try {
            this.res = await fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=dbb5dbb3ac11def3ddd372de708e9893&query=typography&year_acquired=gt1980&has_images=1&per_page=100');
            const results = await this.res.json();
            this.setState({
                exhibitionObjects: results.objects.filter(result => result.images[0]),
            });
        } catch (e) {
            console.log(e);
        }
    }

    getTypes = (items) => {
        items.map((object) => {
            if (!this.types.includes(object.type)) {
                this.types.push(object.type);
            }
            return null;
        });
    }

    filterTitles = () => {
        const { exhibitionObjects, search } = this.state;

        return exhibitionObjects.filter(object => object.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }

    updateSearchValue = (search) => {
        this.setState({
            search,
        });
    }

    render() {
        const { search } = this.state;
        const filteredExhibitionObjects = this.filterTitles();
        this.getTypes(filteredExhibitionObjects);

        return (
            <div>
                <div className="container">
                    <Filters updateSearchValue={this.updateSearchValue} search={search} types={this.types} />
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
