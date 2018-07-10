import React from 'react';
import { storiesOf } from '@storybook/react';
import RecipeCard from 'components/RecipeCard/RecipeCard';

storiesOf('RecipeCard', module)
  .add('Spicy Hotdogs', () => (
    <RecipeCard
      title="Spicy Hotdogs"
      image="https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-exlarge-tease.jpg"
      cooktime={20}
      description="Pork and beef are the traditional meats used in hot dogs. Less expensive hot dogs are often made from chicken or turkey, using low-cost mechanically separated poultry. Hot dogs often have high sodium, fat and nitrite content, ingredients linked to health problems."
      authorName="Rebecca Jones"
      authorImage="http://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg"
    />
  ));
