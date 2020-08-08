import PropTypes from 'prop-types';
import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

export default function ShareBtn({ dataTestId, id, type }) {
  const [share, setShare] = useState('');
  console.log(type);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          // prettier-ignore
          navigator.clipboard.writeText(
            `${window.location.origin}/${type === 'Meal' || type === 'comida' ? 'comidas/' : 'bebidas/'}${id}`,
          );
          setShare('Link copiado!');
        }}
      >
        <img data-testid={dataTestId} src={shareIcon} alt="share button" />
      </button>
      {share}
    </div>
  );
}

ShareBtn.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
