import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Actions from '../datamodel/Filter/actions';
import { fetchData } from '../datamodel/CollectionItem/actions';
import CollectionItemList from '../components/CollectionItemList';
import Filters from '../components/Filters';

class CollectionItemListContainer extends Component {
    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        search: PropTypes.string.isRequired,
        select: PropTypes.string.isRequired,
        selectCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
        allCollectionItems: PropTypes.arrayOf(PropTypes.object).isRequired,
        setSearchValue: PropTypes.func.isRequired,
        setSelectValue: PropTypes.func.isRequired,
        setSelectCategories: PropTypes.func.isRequired,
        fetchData: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            filteredItems: [],
        };

        this.page = 1;
    }

    componentDidMount() {
        const { fetchData: fetchItems } = this.props;

        fetchItems(this.page).then(() => {
            this.filter();
        });
    }

    setSelectCategories = (data) => {
        const categories = [];
        const { setSelectCategories } = this.props;

        data.forEach((item) => {
            if (!categories.filter(categorie => (categorie.type === item.type)).length) {
                categories.push({
                    id: Math.random().toString(36).substr(2, 7),
                    type: item.type,
                });
            }
        });

        setSelectCategories(categories);
    }

    filter = () => {
        const { allCollectionItems, search, select } = this.props;
        const searchFiltered = allCollectionItems.filter(
            item => item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1,
        );
        const searchAndSelectFiltered = select === 'all'
            ? searchFiltered
            : searchFiltered.filter(
                item => item.type.toLowerCase() === select.toLowerCase(),
            );

        this.setState({
            filteredItems: searchAndSelectFiltered,
        }, this.setSelectCategories(searchAndSelectFiltered));
    }

    loadMoreItems = () => {
        const { fetchData: fetchItems } = this.props;
        this.page = this.page + 1;
        fetchItems(this.page).then(() => this.getFilterValues());
    }

    render() {
        const {
            filteredItems,
        } = this.state;

        const {
            isFetching,
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
                    isFetching={isFetching}
                    filteredItems={filteredItems}
                    loadMoreItems={this.loadMoreItems}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    search: state.search,
    select: state.select,
    selectCategories: state.selectCategories,
    allCollectionItems: state.allCollectionItems,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...Actions, fetchData }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CollectionItemListContainer);
