export const saveRecipeInProgress = (id, type) => {
  const inProgress = localStorage.getItem('inProgressRecipes')
    ? JSON.parse(localStorage.getItem('inProgressRecipes'))
    : { cocktails: {}, meals: {} };

  localStorage.setItem('inProgressRecipes', JSON.stringify(
    inProgress[`${type}s`][id]
      ? inProgress : { ...inProgress, [`${type}s`]: { ...inProgress[`${type}s`], [id]: [] } },
  ));
};

export const updateRecipeInProgress = (type, id, name) => {
  const recipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
  localStorage.setItem('inProgressRecipes', JSON.stringify(
    {
      ...recipe,
      [`${type}s`]: {
        ...recipe[`${type}s`],
        [id]: [...recipe[`${type}s`][id], name],
      },
    },
  ));
};

export const removeRecipeInProgress = (type, id, name) => {
  const recipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
  localStorage.setItem('inProgressRecipes', JSON.stringify(
    {
      ...recipe,
      [`${type}s`]: {
        ...recipe[`${type}s`],
        [id]: recipe[`${type}s`][id].filter((igdt) => igdt !== name),
      },
    },
  ));
};

export const getStatusRecipes = (id) => {
  const DoneRecipes = localStorage.getItem('doneRecipes')
    ? JSON.parse(localStorage.getItem('doneRecipes')).some((recipe) => recipe.id === id)
    : false;
  // prettier-ignore
  const ProgressRecipes = localStorage.getItem('inProgressRecipes')
    ? Object.keys(JSON.parse(localStorage.getItem('inProgressRecipes'))).some(
      (key) => JSON.parse(localStorage.getItem('inProgressRecipes'))[key][id],
    ) : false;

  return DoneRecipes ? false : ProgressRecipes ? 'Continuar Receita' : 'Iniciar Receita';
};

export const removeRecipeFavorite = ({ id }) => {
  const favorites = localStorage.getItem('favoriteRecipes')
    ? JSON.parse(localStorage.getItem('favoriteRecipes'))
    : [];
  localStorage.setItem('favoriteRecipes', JSON.stringify(
    favorites.filter((recipeCurrent) => recipeCurrent.id !== id),
  ));
};

export const saveRecipeFavorite = (recipe) => {
  const {
    id, type, area, category, alcoholicOrNot, name, image,
  } = recipe;
  const typeRecipes = { Drink: 'bebida', Meal: 'comida' };

  const favorites = localStorage.getItem('favoriteRecipes')
    ? JSON.parse(localStorage.getItem('favoriteRecipes'))
    : [];
  const newFavorites = [...favorites, {
    id,
    type: typeRecipes[type],
    area: area || '',
    category: category || '',
    alcoholicOrNot: alcoholicOrNot || '',
    name,
    image,
  }];
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
};

export const saveRecipeDone = (recipe) => {
  const {
    id, type, area, category, alcoholicOrNot, name, image, tags,
  } = recipe;
  const typeRecipes = { Drink: 'bebida', Meal: 'comida' };

  const favorites = localStorage.getItem('doneRecipes')
    ? JSON.parse(localStorage.getItem('doneRecipes'))
    : [];
  const newFavorites = [...favorites, {
    id,
    type: typeRecipes[type],
    area: area || '',
    category: category || '',
    alcoholicOrNot: alcoholicOrNot || '',
    name,
    image,
    doneDate: new Date().toLocaleDateString('pt-BR'),
    tags,
  }];
  localStorage.setItem('doneRecipes', JSON.stringify(newFavorites));
};
