import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './CollectionItem.css';

class CollectionItem extends Component {
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
            <div className={s.container}>
                {item ? (
                    <div className={s.content}>
                        <Link to="/">
                            <p className={s.back}>Back</p>
                        </Link>
                        <p className={s.title}>{item.title}</p>
                        <img src={item.images[0].z.url} className={s.image} alt={item.title} />
                        <p className={s.text}>Medium: {item.medium}</p>
                    </div>
                ) : (null) }
            </div>
        );
    }
}

export default CollectionItem;
