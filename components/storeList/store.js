import React from 'react';

import styles from './store.module.scss';

const Store = ({ storeName = '서브웨이', phone, place, img }) => (
  <a className={styles.container} href={`/store/${storeName}`}>
    <div className={styles.title}>{storeName}</div>
    <div className={styles.desc}>phone</div>
    <div className={styles.desc}>place</div>
  </a>
);

export default Store;
