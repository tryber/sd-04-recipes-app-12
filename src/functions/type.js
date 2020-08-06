export const getType = ({ url }) => (url.includes('comidas') ? 'meal' : 'cocktail');
// prettier-ignore
export const getTypeInverted = (datatest, url) => ((datatest !== 'recomendation') ? getType(url) : (getType(url) === 'meal') ? 'cocktail' : 'meal');
