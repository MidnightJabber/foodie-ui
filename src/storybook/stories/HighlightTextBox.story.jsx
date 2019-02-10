import React from 'react';
import { storiesOf } from '@storybook/react';
import HighlightTextBox from 'components/HighlightTextBox/HighlightTextBox';

storiesOf('HighlightTextBox', module)
  .add('HighlightTextBox', () => (
    <HighlightTextBox placeholder="Search..." />
  ));
