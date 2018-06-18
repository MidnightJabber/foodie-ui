import React from 'react';

import Header from 'components/Header/Header';
import IngredientCard from 'components/IngredientCard/IngredientCard';
import SearchBox from 'components/SearchBox/SearchBox';
import Themes from 'assets/json/themes.json';
import Chip from 'components/Chip/Chip';

import Milk from 'images/ingredients/milk.png';
import Yogurt from 'images/ingredients/yogurt.png';

// TODO: Move all the place components in their own area
const Dashboard = () => (
  <div className="dashboard">
    <Header />
    <IngredientCard
      name="Milk"
      image={Milk}
      theme={Themes.teal}
    >
      <Chip name="calcium" />
      <Chip name="vitamin B12" />
      <Chip name="riboflavin" />
    </IngredientCard>
    <IngredientCard
      name="Yogurt"
      image={Yogurt}
      theme={Themes.lime}
    >
      <Chip name="calcium" />
      <Chip name="vitamin B2" />
      <Chip name="potassium" />
    </IngredientCard>
    <SearchBox placeholder="Search..." />
  </div>
);

export default Dashboard;
