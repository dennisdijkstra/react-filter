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

        const { exhibitionObjects, search } = this.state;
        this.exhibitionObjects = exhibitionObjects;
        this.search = search;
    }

    async componentDidMount() {
        try {
            this.res = await fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=dbb5dbb3ac11def3ddd372de708e9893&query=typography&year_acquired=gt1980&has_images=1&per_page=200');
            const results = await this.res.json();
            this.setState({
                exhibitionObjects: results.objects.filter(result => result.images[0]),
            });
        } catch (e) {
            console.log(e);
        }
    }

    updateSearchValue = (search) => {
        this.setState({
            search,
        });
    }

    filterTitles = () => {
        const { exhibitionObjects, search } = this.state;

        return exhibitionObjects.filter(object => object.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }

    render() {
        const { search } = this.state;
        const filteredExhibitionObjects = this.filterTitles();

        return (
            <div>
                <div className="container">
                    <Filters updateSearchValue={this.updateSearchValue} search={search} />
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
