import { useRouter } from 'next/router';
import React, { useState } from 'react';

import AddFoodContents from './contents';
import AddButton from './addButton';

const AddFood = () => {
  const router = useRouter();
  const { storeName, foodName } = router.query;

  return (
    <>
      <AddFoodContents />
      <AddButton />
    </>
  );
};

export default AddFood;
