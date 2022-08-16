import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { v4 } from 'uuid';

import getStore from 'lib/getApi/getStore';
import { updateAction } from 'lib/store/modules/storeListReducer';

import Store from './store';

import styles from './index.module.scss';

const StoreList = () => {
  const store = useSelector((state) => state.storeListReducer);
  const dispatch = useDispatch();

  const getStores = async () => {
    const data = await getStore();
    dispatch(updateAction(data));
  };

  useEffect(() => {
    getStores();
  }, []);

  return <div className={styles.container}>{store && store.map((v) => <Store data={v} key={v4()} />)}</div>;
};

export default StoreList;
