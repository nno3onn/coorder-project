import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { clearAction } from 'lib/store/modules/optionReducer';
import getMenu from 'lib/getApi/getMenu';

import FoodBackground from 'components/foodList/background';
import FoodMenu from 'components/foodList/menu';
import FloatButton from 'components/foodList/floatButton';

import styles from './index.module.scss';

const FoodList = () => {
  const router = useRouter();
  const { STOR_CD } = router.query;
  const dispatch = useDispatch();

  const [data, setData] = useState();

  const getStoreData = async () => {
    const res = await getMenu(STOR_CD);
    console.log(111, res);
    setData(res);
  };

  useEffect(() => {
    dispatch(clearAction());
    getStoreData();
  }, []);

  return (
    <div className={styles.container}>
      <FoodBackground STOR_CD={STOR_CD} />
      {data && <FoodMenu data={data} />}
      <FloatButton />
    </div>
  );
};

export default FoodList;
