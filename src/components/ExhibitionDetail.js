import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ExhibitionDetail extends Component {
    state = {
        object: null,
    }

    async componentDidMount() {
        const { match } = this.props;

        try {
            this.res = await fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getInfo&access_token=dbb5dbb3ac11def3ddd372de708e9893&object_id=${match.params.id}`);
            const object = await this.res.json();
            this.setState({
                object: object.object,
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { object } = this.state;

        return (
            object ? (
                <div className="content">
                    <Link to="/">
                        <p className="exhibition-detail-back">Back</p>
                    </Link>
                    <p className="exhibition-detail-title">{object.title}</p>
                    <img src={object.images[0].z.url} className="exhibition-detail-image" alt={object.tile} />
                    <p className="exhibition-detail-text">Medium: {object.medium}</p>
                </div>
            ) : (null)
        );
    }
}

export default ExhibitionDetail;
