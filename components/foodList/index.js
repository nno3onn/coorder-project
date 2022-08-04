import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { clearAction } from 'lib/store/modules/optionReducer';

import dataConfigs from 'configs/data';

import FoodBackground from 'components/foodList/background';
import FoodMenu from 'components/foodList/menu';
import FloatButton from 'components/foodList/floatButton';

import styles from './index.module.scss';

const FoodList = () => {
  const router = useRouter();
  const { storeName } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAction());
  }, []);

  const data = dataConfigs.menu[storeName];

  return (
    <div className={styles.container}>
      <FoodBackground storeName={storeName} />
      <FoodMenu data={data} />
      <FloatButton />
    </div>
  );
};

export default FoodList;
