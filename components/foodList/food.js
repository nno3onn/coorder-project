import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './food.module.scss';

const Food = ({ info }) => {
  const router = useRouter();
  const { STOR_CD } = router.query;
  const { PRICE, STOR_NM, MENU_CD, MENU_NM, MENU_DETL } = info;

  return (
    <>
      <Link href={`/store/${STOR_CD}/food/${MENU_CD}`}>
        <div className={styles['food-wrapper']}>
          <div
            className={styles['img-wrapper']}
            style={{
              background: `url(/images/food/${STOR_CD}/${MENU_CD}.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={styles.img} />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{MENU_NM}</div>
            <div className={styles.detail}>{MENU_DETL}</div>
            <div className={styles.cost}>{PRICE.toLocaleString()}원</div>
          </div>
        </div>
      </Link>
      <div className={styles.border} />
    </>
  );
};

export default Food;
