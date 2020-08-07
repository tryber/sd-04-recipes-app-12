import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
import ShareBtn from '../ShareBtn';
import favoriteIcon from '../../images/blackHeartIcon.svg';

const RecipeInfo = ({
  index, isFav, removeFav, info: {
    image, name, alcoholicOrNot, category, area, doneDate, id, tags, type,
  },
}) => {
  const history = useHistory();
  const isMeal = type === 'meal' || type === 'comida';
  const onClick = () => history.push(`/${isMeal ? 'comidas' : 'bebidas'}/${id}`);
  return (
    <div>
      <img
        src={image}
        alt="recipe"
        data-testid={`${index}-horizontal-image`}
        onClick={onClick}
        className="card-image"
      />
      <span data-testid={`${index}-horizontal-top-text`}>
        {isMeal ? `${area} - ${category}` : alcoholicOrNot}
      </span>
      <span data-testid={`${index}-horizontal-name`} onClick={onClick}>
        {name}
      </span>
      <ShareBtn dataTestId={`${index}-horizontal-share-btn`} id={id} type={type} />
      {isFav && (
      <button onClick={() => removeFav(id)}>
        <img data-testid={`${index}-horizontal-favorite-btn`} src={favoriteIcon} alt="favorite" />
      </button>
      )}
      {!isFav && (
        <>
          <span data-testid={`${index}-horizontal-done-date`}>
            {`Feita em: ${doneDate}`}
          </span>
          <span data-testid={`${index}-${tags[0]}-horizontal-tag`}>{tags[0]}</span>
          <span data-testid={`${index}-${tags[1]}-horizontal-tag`}>{tags[1]}</span>
        </>
      )}
    </div>
  );
};

RecipeInfo.propTypes = {
  isFav: PropTypes.bool.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  removeFav: PropTypes.func.isRequired,
};

export default RecipeInfo;
