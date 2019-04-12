import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StatefullReactButton from '../state-ful-react-button.jsx';

storiesOf('Stateful Button', module).add('stateful react Button', () => (
    <StatefullReactButton handleOnclick={action('clicked')} />
));
