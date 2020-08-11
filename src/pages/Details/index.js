import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import * as fetch from '../../services/recipesAPI';
import * as LocalStorage from '../../functions/localStorage';
import { getType } from '../../functions/type';
import Detail from '../../components/Detail';
import DetailInProgress from '../../components/DetailInProgress';

import './Details.css';

export default function Details() {
  const [recipesDetails, setRecipesDetails] = useState([]);
  const { id, status } = useParams();
  const type = getType(useRouteMatch());

  useEffect(() => {
    async function fetchRecipes() {
      setRecipesDetails([]);
      await fetch.getRecipeDetailsById(id, type).then((data) => {
        setRecipesDetails(data);
      });
    }
    fetchRecipes();
  }, [type]);

  if (status === 'in-progress') {
    LocalStorage.saveRecipeInProgress(id, type);
  }

  return recipesDetails.length > 0 ? (
    <div>
      {status === 'in-progress'
        ? <DetailInProgress recipe={recipesDetails} status={status} />
        : <Detail recipe={recipesDetails} status={status} />}
    </div>
  ) : (
    <div>loading...</div>
  );
}
