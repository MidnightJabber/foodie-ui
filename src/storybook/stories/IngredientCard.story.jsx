import React from 'react';
import { storiesOf } from '@storybook/react';

import Chip from 'components/Chip/Chip';
import IngredientCard from 'components/IngredientCard/IngredientCard';

import Milk from 'images/ingredients/milk.png';
import Themes from 'assets/json/themes.json';

storiesOf('IngredientCard', module)
  .add('Milk', () => (
    <IngredientCard
      name="Milk"
      image={Milk}
      theme={Themes.teal}
    >
      <Chip name="calcium" />
      <Chip name="vitamin B12" />
      <Chip name="riboflavin" />
    </IngredientCard>
  ));
