import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import styles from './orderList.module.scss';

const OrderList = () => {
  const router = useRouter();
  const { storeName } = router.query;

  const allFood = useSelector((state) => state.foodReducer);
  const orderFood = allFood.filter((f) => f.storeName === storeName);

  const calcSum = () => {
    console.log(1);
    const sum = orderFood.reduce((prevCost, food) => {
      console.log(prevCost, food);
      console.log(food);
      let a = food.foodCost;
      food.options.forEach((op) => (a += op.c));
      console.log(a);
      return a;
    });
  };

  return (
    <div className={styles.container}>
      {orderFood.map((food) => (
        <>
          <div className={styles.img} />
          <div className={styles['list-wrapper']}>
            <div className={styles.foodName}>{food.foodName}</div>
            <div className={styles.foodCost}>{food.foodCost.toLocaleString()}원</div>
            <div className={styles.border} />
            {food.options &&
              food.options.map((op) => (
                <div className={styles.option}>
                  <div>{op.n}</div>
                  <div>+{op.c.toLocaleString()}원</div>
                </div>
              ))}
            <div className={styles.border} />
            <div className={styles.sum}>
              <div>합계</div>
              <div className={styles.cost}>{calcSum()}원</div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default OrderList;
