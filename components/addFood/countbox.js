import { updateAction } from 'lib/store/modules/foodReducer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './countbox.module.scss';

const CountBox = ({ name, cost, isOption = true }) => {
  const [cnt, setCnt] = useState(isOption ? 0 : 1);

  const router = useRouter();
  const { storeName, foodName } = router.query;
  const dispatch = useDispatch();
  const foodShopping = useSelector((state) =>
    state.foodReducer.filter((s) => s.storeName === storeName && s.foodName === foodName),
  );

  const onDispatch = (v) => () => {
    setCnt((prevCnt) => {
      if (prevCnt === 0 && v === -1) return prevCnt;
      return prevCnt + v;
    });

    if (isOption) {
      dispatch(
        updateAction({
          storeName,
          foodName,
          foodCost: foodShopping[0].foodCost,
          foodCnt: foodShopping[0].foodCnt,
          options: { ...foodShopping[0].options, [name]: { cost, cnt } },
        }),
      );
    } else {
      dispatch(
        updateAction({
          storeName,
          foodName,
          foodCost: 9800,
          foodCnt: cnt,
        }),
      );
    }
  };

  return (
    <div className={styles.countbox}>
      <div className={styles.minus} onClick={onDispatch(-1)}>
        -
      </div>
      <div className={styles.center}>{cnt}</div>
      <div className={styles.plus} onClick={onDispatch(+1)}>
        +
      </div>
    </div>
  );
};

export default CountBox;
