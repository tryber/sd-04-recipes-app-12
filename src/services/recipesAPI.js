import { convertRecipes } from '../functions/convertRecipes';

const fetchURL = (type, path) => fetch(`https://www.the${type}db.com/api/json/v1/1/${path}`)
  .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const fetchConvert = (type, path, quantity) => fetchURL(type, path)
  .then((json) => {
    console.log('jss', json);
    return convertRecipes(json, quantity);
  });

export const getRecipeCategories = (type) => fetchURL(type, 'list.php?c=list');

export const getRecipeAreas = (type) => fetchURL(type, 'list.php?a=list');

export const getIngredientsList = (type) => fetchURL(type, 'list.php?i=list');

export const getRecipeDetailsById = (id, type) => fetchConvert(type, `lookup.php?i=${id}`);

export const getRandomRecipe = (type) => fetchConvert(type, 'random.php');

export const searchRecipesByCategory = (category, type) => fetchConvert(type, `filter.php?c=${category}`);

const searchByHelper = {
  name: 'search.php?s=',
  ingredient: 'filter.php?i=',
  'first-letter': 'search.php?f=',
};

export const searchBy = (search, info, type, quantity) => {
  console.log('search', search);
  return fetchConvert(type, `${searchByHelper[search]}${info}`, quantity);
};
