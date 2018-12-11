import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './CollectionItemDetail.css';

class CollectionItemDetail extends Component {
    static propTypes = {
        item: PropTypes.shape({
            title: PropTypes.string.isRequired,
            medium: PropTypes.string.isRequired,
        }).isRequired,
    };

    state = { item: null };

    async componentDidMount() {
        const { match } = this.props;

        try {
            this.res = await fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getInfo&access_token=491c2e66a84e1faf2e7e906ff6f24579&object_id=${match.params.id}`);
            const item = await this.res.json();
            this.setState({ item: item.object });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { item } = this.state;

        return (
            <div className="container">
                {item ? (
                    <div className="content">
                        <Link to="/">
                            <p className={s['exhibition-detail-back']}>Back</p>
                        </Link>
                        <p className={s['exhibition-detail-title']}>{item.title}</p>
                        <img src={item.images[0].z.url} className={s['exhibition-detail-image']} alt={item.title} />
                        <p className={s['exhibition-detail-text']}>Medium: {item.medium}</p>
                    </div>
                ) : (null) }
            </div>
        );
    }
}

export default CollectionItemDetail;
