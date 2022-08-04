import { updateAction } from 'lib/store/modules/optionReducer';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './countbox.module.scss';

// isOption = false => 수량
const CountBox = ({ name, cost, isCount = false }) => {
  const dispatch = useDispatch();
  const [cnt, setCnt] = useState(isCount ? 1 : 0);
  const options = useSelector((state) => state.optionReducer);

  const onCount = (v) => () => {
    if (!(cnt === (isCount ? 1 : 0) && v === -1)) {
      const count = cnt + v;
      setCnt(count);

      if (!isCount) {
        const newOptions = { ...options, [name]: { cost, cnt: count } };
        if (count === 0) {
          delete newOptions[name];
        }
        console.log('count', { name, cost, cnt: count });
        dispatch(updateAction({ name, cost, cnt: count }));
      } else {
        sessionStorage.setItem('count', count);
      }
    }
  };

  return (
    <div className={styles.countbox}>
      <div className={styles.minus} onClick={onCount(-1)}>
        -
      </div>
      <div className={styles.center}>{cnt}</div>
      <div className={styles.plus} onClick={onCount(+1)}>
        +
      </div>
    </div>
  );
};

export default CountBox;
