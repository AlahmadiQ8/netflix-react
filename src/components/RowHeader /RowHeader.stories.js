import React from 'react';
import { storiesOf } from '@storybook/react';

import Body from '../Body';
import ContentRow from '../ContentRow';
import RowHeader from './RowHeader';

storiesOf('RowHeader ', module)
  .add('Base', () => <RowHeader>TESTING</RowHeader>)
  .add('with Body/ConentRow as Parent', () => (
    <Body>
      <ContentRow>
        <RowHeader>TESTING TESTING</RowHeader>
      </ContentRow>
    </Body>
  ));
