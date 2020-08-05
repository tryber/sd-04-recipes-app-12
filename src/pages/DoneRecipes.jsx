import React from 'react';

const DoneRecipes = () => {
  const [filter, setFilter] = useState();
  const allDone = JSON.parse(localStorage.doneRecipes);
  const filtered = allDone.filter((recipe) => !filter || recipe.type === filter);
  return (
    <div />
  );
};

export default DoneRecipes;
