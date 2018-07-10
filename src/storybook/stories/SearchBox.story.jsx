import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBox from 'components/SearchBox/SearchBox';

storiesOf('SearchBox', module)
  .add('SearchBox', () => (
    <SearchBox placeholder="Search..." />
  ));
