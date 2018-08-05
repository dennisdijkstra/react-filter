import React, { Component } from 'react';
import Exhibition from './Exhibition';
import Filters from './Filters';


class ExhibitionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exhibitionObjects: [],
            filtered: [],
            types: [],
            search: '',
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    getTypes = () => {
        const { filtered } = this.state;
        const array = [];

        filtered.forEach((object) => {
            if (!array.includes(object.type)) {
                array.push(object.type);
            }
        });

        this.setState({
            types: array,
        });
    }

    filterTitles = (value = '') => {
        const { exhibitionObjects } = this.state;
        const searchInput = value.toLowerCase();
        const array = exhibitionObjects.filter(object => object.title.toLowerCase().indexOf(searchInput) !== -1);

        this.setState({
            filtered: array,
        });

        this.getTypes();
    }

    filterSelect = (value) => {
        const { exhibitionObjects } = this.state;
        const selectInput = value.toLowerCase();
        const array = exhibitionObjects.filter(object => object.type.toLowerCase() === selectInput);

        this.setState({
            filtered: array,
        });
    }

    updateSearchValue = (value) => {
        this.setState({
            search: value,
        }, this.filterTitles(value));
    }

    updateSelectValue = (value) => {
        this.filterSelect(value);
    }

    async fetchData() {
        try {
            this.res = await fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=491c2e66a84e1faf2e7e906ff6f24579&query=typography&year_acquired=gt1980&has_images=1&per_page=100');
            const results = await this.res.json();
            this.setState({
                exhibitionObjects: results.objects.filter(result => result.images[0]),
            });

            this.filterTitles();
            this.getTypes();
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { search, filtered, types } = this.state;

        return (
            <div>
                <div className="container">
                    <Filters updateSearchValue={this.updateSearchValue} updateSelectValue={this.updateSelectValue} search={search} types={types} />
                    <div className="exhibition-list-items content">
                        {filtered.map(exhibition => (
                            <Exhibition key={exhibition.id} exhibition={exhibition} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ExhibitionList;
