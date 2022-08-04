import Link from 'next/link';
import React from 'react';

import styles from './store.module.scss';

const Store = ({
  storeName,
  phone = '010-0000-0000',
  place = 'place',
  img = 'url(https://byline.network/wp-content/uploads/2018/05/cat.png',
}) => (
  <Link href={`/store/${storeName}`}>
    <div
      className={styles.container}
      style={{
        background: img,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.cover}>
        <div className={styles.wrapper}>
          <div className={styles.title}>{storeName}</div>
          <div className={styles.desc}>{phone}</div>
          <div className={styles.desc}>{place}</div>
        </div>
      </div>
    </div>
  </Link>
);

export default Store;
