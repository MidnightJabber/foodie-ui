import React, { Component } from 'react';

import EatenBanana from 'images/ingredients/eaten-banana.png';
import EatenApple from 'images/ingredients/eaten-apple.png';
import RecipeHeader from './RecipeHeader';
import RecipeStep from './RecipeStep';
import RecipeIngredients from './RecipeIngredients';
import RecipeIngredient from './RecipeIngredient';

import './Recipe.scss';


class Recipe extends Component {
  state = {
    title: 'Chicken Keema Spaghetti',
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
      },
      {
        title: 'Onion',
        image: EatenApple,
      },
      {
        title: 'Green Chilli',
        image: EatenBanana,
      },
      {
        title: 'Turmeric',
        image: EatenApple,
      },
      {
        title: 'Salt',
        image: EatenBanana,
      },
      {
        title: 'Black Pepper',
        image: EatenBanana,
      },
      {
        title: 'Tomato puree',
        image: EatenBanana,
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
    this.state.ingredients.map(({ image, title }) => (
      <RecipeIngredient
        title={title}
        image={image}
      />
    ))
  )

  render = () => (
    <div className="recipe">
      <div className="recipe-content">
        <RecipeHeader image={this.state.image} />
        <div className="recipe-title">{this.state.title}</div>
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
