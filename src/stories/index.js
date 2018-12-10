import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { withKnobs, boolean, color } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import store from '../datamodel/store';
import Spinner from '../components/Spinner';
import CollectionItem from '../components/CollectionItem';
import '../sass/app.css';

const stories = storiesOf('Random', module);
stories.addDecorator(withKnobs);

stories
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('Loading spinner', () => <Spinner isLoading={boolean('isLoading', true)} />);

stories.add('Button', () => (<button type="button" onClick={action('button-click')}>Header</button>));

stories
    .addDecorator(StoryRouter())
    .add('CollectionItem component', () => {
        const collectionItem = {
            id: 234,
            images: [{
                b: {
                    url: 'https://images.collection.cooperhewitt.org/32762_c32801acbcb0eaba_b.jpg',
                },
            }],
            title_raw: 'Titel',
            year_end: 2002,
        };
        return (
            <CollectionItem collectionItem={collectionItem} />
        );
    });
