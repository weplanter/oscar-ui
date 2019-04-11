import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StatelessReactButton from '../state-less-react-button.jsx';

storiesOf('Stateless Button', module).add('stateless react Button', () => (
    <StatelessReactButton handleOnclick={action('clicked')} />
));
