import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import BottomMenu from '../../components/BottomMenu';
import { getRandomRecipe } from '../../services/recipesAPI';
import Area from '../../components/ExploreArea';
import Ingredients from '../../components/ExploreIngredient';

const initialExplore = () => (
  <div>
    <Link to="/explorar/comidas" data-testid="explore-food">
      Explorar Comidas
    </Link>
    <Link to="/explorar/bebidas" data-testid="explore-drinks">
      Explorar Bebidas
    </Link>
  </div>
);

const surpriseMe = (type, history) => getRandomRecipe(type === 'comidas' ? 'meal' : 'cocktail').then((data) => {
  history.push({
    pathname: `/${type}/${data[0].id}`,
    state: {
      datatest: 'recomendation', qtd: 6, by: 'name', info: '',
    },
  });
});

const exploreOptions = (type, history) => (
  <div>
    <Link to={`/explorar/${type}/ingredientes`} data-testid="explore-by-ingredient">
      Por Ingredientes
    </Link>
    {type === 'comidas' && (
    <Link to={`/explorar/${type}/area`} data-testid="explore-by-area">
      Por Local de Origem
    </Link>
    )}
    <button type="button" onClick={() => surpriseMe(type, history)} data-testid="explore-surprise">
      Me Surpreenda!
    </button>
  </div>
);

const renderButtons = (type, by, history) => {
  if (!type && !by) return initialExplore();
  if (by === 'area') return <Area />;
  if (by === 'ingredientes') return <Ingredients />;
  return exploreOptions(type, history);
};

export default function Explore() {
  const { type, by } = useParams();
  const history = useHistory();

  return (
    <div>
      <Header showButton={by === 'area'} />
      {renderButtons(type, by, history)}
      <BottomMenu />
    </div>
  );
}
