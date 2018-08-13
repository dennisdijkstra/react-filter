import React, { Component } from 'react';
import CollectionItemList from '../components/CollectionItemList';
import Filters from '../components/Filters';


class ExhibitionListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collectionItems: [],
            filtered: [],
            types: [],
            search: '',
            select: 'all',
            fetching: false,
            initialLoad: true,
        };

        this.results = {};
        this.page = 1;
    }

    componentDidMount() {
        this.setState({
            fetching: true,
        });
        this.fetchData();
    }

    setTypes = (data) => {
        const array = [];

        data.forEach((item) => {
            if (!array.includes(item.type)) {
                array.push(item.type);
            }
        });

        this.setState({
            types: array,
        });
    }

    testFunction = () => 'Testing with Jest and Enzyme';

    initialFilter = () => {
        const { search, select } = this.state;
        const searchInput = search.toLowerCase();
        const selectInput = select.toLowerCase();

        this.filter(searchInput, selectInput);
    }

    filter = (search, select) => {
        const { collectionItems } = this.state;
        const searchFiltered = collectionItems.filter(item => item.title.toLowerCase().indexOf(search) !== -1);
        const searchAndSelectFiltered = select === 'all' ? searchFiltered : searchFiltered.filter(item => item.type.toLowerCase() === select);

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

    loadMoreItems = () => {
        this.page = this.page + 1;
        this.fetchData();
    }

    handleDataLoad = (results) => {
        const { initialLoad } = this.state;

        if (initialLoad) {
            this.setState({
                collectionItems: results.objects.filter(result => result.images[0]),
                fetching: false,
                initialLoad: false,
            });
        } else {
            this.setState((prevState) => {
                console.log(prevState);

                return { collectionItems: [...prevState.collectionItems, ...results.objects] };
            });
        }
    }

    async fetchData() {
        try {
            this.res = await fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=491c2e66a84e1faf2e7e906ff6f24579&query=typography&year_acquired=gt1980&has_images=1&per_page=30&page=${this.page}`);
            this.results = await this.res.json();

            this.handleDataLoad(this.results);
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
                <CollectionItemList fetching={fetching} filtered={filtered} loadMoreItems={this.loadMoreItems} />
            </div>
        );
    }
}

export default ExhibitionListContainer;
