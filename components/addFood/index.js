import React, { useEffect } from 'react';
import Background from './background';

import AddFoodContents from './contents';

const AddFood = () => {
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <>
      <Background />
      <AddFoodContents />
    </>
  );
};

export default AddFood;
