import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ExhibitionDetail extends Component {
    state = {
        exhibition: {},
    }

    async componentDidMount() {
        const { match } = this.props;

        try {
            this.res = await fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getInfo&access_token=dbb5dbb3ac11def3ddd372de708e9893&exhibition_id=${match.params.id}`);
            const exhibition = await this.res.json();
            this.setState({
                exhibition: exhibition.exhibition,
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { exhibition } = this.state;

        return (
            <div>
                <Link to="/">
                    <p className="exhibition-detail-back">Back</p>
                </Link>
                <p className="exhibition-detail-title">{exhibition.title}</p>
                <p className="exhibition-detail-text">{exhibition.text}</p>
            </div>
        );
    }
}

export default ExhibitionDetail;
