import React from 'react';
import { storiesOf } from '@storybook/react';
import Chip from 'components/Chip/Chip';

storiesOf('Chip', module)
  .add('Calcium', () => (
    <Chip name="calcium" />
  ));
