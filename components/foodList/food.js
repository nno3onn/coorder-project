import { useRouter } from 'next/router';

import styles from './food.module.scss';

const Food = ({ info }) => {
  const router = useRouter();
  const { storeName } = router.query;

  return (
    <>
      <div onClick={() => router.push(`/store/${storeName}/food/${info.name}`)} className={styles['food-wrapper']}>
        <div
          className={styles['img-wrapper']}
          style={{
            background:
              'url(https://food.fnr.sndimg.com/content/dam/images/food/products/2022/3/11/rx_goldbelly-clinton-street-diner-zeus-burger.jpg.rend.hgtvcom.406.305.suffix/1647019464547.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className={styles.img} />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{info.name}</div>
          <div className={styles.cost}>{info.cost.toLocaleString()}원</div>
        </div>
      </div>
      <div className={styles.border} />
    </>
  );
};

export default Food;
