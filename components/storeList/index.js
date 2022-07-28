import dataConfigs from 'configs/data';
import { v4 } from 'uuid';

import Store from './store';

import styles from './index.module.scss';

const StoreList = () => {
  const { store } = dataConfigs;

  return (
    <div className={styles.container}>
      {store.map((v) => (
        <Store storeName={v} key={v4()} />
      ))}
    </div>
  );
};

export default StoreList;
