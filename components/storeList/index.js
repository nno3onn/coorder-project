import dataConfigs from 'configs/data';

import Store from './store';

import styles from './index.module.scss';

const StoreList = () => {
  const { store } = dataConfigs;

  return (
    <div className={styles.container}>
      {store.map((v) => (
        <Store storeName={v} />
      ))}
    </div>
  );
};

export default StoreList;
