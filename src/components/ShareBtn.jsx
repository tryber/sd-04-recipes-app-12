import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { getType } from '../functions/type';

export default function ShareBtn({ dataTestId }) {
  const [share, setShare] = useState('');
  const { id } = useParams();
  const type = getType(useRouteMatch());
  return (
    <div>
      <button
        type="button"
        data-testid={dataTestId}
        onClick={() => {
          // prettier-ignore
          navigator.clipboard.writeText(
            `${window.location.origin}/${type === 'meal' ? 'comidas/' : 'bebidas/'}${id}`,
          );
          setShare('Link copiado!');
        }}
      >
        share
      </button>
      {share}
    </div>
  );
}

ShareBtn.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};
