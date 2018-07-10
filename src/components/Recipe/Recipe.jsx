import React, { Component } from 'react';

import EatenBanana from 'images/ingredients/eaten-banana.png';
import EatenApple from 'images/ingredients/eaten-apple.png';
import Like from 'components/Like/Like';
import RecipeHeader from './RecipeHeader';
import RecipeStep from './RecipeStep';
import RecipeIngredients from './RecipeIngredients';
import RecipeIngredient from './RecipeIngredient';

import './Recipe.scss';

class Recipe extends Component {
  state = {
    title: 'Chicken Keema Spaghetti',
    authorName: 'Vishrut Reddi',
    authorImage: 'https://pbs.twimg.com/profile_images/738617909153390593/jVbWhQCd_400x400.jpg',
    image: 'https://i.ytimg.com/vi/4oe74chByjY/maxresdefault.jpg',
    description: 'Supremely spicy with layers of earthy undertones, this Indian-influenced ground chicken makes for one delicious and complexly flavored minced meat that perfeclty blends with spaghetti.',
    recipeSteps: [
      'Cut one large yellow onion into small pieces, cut 3 garlic cloves in small pieces and cut 2 medium green chilies in small slices.',
      'Prepare 2 large chicken breasts by washing them clean and cutting off excess fat. After that in a blender/mixer add the chicken and create grounded chicken (keema).',
    ],
    ingredients: [
      {
        title: 'Chicken',
        image: EatenApple,
        quantity: 250,
        unit: 'g',
      },
      {
        title: 'Onion',
        image: EatenApple,
        quantity: 35,
        unit: 'g',
      },
      {
        title: 'Green Chilli',
        image: EatenBanana,
        quantity: 25,
        unit: 'g',
      },
      {
        title: 'Turmeric',
        image: EatenApple,
        quantity: 1,
        unit: 'tbsp',
      },
      {
        title: 'Salt',
        image: EatenBanana,
        quantity: 3,
        unit: 'tbsp',
      },
      {
        title: 'Black Pepper',
        image: EatenBanana,
        quantity: 2,
        unit: 'tbsp',
      },
      {
        title: 'Tomato puree',
        image: EatenBanana,
        quantity: 150,
        unit: 'g',
      },
    ],
  };

  getRecipeSteps = () => (
    this.state.recipeSteps.map((stepContent, stepIndex) => (
      <RecipeStep
        number={stepIndex + 1}
        description={stepContent}
        position={stepIndex % 2 === 0 ? 'left' : 'right'}
      />
    ))
  )

  getIngredients = () => (
    this.state.ingredients.map(({
      image,
      title,
      quantity,
      unit,
    }) => (
      <RecipeIngredient
        title={title}
        image={image}
        quantity={quantity}
        unit={unit}
      />
    ))
  )

  render = () => (
    <div className="recipe">
      <div className="recipe-content">
        <RecipeHeader
          image={this.state.image}
          authorImage={this.state.authorImage}
          authorName={this.state.authorName}
        />
        <div className="recipe-title-container">
          <div className="recipe-title">{this.state.title}</div>
          <Like />
        </div>
        <div className="recipe-description">{this.state.description}</div>
        <RecipeIngredients>
          {this.getIngredients()}
        </RecipeIngredients>
        <div className="recipe-steps-container">
          {this.getRecipeSteps()}
        </div>
      </div>
    </div>
  )
}

export default Recipe;
