import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

import styles from './orderList.module.scss';

const OrderList = () => {
  const router = useRouter();
  const { storeName } = router.query;

  const allFood = useSelector((state) => state.foodReducer);
  const orderFood = allFood.filter((f) => f.storeName === storeName);

  const calcSum = () => {
    let sum = 0;

    orderFood.forEach((f) => {
      sum += f.foodCost;
      if (f.options) {
        Object.values(f.options).forEach((opt) => (sum += opt.cost * opt.cnt));
      }
      sum *= f.foodCnt;
    });
    return sum;
  };

  return (
    <div className={styles.container}>
      {orderFood.map((food) => (
        <>
          <div className={styles.wrapper} key={v4()}>
            <div className={styles.img} />
            <div className={styles['list-wrapper']}>
              <div className={styles.foodName}>{food.foodName}</div>
              <div className={styles.foodCost}>
                {food.foodCost.toLocaleString()}원 ({food.foodCnt}개)
              </div>
              <div className={styles.border} />
              {food.options &&
                Object.entries(food.options).map(([k, v]) => (
                  <div className={styles.option}>
                    <div>
                      {k} {v.cnt !== 0 && v.cnt}
                    </div>
                    <div>+{v.cost.toLocaleString()}원</div>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.border} />
        </>
      ))}
      <div className={styles.sum}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: 120, height: 1 }} />
          <div>합계</div>
        </div>

        <div className={styles.cost}>{calcSum().toLocaleString()}원</div>
      </div>
    </div>
  );
};

export default OrderList;
