import React from 'react';
import { storiesOf } from '@storybook/react';

import ContentRow from './ContentRow';

storiesOf('ContentRow', module)
  .addDecorator(story => (
    <div style={{ border: '1px solid white' }}>{story()}</div>
  ))
  .add('Base', () => <ContentRow>OMG</ContentRow>);
