import { useRouter } from 'next/router';
import React from 'react';

import styles from './store.module.scss';

const Store = ({ storeName, phone = '010-0000-0000', place = 'place', img }) => {
  const router = useRouter();

  return (
    <div
      className={styles.container}
      style={{
        background: 'url(https://byline.network/wp-content/uploads/2018/05/cat.png',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.cover} onClick={() => router.push(`/store/${storeName}`)}>
        <div className={styles.wrapper}>
          <div className={styles.title}>{storeName}</div>
          <div className={styles.desc}>{phone}</div>
          <div className={styles.desc}>{place}</div>
        </div>
      </div>
    </div>
  );
};

export default Store;
