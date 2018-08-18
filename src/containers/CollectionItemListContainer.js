import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Actions from '../datamodel/Filter/actions';

import CollectionItemList from '../components/CollectionItemList';
import Filters from '../components/Filters';


class CollectionItemListContainer extends Component {
    static propTypes = {
        search: PropTypes.string.isRequired,
        select: PropTypes.string.isRequired,
        selectCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
        setSearchValue: PropTypes.func.isRequired,
        setSelectValue: PropTypes.func.isRequired,
        setSelectCategories: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            allCollectionItems: [],
            filteredItems: [],
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

    setSelectCategories = (data) => {
        const categories = [];
        const { setSelectCategories } = this.props;

        data.forEach((item) => {
            if (!categories.filter(categorie => (categorie.type === item.type)).length) {
                categories.push({ id: Math.random().toString(36).substr(2, 7), type: item.type });
            }
        });

        setSelectCategories(categories);
    }

    initialFilter = () => {
        const {
            search,
            select,
        } = this.props;

        this.filter(search.toLowerCase(), select.toLowerCase());
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
            this.setState(prevState => ({ allCollectionItems: [...prevState.allCollectionItems, ...results.objects] }));
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
            fetching,
        } = this.state;

        const {
            search,
            select,
            setSearchValue,
            setSelectValue,
            selectCategories,
        } = this.props;

        return (
            <div className="container">
                <Filters
                    search={search}
                    select={select}
                    setSearchValue={setSearchValue}
                    setSelectValue={setSelectValue}
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

const mapStateToProps = ({ search, select, selectCategories }) => ({ search, select, selectCategories });
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CollectionItemListContainer);
