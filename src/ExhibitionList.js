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
        this.filtered = [];
    }

    async componentDidMount() {
        try {
            this.res = await fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=491c2e66a84e1faf2e7e906ff6f24579&query=typography&year_acquired=gt1980&has_images=1&per_page=100');
            const results = await this.res.json();
            this.setState({
                exhibitionObjects: results.objects.filter(result => result.images[0]),
            });
        } catch (e) {
            console.log(e);
        }
    }

    getTypes = (items) => {
        this.types = [];

        items.forEach((object) => {
            if (!this.types.includes(object.type)) {
                this.types.push(object.type);
            }
        });
    }

    filterTitles = () => {
        const { exhibitionObjects, search } = this.state;
        this.filtered = exhibitionObjects.filter(object => object.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        this.getTypes(this.filtered);
    }

    updateSearchValue = (search) => {
        this.setState({
            search,
        });

        this.filterTitles();
    }

    render() {
        const { search } = this.state;
        this.filterTitles();

        return (
            <div>
                <div className="container">
                    <Filters updateSearchValue={this.updateSearchValue} search={search} types={this.types} />
                    <div className="exhibition-list-items content">
                        {this.filtered.map(exhibition => (
                            <Exhibition key={exhibition.id} exhibition={exhibition} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ExhibitionList;
