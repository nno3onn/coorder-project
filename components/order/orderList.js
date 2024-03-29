import { deleteAction } from 'lib/store/modules/foodReducer';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';

import FoodImage from './foodImage';

import styles from './orderList.module.scss';

const OrderList = ({ setTotalCost }) => {
  const router = useRouter();
  const { STOR_CD } = router.query;
  const dispatch = useDispatch();

  const allFood = useSelector((state) => state.foodReducer);
  const orderFood = allFood.filter((f) => f.storeCode === STOR_CD);

  const calcSum = () => {
    let sum = 0;

    orderFood.forEach((f) => {
      let c = f.foodCost;
      if (f.options) {
        Object.values(f.options).forEach((opt) => (c += opt.cost * (opt.cnt === 0 ? 1 : opt.cnt)));
      }
      sum += c * f.foodCnt;
    });
    setTotalCost(sum);
    return sum;
  };

  const onCancel = (index) => () => {
    dispatch(deleteAction({ index }));
  };

  return (
    <>
      {orderFood.length ? (
        <div className={styles.container}>
          {orderFood.map((food, index) => (
            <div key={v4()}>
              <div className={styles.wrapper}>
                <FoodImage img={`/images/food/${STOR_CD}/${food.foodCode}.jpg`} />
                <div className={styles['list-wrapper']}>
                  <div className={styles['food-header']}>
                    <div className={styles.foodName}>{food.foodName}</div>
                    <img src="/icons/cancel.png" alt="cancel" onClick={onCancel(index)} />
                  </div>
                  <div className={styles.foodCost}>
                    {food.foodCost.toLocaleString()}원 ({food.foodCnt}개)
                  </div>
                  <div className={styles.border} />
                  {food.options &&
                    Object.entries(food.options).map(([k, v]) => (
                      <div className={styles.option} key={v4()}>
                        <div>
                          {k} {v.cnt !== 0 && v.cnt}
                        </div>
                        <div>+{v.cost.toLocaleString()}원</div>
                      </div>
                    ))}
                </div>
              </div>
              <div className={styles.border} />
            </div>
          ))}
          <div className={styles.sum}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: 120, height: 1 }} />
              <div>합계</div>
            </div>
            <div className={styles.cost}>{calcSum().toLocaleString()}원</div>
          </div>
        </div>
      ) : (
        '주문 내역이 없습니다.'
      )}{' '}
    </>
  );
};

export default OrderList;
