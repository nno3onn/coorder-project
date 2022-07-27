import { useRouter } from 'next/router';
import React from 'react';

import styles from './store.module.scss';

const Store = ({ storeName = '서브웨이', phone, place, img }) => {
  const router = useRouter();

  return (
    <div className={styles.container} onClick={() => router.push(`/store/${storeName}`)}>
      <div className={styles.title}>{storeName}</div>
      <div className={styles.desc}>phone</div>
      <div className={styles.desc}>place</div>
    </div>
  );
};

export default Store;
