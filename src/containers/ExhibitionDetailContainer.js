import React, { Component } from 'react';
import ExhibitionDetail from '../components/ExhibitionDetail';


class ExhibitionDetailContainer extends Component {
    state = {
        object: null,
    }

    async componentDidMount() {
        const { match } = this.props;

        try {
            this.res = await fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getInfo&access_token=491c2e66a84e1faf2e7e906ff6f24579&object_id=${match.params.id}`);
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
            <div className="container">
                {object ? (
                    <ExhibitionDetail object={object} />
                ) : (null) }
            </div>
        );
    }
}

export default ExhibitionDetailContainer;
