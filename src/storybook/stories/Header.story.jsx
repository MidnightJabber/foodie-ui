import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from 'components/Header/Header';

storiesOf('Header', module)
  .add('Header (purple)', () => (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />
    </div>
  ));
