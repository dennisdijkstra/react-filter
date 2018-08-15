import React, { Component } from 'react';
import store from '../datamodel/store';
import CollectionItemList from '../components/CollectionItemList';
import Filters from '../components/Filters';


class ExhibitionListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allCollectionItems: [],
            filteredItems: [],
            fetching: false,
            initialLoad: true,
            selectCategories: [],
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

    setSelectCategories = (data) => {
        const categories = [];

        data.forEach((item) => {
            if (!categories.filter(categorie => (categorie.type === item.type)).length) {
                categories.push({ id: Math.random().toString(36).substr(2, 7), type: item.type });
            }
        });

        this.setState({
            selectCategories: categories,
        });
    }

    testFunction = () => 'Testing with Jest and Enzyme';

    initialFilter = () => {
        const searchInput = store.getState().search.toLowerCase();
        const selectInput = store.getState().select.toLowerCase();

        this.filter(searchInput, selectInput);
    }

    filter = (search, select) => {
        const { allCollectionItems } = this.state;
        const searchFiltered = allCollectionItems.filter(item => item.title.toLowerCase().indexOf(search) !== -1);
        const searchAndSelectFiltered = select === 'all' ? searchFiltered : searchFiltered.filter(item => item.type.toLowerCase() === select);

        this.setState({
            filteredItems: searchAndSelectFiltered,
        }, this.setSelectCategories(searchAndSelectFiltered));
    }

    loadMoreItems = () => {
        this.page = this.page + 1;
        this.fetchData();
    }

    handleDataLoad = (results) => {
        const { initialLoad } = this.state;

        if (initialLoad) {
            this.setState({
                allCollectionItems: results.objects.filter(result => result.images[0]),
                fetching: false,
                initialLoad: false,
            });
        } else {
            this.setState((prevState) => {
                console.log(prevState);

                return { allCollectionItems: [...prevState.allCollectionItems, ...results.objects] };
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
            filteredItems,
            selectCategories,
            fetching,
        } = this.state;

        console.log(store.getState());

        return (
            <div className="container">
                <Filters
                    filter={this.filter}
                    selectCategories={selectCategories}
                />
                <CollectionItemList
                    fetching={fetching}
                    filteredItems={filteredItems}
                    loadMoreItems={this.loadMoreItems}
                />
            </div>
        );
    }
}

export default ExhibitionListContainer;
