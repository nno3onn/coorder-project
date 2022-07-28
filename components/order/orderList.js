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

    console.log(orderFood);
    orderFood.forEach((f) => {
      sum += f.foodCost;
      if (f.options) {
        Object.values(f.options).forEach((opt) => (sum += opt.cost * opt.cnt));
      }
      // sum *= f.foodCnt;
    });
    return sum;
  };

  return (
    <div className={styles.container}>
      {orderFood.map((food) => (
        <div key={v4()}>
          <div className={styles.img} />
          <div className={styles['list-wrapper']}>
            <div className={styles.foodName}>{food.foodName}</div>
            <div className={styles.foodCost}>{food.foodCost.toLocaleString()}원</div>
            <div className={styles.border} />
            {/* {food.options &&
              food.options.map((op) => (
                <div className={styles.option}>
                  <div>{op.n}</div>
                  <div>+{op.c.toLocaleString()}원</div>
                </div>
              ))} */}
            <div className={styles.border} />
            <div className={styles.sum}>
              <div>합계</div>
              <div className={styles.cost}>{calcSum().toLocaleString()}원</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
