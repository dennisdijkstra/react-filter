import React, { Component } from 'react';
import CollectionItemDetail from '../components/CollectionItemDetail';

class CollectionItemDetailContainer extends Component {
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
                    <CollectionItemDetail item={item} />
                ) : (null) }
            </div>
        );
    }
}

export default CollectionItemDetailContainer;
