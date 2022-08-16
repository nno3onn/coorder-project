import getStoreData from 'lib/getStoreData';
import { useEffect } from 'react';
import styles from './background.module.scss';

const FoodBackground = ({ STOR_CD }) => {
  const data = getStoreData(STOR_CD);

  return (
    <div
      className={styles.container}
      style={{
        background: `url(/images/represent/${STOR_CD}.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.cover}>
        <div className={styles.storename}>{data && data.STOR_NM}</div>
        <div className={styles.desc}>
          {data && data.TEL}
          <br />
          {data && data.ADDR}
        </div>
      </div>
    </div>
  );
};

export default FoodBackground;
