import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Exhibition extends Component {
    static propTypes = {
        exhibition: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
    };

    render() {
        const { exhibition } = this.props;
        return (
            <div>
                <h1>{exhibition.title}</h1>
            </div>
        );
    }
}
