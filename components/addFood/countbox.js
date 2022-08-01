import { useEffect, useState } from 'react';

import styles from './countbox.module.scss';

// isOption = false => 수량
const CountBox = ({ name, cost, isCount = false }) => {
  const [cnt, setCnt] = useState(isCount ? 1 : 0);
  const [options, setOptions] = useState({});

  const onCount = (v) => () => {
    if (!(cnt === (isCount ? 1 : 0) && v === -1)) {
      const count = cnt + v;

      if (!isCount) {
        const newOptions = options ? { ...options, [name]: { cost, cnt: count } } : { [name]: { cost, cnt: count } };
        if (count === 0) {
          delete newOptions[name];
        }
        sessionStorage.setItem('options', JSON.stringify(newOptions));
      } else {
        sessionStorage.setItem('count', count);
      }
      setCnt(count);
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
