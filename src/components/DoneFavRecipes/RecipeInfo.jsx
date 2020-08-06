import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const RecipeInfo = ({
  index, isFav, info: {
    image, name, alcoholicOrNot, category, area, doneDate, id, tags, type,
  },
}) => {
  const history = useHistory();
  const isMeal = type === 'meal' || type === 'comida';
  const onClick = () => history.push(`/${isMeal ? 'comidas' : 'bebidas'}/${id}`);
  return (
    <div>
      <img src={image} alt="recipe" data-testid={`${index}-horizontal-image`} onClick={onClick} />
      <span data-testid={`${index}-horizontal-top-text`}>
        {isMeal ? `${area} - ${category}` : alcoholicOrNot}
      </span>
      <span data-testid={`${index}-horizontal-name`} onClick={onClick}>
        {name}
      </span>
      {/* <adicionar botao de compartilhar> */}
      {/* isFav && <adicionar botão de favoritar> */}
      {!isFav && (
        <Fragment>
          <span data-testid={`${index}-horizontal-done-date`}>
            {`Feita em: ${doneDate}`}
          </span>
          <span data-testid={`${index}-${tags[0]}-horizontal-tag`}>{tags[0]}</span>
          <span data-testid={`${index}-${tags[1]}-horizontal-tag`}>{tags[1]}</span>
        </Fragment>
      )}
    </div>
  );
};

RecipeInfo.propTypes = {
  isFav: PropTypes.bool.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeInfo;
