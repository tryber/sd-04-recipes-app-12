import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import BottomMenu from '../../components/BottomMenu';
import { getRandomRecipe } from '../../services/recipesAPI';
import Area from '../../components/ExploreArea';
import Ingredients from '../../components/ExploreIngredients';

const initialExplore = () => (
  <div>
    <Link to="/explorar/comidas" data-testid="finish-recipe-btn">
      Explorar Comidas
    </Link>
    <Link to="/explorar/bebidas" data-testid="finish-recipe-btn">
      Explorar Bebidas
    </Link>
  </div>
);

export default function Explore() {
  const { type, by } = useParams();
  const history = useHistory();
  const surpriseMe = () => getRandomRecipe(type === 'comidas' ? 'meal' : 'cocktail').then((data) => {
    history.push(`/${type}/${data[0].id}`);
  });
  const exploreOptions = () => (
    <div>
      <Link to={`/explorar/${type}/ingredientes`}>
        Por Ingredientes
      </Link>
      {type === 'comidas' && (
      <Link to={`/explorar/${type}/area`}>
        Por Local de Origem
      </Link>
      )}
      <button type="button" onClick={surpriseMe}>
        Me Surpreenda!
      </button>
    </div>
  );
  const renderButtons = () => {
    if (!type && !by) return initialExplore();
    if (by === 'area') return <Area />;
    if (by === 'ingredientes') return <Ingredients />;
    return exploreOptions();
  };

  return (
    <div>
      <Header disableSearch={by !== 'area'} />
      {renderButtons()}
      <BottomMenu />
    </div>
  );
}
