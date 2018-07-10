import { storiesOf } from '@storybook/react';
import React from 'react';

import CardContainer from 'components/CardContainer/CardContainer';
import RecipeCard from 'components/RecipeCard/RecipeCard';

storiesOf('CardContainer', module)
  .add('Container of RecipeCards', () => (
    <CardContainer>
      <RecipeCard
        title="Spicy Hotdogs"
        image="https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-exlarge-tease.jpg"
        cooktime={20}
        description="Pork and beef are the traditional meats used in hot dogs. Less expensive hot dogs are often made from chicken or turkey, using low-cost mechanically separated poultry. Hot dogs often have high sodium, fat and nitrite content, ingredients linked to health problems."
        authorName="Rebecca Jones"
        authorImage="http://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg"
      />
      <RecipeCard
        title="Vegita Pasta"
        image="https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg"
        cooktime={30}
        description="Pork and beef are the traditional meats used in hot dogs. Less expensive hot dogs are often made from chicken or turkey, using low-cost mechanically separated poultry. Hot dogs often have high sodium, fat and nitrite content, ingredients linked to health problems."
        authorName="Zach Philips"
        authorImage="http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg"
      />
      <RecipeCard
        title="Lemon Grass Chicken"
        image="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/45/768x384/landscape-1510179196-chicken-dinner-recipes.jpg?resize=768:*"
        cooktime={65}
        description="This recipe is super easy to make. It’s one of those quick and easy weeknight meals that you’ll want to keep forever. Even picky eaters tend to like it! As written, this recipe calls for marinating directly in a gallon sized resealable bag. If you don’t want to use plastic, you can always marinate in a shallow dish. Simply whisk the marinade in a mixing bowl, place your chicken into a shallow dish or bowl, and pour the marinade right over."
        authorName="Vishrut Reddi"
        authorImage="https://pbs.twimg.com/profile_images/738617909153390593/jVbWhQCd_400x400.jpg"
      />
    </CardContainer>
  ));
