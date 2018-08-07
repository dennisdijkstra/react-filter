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
            select: 'all',
            fetching: false,
        };
    }

    componentDidMount() {
        this.setState({
            fetching: true,
        });
        this.fetchData();
    }

    setTypes = (data) => {
        const array = [];

        data.forEach((object) => {
            if (!array.includes(object.type)) {
                array.push(object.type);
            }
        });

        this.setState({
            types: array,
        });
    }

    initialFilter = () => {
        const { search, select } = this.state;
        const searchInput = search.toLowerCase();
        const selectInput = select.toLowerCase();

        this.filter(searchInput, selectInput);
    }

    filter = (search, select) => {
        const { exhibitionObjects } = this.state;
        const searchFiltered = exhibitionObjects.filter(object => object.title.toLowerCase().indexOf(search) !== -1);
        const searchAndSelectFiltered = select === 'all' ? searchFiltered : searchFiltered.filter(object => object.type.toLowerCase() === select);

        this.setState({
            filtered: searchAndSelectFiltered,
        }, this.setTypes(searchAndSelectFiltered));
    }

    updateStateValues = (search, select) => {
        this.setState({
            search,
            select,
        }, this.filter(search, select));
    }

    async fetchData() {
        try {
            this.res = await fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=491c2e66a84e1faf2e7e906ff6f24579&query=typography&year_acquired=gt1980&has_images=1&per_page=100');
            const results = await this.res.json();
            this.setState({
                exhibitionObjects: results.objects.filter(result => result.images[0]),
                fetching: false,
            });

            await this.initialFilter();
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const {
            search,
            select,
            filtered,
            types,
            fetching,
        } = this.state;

        return (
            <div className="container">
                <Filters updateStateValues={this.updateStateValues} search={search} select={select} types={types} />
                <div className="exhibition-list-items content">
                    { fetching ? (
                        <div className="spinner">
                            <div className="bounce1" />
                            <div className="bounce2" />
                            <div className="bounce3" />
                        </div>
                    ) : (null) }
                    {filtered.map(exhibition => (
                        <Exhibition key={exhibition.id} exhibition={exhibition} />
                    ))}
                </div>
            </div>
        );
    }
}

export default ExhibitionList;
