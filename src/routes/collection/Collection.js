import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import setSelectCategories from '../../actions/collectionItem';
import { fetchData } from '../../actions/filter';
import CollectionItems from '../../components/molecules/CollectionItems';
import Filters from '../../components/molecules/Filters';
import s from './Collection.css';

class Collection extends Component {
    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        setSelectCategories: PropTypes.func.isRequired,
        fetchData: PropTypes.func.isRequired,
        initialValues: PropTypes.shape({
            search: PropTypes.string.isRequired,
            select: PropTypes.string.isRequired,
        }).isRequired,
        form: PropTypes.shape({
            filters: PropTypes.shape({
                values: PropTypes.shape({
                    search: PropTypes.string.isRequired,
                    select: PropTypes.string.isRequired,
                }),
            }),
        }).isRequired,
        selectCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
        allCollectionItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = { filteredItems: [], initialLoad: true };
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
        const { setSelectCategories: setSelect } = this.props;

        data.forEach((item) => {
            if (!categories.filter(categorie => (categorie.type === item.type.toLowerCase())).length) {
                categories.push({
                    id: Math.random().toString(36).substr(2, 7),
                    type: item.type.toLowerCase(),
                });
            }
        });
        setSelect(categories);
    }

    filter = () => {
        const { allCollectionItems, form } = this.props;
        const { search, select } = form.filters.values;
        const filteredItems = select === 'all'
            ? allCollectionItems.filter(item => item.title.toLowerCase().indexOf(search) !== -1)
            : allCollectionItems
                .filter(item => item.title.toLowerCase().indexOf(search) !== -1)
                .filter(item => item.type.toLowerCase() === select);

        this.setState({
            filteredItems,
        }, this.setSelectCategories(filteredItems));
    }

    loadMoreItems = () => {
        const { fetchData: fetchItems } = this.props;
        this.page = this.page + 1;
        fetchItems(this.page).then(() => this.filter());
    }

    render() {
        const { filteredItems, initialLoad } = this.state;
        const { isFetching, initialValues, selectCategories } = this.props;

        return (
            <div className={s.container}>
                <Filters
                    initialValues={initialValues}
                    filter={this.filter}
                    selectCategories={selectCategories}
                />
                <CollectionItems
                    filteredItems={filteredItems}
                    initialLoad={initialLoad}
                    isFetching={isFetching}
                    loadMoreItems={this.loadMoreItems}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    selectCategories: state.selectCategories,
    allCollectionItems: state.allCollectionItems,
    form: state.form,
    initialValues: { search: '', select: 'all' },
});

const mapDispatchToProps = dispatch => bindActionCreators({ setSelectCategories, fetchData }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Collection);
