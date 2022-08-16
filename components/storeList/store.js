import Link from 'next/link';
import React from 'react';

import styles from './store.module.scss';

const Store = ({ data }) => (
  <Link href={`/store/${data.STOR_CD || ''}`}>
    <div
      className={styles.container}
      style={{
        background: `url(/images/represent/${data.STOR_CD}.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.cover}>
        <div className={styles.wrapper}>
          <div className={styles.title}>{data.STOR_NM || ''}</div>
          <div className={styles.desc}>{data.TEL || ''}</div>
          <div className={styles.desc}>{data.ADDR || ''}</div>
        </div>
      </div>
    </div>
  </Link>
);

export default Store;
