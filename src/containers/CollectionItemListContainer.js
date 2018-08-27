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
        setInputValue: PropTypes.func.isRequired,
        setSelectCategories: PropTypes.func.isRequired,
        fetchData: PropTypes.func.isRequired,
        form: PropTypes.shape({
            search: PropTypes.string,
            select: PropTypes.string,
        }).isRequired,
        selectCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
        allCollectionItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            filteredItems: [],
            initialLoad: true,
        };

        this.page = 1;
    }

    componentDidMount() {
        const { fetchData: fetchItems } = this.props;

        fetchItems(this.page).then(() => {
            this.filter();
            this.setState({
                initialLoad: false,
            });
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
        const { allCollectionItems, form } = this.props;
        const { search, select } = form;
        const searchFiltered = allCollectionItems.filter(
            item => item.title.toLowerCase().indexOf(search) !== -1,
        );
        const searchAndSelectFiltered = select === 'all'
            ? searchFiltered
            : searchFiltered.filter(
                item => item.type.toLowerCase() === select,
            );

        this.setState({
            filteredItems: searchAndSelectFiltered,
        }, this.setSelectCategories(searchAndSelectFiltered));
    }

    loadMoreItems = () => {
        const { fetchData: fetchItems } = this.props;
        this.page = this.page + 1;
        fetchItems(this.page).then(() => this.filter());
    }

    render() {
        const {
            filteredItems,
            initialLoad,
        } = this.state;

        const {
            isFetching,
            form,
            setInputValue,
            selectCategories,
        } = this.props;

        return (
            <div className="container">
                <Filters
                    form={form}
                    setInputValue={setInputValue}
                    filter={this.filter}
                    selectCategories={selectCategories}
                />
                <CollectionItemList
                    isFetching={isFetching}
                    initialLoad={initialLoad}
                    filteredItems={filteredItems}
                    loadMoreItems={this.loadMoreItems}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    form: state.form,
    selectCategories: state.selectCategories,
    allCollectionItems: state.allCollectionItems,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...Actions, fetchData }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CollectionItemListContainer);
