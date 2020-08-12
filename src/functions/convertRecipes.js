// prettier-ignore
export const listIngredients = (recipe) => {
  let response = [];
  let index = 1;
  while (recipe[`strIngredient${index}`]) {
    response = [...response, {
      name: recipe[`strIngredient${index}`],
      quantity: recipe[`strMeasure${index}`],
    }];
    index += 1;
  }
  return response;
};

export const disruptRecipe = (recipe, type) => {
  const {
    [`id${type}`]: id,
    [`str${type}`]: name,
    strArea: area,
    strCategory: category,
    [`str${type}Thumb`]: image,
    strYoutube: youtube,
    strInstructions: instructions,
    strAlcoholic: alcoholicOrNot,
  } = recipe;
  const ingredients = listIngredients(recipe);
  let tags = recipe.strTags;
  if (tags) tags = tags.split(',').slice(0, 2);
  return {
    id,
    type,
    name,
    area,
    category,
    alcoholicOrNot,
    image,
    ingredients,
    youtube,
    instructions,
    tags,
  };
};

export const convertRecipes = (recipes, quantity = 12) => {
  const data = recipes.meals || recipes.drinks || [];
  const type = recipes.meals ? 'Meal' : 'Drink';

  return data.slice(0, quantity).map((recipe) => disruptRecipe(recipe, type));
};
