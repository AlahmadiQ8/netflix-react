import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import App from '../SampleApp';

storiesOf('SampleApp', module).add('Testing Storybook', () => <App />);
