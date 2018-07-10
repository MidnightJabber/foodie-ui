import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import RecipeCard from 'components/RecipeCard/RecipeCard';
import ReactElementType from '../ReactElementType.test';

describe('RecipeCard', () => {
  const title = 'Spicy Hotdogs';
  const image = 'https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-exlarge-tease.jpg';
  const cookTime = 20;
  const description = 'Pork and beef are the traditional meats used in hot dogs. Less expensive hot dogs are often made from chicken or turkey, using low-cost mechanically separated poultry. Hot dogs often have high sodium, fat and nitrite content, ingredients linked to health problems.';
  const authorName = 'Rebecca Jones';
  const authorImage = 'http://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg';

  it('should render without throwing an error', () => {
    expect(shallow(<RecipeCard
      title={title}
      image={image}
      cooktime={cookTime}
      description={description}
      authorName={authorName}
      authorImage={authorImage}
    />).find('div.recipe-card').exists()).toBe(true);
  });

  it('should set the props correctly', () => {
    const wrapper = shallow(<RecipeCard
      title={title}
      image={image}
      cooktime={cookTime}
      description={description}
      authorName={authorName}
      authorImage={authorImage}
    />);
    const { className, children } = wrapper.props();
    const classNameToElement = {};

    expect(className).toBe('recipe-card');

    children.forEach((child) => {
      classNameToElement[child.props.className] = child;
    });

    // Test for recipe card main image
    expect(classNameToElement['recipe-card-image'].props.alt).toBe(title);
    expect(classNameToElement['recipe-card-image'].type).toBe(ReactElementType.div);
    expect(typeof classNameToElement['recipe-card-image'].props.children).toBe('object');
    expect(classNameToElement['recipe-card-image']
      .props
      .children
      .props
      .name).toBe(authorName);
    expect(classNameToElement['recipe-card-image']
      .props
      .children
      .props
      .image).toBe(authorImage);

    // Test for recipe card title
    expect(classNameToElement['recipe-card-title'].props.children).toBe(title);
    expect(classNameToElement['recipe-card-title'].type).toBe(ReactElementType.div);
    expect(typeof classNameToElement['recipe-card-title'].props.children).toBe('string');

    // Test for recipe card description
    expect(classNameToElement['recipe-card-body'].props.children).toBe(description);
    expect(classNameToElement['recipe-card-body'].type).toBe(ReactElementType.div);
    expect(typeof classNameToElement['recipe-card-body'].props.children).toBe('string');

    // Test for recipe card footer
    expect(classNameToElement['recipe-card-footer'].type).toBe(ReactElementType.div);
    expect(typeof classNameToElement['recipe-card-footer'].props.children).toBe('object');
    expect(classNameToElement['recipe-card-footer']
      .props
      .children[0]
      .type).toBe(ReactElementType.div);

    // Test for recipe card footer cooktime
    expect(classNameToElement['recipe-card-footer']
      .props
      .children[0]
      .props
      .className).toBe('recipe-card-cooktime');
    expect(typeof classNameToElement['recipe-card-footer']
      .props
      .children[0]
      .props
      .children).toBe('object');
    expect(classNameToElement['recipe-card-footer']
      .props
      .children[0].props.children[0].type.displayName).toBe('FontAwesomeIcon');
    expect(classNameToElement['recipe-card-footer']
      .props
      .children[0].props.children[1].type).toBe(ReactElementType.span);
    expect(classNameToElement['recipe-card-footer']
      .props
      .children[0]
      .props
      .children[1]
      .props
      .children[0]).toBe(cookTime);

    // Test for recipe card like
    expect(typeof classNameToElement['recipe-card-footer']
      .props
      .children[1]
      .type).toBe('function');
  });

  it('should render deep correctly', () => {
    const tree = renderer.create(<RecipeCard
      title={title}
      image={image}
      cooktime={cookTime}
      description={description}
      authorName={authorName}
      authorImage={authorImage}
    />);
    expect(tree).toMatchSnapshot();
  });
});
